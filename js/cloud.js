/* ====== CLOUD SYNC ====== */

var CLOUD_URL = 'https://api.npoint.io/3ca380c0dcae8008ce4a';
var cloudSyncPending = false;
var lastCloudSync = 0;

function cloudSave() {
  if (cloudSyncPending) return;
  cloudSyncPending = true;
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
    var el = document.getElementById('syncStatus');
    if (el) el.textContent = '☁️ Synced';
  }).catch(function(e) {
    cloudSyncPending = false;
    console.log('Cloud save failed:', e);
    var el = document.getElementById('syncStatus');
    if (el) el.textContent = '⚠️ Offline';
  });
}

function cloudLoad(callback) {
  fetch(CLOUD_URL).then(function(r) { return r.json(); }).then(function(data) {
    if (data && data.profiles && Array.isArray(data.profiles)) {
      // Merge cloud profiles with local
      var localIds = {};
      for (var i = 0; i < profiles.length; i++) localIds[profiles[i].id] = i;
      for (var j = 0; j < data.profiles.length; j++) {
        var cp = data.profiles[j];
        if (localIds[cp.id] !== undefined) {
          // Update existing
          profiles[localIds[cp.id]] = cp;
        } else {
          // Add new from cloud
          profiles.push(cp);
        }
        // Import state data from cloud
        if (data.states && data.states[cp.id]) {
          // Cloud state wins if local has fewer questions answered
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
    }
    if (callback) callback(true);
  }).catch(function(e) {
    console.log('Cloud load failed (offline mode):', e);
    if (callback) callback(false);
  });
}

