/* ====== CLOUD SYNC ====== */

var CLOUD_URL = 'https://api.npoint.io/3ca380c0dcae8008ce4a';
var cloudSyncPending = false;
var lastCloudSync = 0;

/* Restore last sync time from localStorage */
try { lastCloudSync = parseInt(localStorage.getItem('sat-last-sync') || '0', 10); } catch(e) {}

function updateSyncIndicator(status) {
  var el = document.getElementById('syncStatus');
  if (!el) return;
  if (status === 'synced') {
    el.textContent = '\u2601\ufe0f Synced';
    el.style.color = '#22c55e';
  } else if (status === 'syncing') {
    el.textContent = '\u21bb Syncing...';
    el.style.color = '#94a3b8';
  } else if (status === 'offline') {
    el.textContent = '\u26a0\ufe0f Offline';
    el.style.color = '#f59e0b';
  }
}

function cloudSave() {
  if (cloudSyncPending) return;
  cloudSyncPending = true;
  updateSyncIndicator('syncing');
  var data = { profiles: profiles, states: {} };
  for (var i = 0; i < profiles.length; i++) {
    try {
      var s = localStorage.getItem('sat-state-' + profiles[i].id);
      if (s) data.states[profiles[i].id] = JSON.parse(s);
    } catch(e) {}
  }
  fetch(CLOUD_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(function() {
    cloudSyncPending = false;
    lastCloudSync = Date.now();
    try { localStorage.setItem('sat-last-sync', String(lastCloudSync)); } catch(e) {}
    updateSyncIndicator('synced');
  }).catch(function(e) {
    cloudSyncPending = false;
    console.log('Cloud save failed:', e);
    updateSyncIndicator('offline');
  });
}

function cloudLoad(callback) {
  var done = false;
  updateSyncIndicator('syncing');
  var timer = setTimeout(function() {
    if (!done) {
      done = true;
      console.log('Cloud load timed out');
      updateSyncIndicator('offline');
      if (callback) callback(false);
    }
  }, 5000);
  fetch(CLOUD_URL).then(function(r) { return r.json(); }).then(function(data) {
    if (done) return;
    done = true; clearTimeout(timer);
    if (data && data.profiles && Array.isArray(data.profiles)) {
      var localIds = {};
      for (var i = 0; i < profiles.length; i++) localIds[profiles[i].id] = i;
      for (var j = 0; j < data.profiles.length; j++) {
        var cp = data.profiles[j];
        if (localIds[cp.id] !== undefined) {
          profiles[localIds[cp.id]] = cp;
        } else {
          profiles.push(cp);
        }
        if (data.states && data.states[cp.id]) {
          try {
            var localState = JSON.parse(localStorage.getItem('sat-state-' + cp.id));
            var cloudState = data.states[cp.id];
            var localTotal = (localState ? (localState.correct||0) + (localState.wrong||0) : 0);
            var cloudTotal = (cloudState.correct||0) + (cloudState.wrong||0);
            if (cloudTotal >= localTotal) {
              localStorage.setItem('sat-state-' + cp.id, JSON.stringify(cloudState));
            }
          } catch(e) {
            localStorage.setItem('sat-state-' + cp.id, JSON.stringify(data.states[cp.id]));
          }
        }
      }
      saveProfiles();
      lastCloudSync = Date.now();
      try { localStorage.setItem('sat-last-sync', String(lastCloudSync)); } catch(e) {}
      updateSyncIndicator('synced');
    }
    if (callback) callback(true);
  }).catch(function(e) {
    console.log('Cloud load failed (offline mode):', e);
    if (done) return; done = true; clearTimeout(timer);
    updateSyncIndicator('offline');
    if (callback) callback(false);
  });
}

/* Auto-sync every 60 seconds if the user is active */
setInterval(function() {
  if (activeProfile && !cloudSyncPending) {
    cloudSave();
  }
}, 60000);
