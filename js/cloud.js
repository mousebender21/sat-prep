/* ====== CLOUD SYNC (Dual Backend) ====== */

/* Primary: jsonblob.com | Fallback: npoint.io */
var JSONBLOB_URL = ''; /* Set after first create */
var NPOINT_URL = 'https://api.npoint.io/3ca380c0dcae8008ce4a';
var cloudSyncPending = false;
var lastCloudSync = 0;

try { 
  lastCloudSync = parseInt(localStorage.getItem('sat-last-sync') || '0', 10);
  JSONBLOB_URL = localStorage.getItem('sat-jsonblob-url') || '';
} catch(e) {}

function updateSyncIndicator(status) {
  var el = document.getElementById('syncStatus');
  if (!el) return;
  if (status === 'synced') { el.textContent = '\u2601\ufe0f'; el.style.color = '#22c55e'; }
  else if (status === 'syncing') { el.textContent = '\u21bb'; el.style.color = '#94a3b8'; }
  else { el.textContent = ''; }
}

function buildSyncData() {
  var data = { profiles: profiles, states: {} };
  for (var i = 0; i < profiles.length; i++) {
    try {
      var s = localStorage.getItem('sat-state-' + profiles[i].id);
      if (s) data.states[profiles[i].id] = JSON.parse(s);
    } catch(e) {}
  }
  return data;
}

function cloudSave() {
  if (cloudSyncPending) return;
  cloudSyncPending = true;
  updateSyncIndicator('syncing');
  var data = buildSyncData();
  var body = JSON.stringify(data);
  var saved = false;

  function onSuccess() {
    if (saved) return; saved = true;
    cloudSyncPending = false;
    lastCloudSync = Date.now();
    try { localStorage.setItem('sat-last-sync', String(lastCloudSync)); } catch(e) {}
    updateSyncIndicator('synced');
  }
  function onFail() {
    cloudSyncPending = false;
    updateSyncIndicator('offline');
  }

  var attempts = 0;
  var totalAttempts = JSONBLOB_URL ? 2 : 1;

  /* Try jsonblob first (if we have a URL) */
  if (JSONBLOB_URL) {
    var ctrl1 = new AbortController();
    setTimeout(function() { ctrl1.abort(); }, 4000);
    fetch(JSONBLOB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: body,
      signal: ctrl1.signal
    }).then(function(r) { if (r.ok) onSuccess(); else throw new Error(r.status); })
    .catch(function() { attempts++; if (attempts >= totalAttempts && !saved) onFail(); });
  }

  /* Also try npoint */
  var ctrl2 = new AbortController();
  setTimeout(function() { ctrl2.abort(); }, 4000);
  fetch(NPOINT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body,
    signal: ctrl2.signal
  }).then(function(r) { if (r.ok) onSuccess(); else throw new Error(r.status); })
  .catch(function() { attempts++; if (attempts >= totalAttempts && !saved) onFail(); });
}

function cloudLoad(callback) {
  var done = false;
  updateSyncIndicator('syncing');
  var timeout = setTimeout(function() {
    if (!done) { done = true; updateSyncIndicator('offline'); if (callback) callback(false); }
  }, 4000);

  function handleData(data) {
    if (done) return; done = true; clearTimeout(timeout);
    if (data && data.profiles && Array.isArray(data.profiles)) {
      var localIds = {};
      for (var i = 0; i < profiles.length; i++) localIds[profiles[i].id] = i;
      for (var j = 0; j < data.profiles.length; j++) {
        var cp = data.profiles[j];
        if (localIds[cp.id] !== undefined) { profiles[localIds[cp.id]] = cp; }
        else { profiles.push(cp); }
        if (data.states && data.states[cp.id]) {
          try {
            var ls = JSON.parse(localStorage.getItem('sat-state-' + cp.id));
            var cs = data.states[cp.id];
            var lt = ls ? (ls.correct||0)+(ls.wrong||0) : 0;
            var ct = (cs.correct||0)+(cs.wrong||0);
            if (ct >= lt) localStorage.setItem('sat-state-' + cp.id, JSON.stringify(cs));
          } catch(e) { localStorage.setItem('sat-state-' + cp.id, JSON.stringify(data.states[cp.id])); }
        }
      }
      saveProfiles();
      lastCloudSync = Date.now();
      try { localStorage.setItem('sat-last-sync', String(lastCloudSync)); } catch(e) {}
      updateSyncIndicator('synced');
    }
    if (callback) callback(true);
  }

  /* Race: try jsonblob and npoint in parallel, use first to respond */
  if (JSONBLOB_URL) {
    var c1 = new AbortController();
    setTimeout(function(){ c1.abort(); }, 4000);
    fetch(JSONBLOB_URL, { headers: { 'Accept': 'application/json' }, signal: c1.signal })
      .then(function(r) { return r.json(); })
      .then(handleData)
      .catch(function() {});
  }

  var c2 = new AbortController();
  setTimeout(function(){ c2.abort(); }, 4000);
  fetch(NPOINT_URL, { signal: c2.signal })
    .then(function(r) { return r.json(); })
    .then(handleData)
    .catch(function() {});

  /* If no jsonblob URL yet, create one on first successful npoint load */
  if (!JSONBLOB_URL) {
    var c3 = new AbortController();
    setTimeout(function(){ c3.abort(); }, 4000);
    fetch('https://jsonblob.com/api/jsonBlob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(buildSyncData()),
      signal: c3.signal
    }).then(function(r) {
      var loc = r.headers.get('Location');
      if (loc) {
        JSONBLOB_URL = loc;
        try { localStorage.setItem('sat-jsonblob-url', loc); } catch(e) {}
      }
    }).catch(function() { /* jsonblob unavailable, no worries */ });
  }
}

/* Auto-sync every 2 minutes */
setInterval(function() { if (activeProfile && !cloudSyncPending) cloudSave(); }, 120000);
