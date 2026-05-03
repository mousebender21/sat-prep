/* ====== SETTINGS ====== */

function showSettings() {
  var syncText = lastCloudSync > 0 ? 'Last synced: ' + new Date(lastCloudSync).toLocaleTimeString() : 'Not synced yet';
  var html = '<div class="fade-in"><h2>Settings</h2>';
  html += '<div class="card"><p style="font-weight:600;margin-bottom:8px">' + activeProfile.name + '</p>';
  html += '<p class="text-sm">Profile</p></div>';
  // Cloud sync status
  html += '<div class="card"><h3 style="font-size:15px;margin-bottom:10px">☁️ Cloud Sync</h3>';
  html += '<p class="text-sm mb-8">' + syncText + '</p>';
  html += '<p class="text-sm mb-8" style="font-size:11px;color:#94a3b8">Profiles sync automatically across all devices. Any device with the link sees the same profiles.</p>';
  html += '<button class="btn btn-primary btn-sm mb-8" style="width:100%" onclick="manualSync()">🔄 Sync Now</button>';
  html += '</div>';
  html += '<div class="card">';
  html += '<button class="btn btn-outline btn-sm mb-8" style="width:100%" onclick="switchUser()">Switch User</button>';
  html += '<button class="btn btn-danger btn-sm" style="width:100%" onclick="resetProgress()">Reset Progress</button>';
  html += '</div>';
  // Export/Import section
  html += '<div class="card"><h3 style="font-size:15px;margin-bottom:10px">📦 Backup</h3>';
  html += '<p class="text-sm mb-8">Download a local backup file</p>';
  html += '<button class="btn btn-outline btn-sm mb-8" style="width:100%" onclick="exportData()">⬇ Export Backup</button>';
  html += '<button class="btn btn-outline btn-sm mb-8" style="width:100%" onclick="triggerImport()">⬆ Import Backup</button>';
  html += '<input type="file" id="importFile" accept=".json" style="display:none" onchange="importData(this)">';
  html += '</div>';
  html += '<button class="btn btn-outline mt-8" onclick="navTo(' + "'home'" + ')">← Back</button>';
  html += '</div>';
  getApp().innerHTML = html;
}

function manualSync() {
  var btn = event.target;
  btn.textContent = 'Syncing...';
  btn.disabled = true;
  // First push local to cloud
  cloudSave();
  // Then pull cloud to local
  setTimeout(function() {
    cloudLoad(function(success) {
      if (activeProfile) loadState();
      btn.textContent = success ? '✅ Synced!' : '⚠️ Offline';
      btn.disabled = false;
      setTimeout(function() { showSettings(); }, 1500);
    });
  }, 1000);
}

/* ============================================================ */

function exportData() {
  var data = { version: 2, exported: new Date().toISOString(), profiles: profiles, states: {} };
  for (var i = 0; i < profiles.length; i++) {
    try {
      var s = localStorage.getItem('sat-state-' + profiles[i].id);
      if (s) data.states[profiles[i].id] = JSON.parse(s);
    } catch(e) {}
  }
  var json = JSON.stringify(data, null, 2);
  var blob = new Blob([json], {type: 'application/json'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'sat_progress_' + new Date().toISOString().slice(0,10) + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  alert('Progress exported! Transfer the file to your other device via AirDrop, email, or text.');
}

function triggerImport() {
  document.getElementById('importFile').click();
}

function importData(input) {
  if (!input.files || !input.files[0]) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);
      if (!data.profiles || !Array.isArray(data.profiles)) { alert('Invalid file format.'); return; }
      var count = data.profiles.length;
      if (!confirm('Import ' + count + ' profile(s)? This will merge with your existing data.')) return;
      // Merge profiles (skip duplicates by ID)
      var existingIds = {};
      for (var i = 0; i < profiles.length; i++) existingIds[profiles[i].id] = true;
      var added = 0;
      var updated = 0;
      for (var j = 0; j < data.profiles.length; j++) {
        var p = data.profiles[j];
        if (existingIds[p.id]) {
          // Update existing profile
          for (var k = 0; k < profiles.length; k++) {
            if (profiles[k].id === p.id) { profiles[k] = p; break; }
          }
          updated++;
        } else {
          profiles.push(p);
          added++;
        }
        // Import state data
        if (data.states && data.states[p.id]) {
          try { localStorage.setItem('sat-state-' + p.id, JSON.stringify(data.states[p.id])); } catch(e) {}
        }
      }
      saveProfiles();
      if (activeProfile) loadState();
      alert('Imported! ' + added + ' new + ' + updated + ' updated profile(s).');
      showSettings();
    } catch(err) {
      alert('Error reading file: ' + err.message);
    }
  };
  reader.readAsText(input.files[0]);
}

