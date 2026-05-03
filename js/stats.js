/* ====== STATS ====== */

/* ============================================================ */
function showStats() {
  showNav();
  var total = state.correct + state.wrong;
  var pct = total > 0 ? Math.round(state.correct / total * 100) : 0;
  var est = getEstScore();
  var html = '<div class="fade-in"><h2>Your Stats</h2>';
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px">';
  html += '<div class="stat-card"><div class="stat-value">' + total + '</div><div class="stat-label">Answered</div></div>';
  html += '<div class="stat-card"><div class="stat-value">' + est + '</div><div class="stat-label">Est. Score</div></div>';
  html += '<div class="stat-card"><div class="stat-value">' + state.streak + '&#128293;</div><div class="stat-label">Streak</div></div>';
  html += '<div class="stat-card"><div class="stat-value">' + state.bestStreak + '</div><div class="stat-label">Best</div></div>';
  html += '</div>';
  // Domain mastery
  html += '<div class="card"><h3 style="font-size:16px;margin-bottom:12px">Domain Mastery</h3>';
  for (var i = 0; i < ALL_DOMAIN_KEYS.length; i++) {
    var key = ALL_DOMAIN_KEYS[i];
    var ds = state.domainStats[key] || {c:0,w:0};
    var dt = ds.c + ds.w;
    var dp = dt > 0 ? Math.round(ds.c / dt * 100) : 0;
    var label = DOMAIN_LABELS[key] || key;
    html += '<div class="bar-row"><span class="bar-label">' + label + '</span>';
    html += '<div class="bar"><div class="bar-fill" style="width:' + dp + '%"></div></div>';
    html += '<span class="bar-pct">' + (dt > 0 ? dp + '%' : '-') + '</span></div>';
  }
  html += '</div>';
  html += '<button class="btn btn-outline mt-8 mb-8" onclick="copyProgressReport()">&#128203; Copy Progress Report</button>';
  html += '<button class="btn btn-outline mt-8" onclick="navTo(' + "'home'" + ')">Home</button>';
  html += '</div>';
  getApp().innerHTML = html;
}

/* ============================================================ */
function copyProgressReport() {
  var total = state.correct + state.wrong;
  var pct = total > 0 ? Math.round(state.correct / total * 100) : 0;
  var est = getEstScore();
  var report = '=== SAT Prep Progress Report ===\n';
  report += 'Student: ' + activeProfile.name + '\n';
  report += 'Date: ' + new Date().toLocaleDateString() + '\n';
  report += 'Questions Answered: ' + total + '\n';
  report += 'Accuracy: ' + pct + '%\n';
  report += 'Est. Score: ' + est + '\n';
  report += 'Current Streak: ' + state.streak + '\n';
  report += 'Best Streak: ' + state.bestStreak + '\n\n';
  report += '--- Domain Breakdown ---\n';
  for (var i = 0; i < ALL_DOMAIN_KEYS.length; i++) {
    var key = ALL_DOMAIN_KEYS[i];
    var ds = state.domainStats[key] || {c:0,w:0};
    var dt = ds.c + ds.w;
    var dp = dt > 0 ? Math.round(ds.c / dt * 100) : 0;
    var label = DOMAIN_LABELS[key] || key;
    report += label + ': ' + (dt > 0 ? dp + '% (' + ds.c + '/' + dt + ')' : 'No data') + '\n';
  }
  if (state.timedHistory && state.timedHistory.length > 0) {
    report += '\n--- Recent Timed Tests ---\n';
    for (var ti = 0; ti < state.timedHistory.length; ti++) {
      var th = state.timedHistory[ti];
      report += th.date + ' ' + th.mode + ': ' + th.pct + '% (' + th.correct + '/' + th.total + ')\n';
    }
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(report).then(function() {
      var btn = document.querySelector('[onclick="copyProgressReport()"]');
      if (btn) { btn.textContent = '\u2705 Copied!'; setTimeout(function() { btn.innerHTML = '&#128203; Copy Progress Report'; }, 2000); }
    });
  } else {
    var ta = document.createElement('textarea');
    ta.value = report;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    var btn2 = document.querySelector('[onclick="copyProgressReport()"]');
    if (btn2) { btn2.textContent = '\u2705 Copied!'; setTimeout(function() { btn2.innerHTML = '&#128203; Copy Progress Report'; }, 2000); }
  }
}

/* ============================================================ */
function checkMilestone() {
  var milestones = [50, 100, 200, 500];
  for (var mi = 0; mi < milestones.length; mi++) {
    var m = milestones[mi];
    if (state.correct >= m && !milestoneShown[m]) {
      milestoneShown[m] = true;
      var overlay = document.createElement('div');
      overlay.className = 'milestone-overlay';
      overlay.id = 'milestoneOverlay';
      overlay.onclick = function() { dismissMilestone(); };
      document.body.appendChild(overlay);
      var card = document.createElement('div');
      card.className = 'milestone-card';
      card.id = 'milestoneCard';
      card.innerHTML = '<div style="font-size:48px;margin-bottom:8px">&#127942;</div>' +
        '<h3 style="color:#0d9488;margin-bottom:4px">' + m + ' Correct!</h3>' +
        '<p style="font-size:14px;color:#64748b">Amazing milestone reached!</p>' +
        '<button class="btn btn-primary btn-sm" style="margin-top:14px;width:auto;padding:10px 28px" onclick="dismissMilestone()">Awesome!</button>';
      document.body.appendChild(card);
      setTimeout(function() { dismissMilestone(); }, 4000);
      break;
    }
  }
}

function dismissMilestone() {
  var ov = document.getElementById('milestoneOverlay');
  var cd = document.getElementById('milestoneCard');
  if (ov) ov.parentNode.removeChild(ov);
  if (cd) cd.parentNode.removeChild(cd);
}

