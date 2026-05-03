/* ====== HOME SCREEN ====== */

/* ============================================================ */
function showHome() {
  showNav();
  var total = state.correct + state.wrong;
  var pct = total > 0 ? Math.round(state.correct / total * 100) : 0;
  var est = getEstScore();
  var html = '<div class="fade-in">';
  html += '<h2 style="margin-bottom:4px">Hi, ' + activeProfile.name + '!</h2>';
  html += '<p class="text-sm mb-16">Target: 1350+ &middot; ' + ALL_QS.length + ' questions</p>';
  if (activeProfile && activeProfile.major && activeProfile.major !== 'general') {
    var themeNames = {marine:'&#128044; Marine Bio',engineering:'&#9881; Engineering',business:'&#128188; Business',medicine:'&#127973; Medicine',environment:'&#127807; Environment',sports:'&#127946; Sports',arts:'&#127917; Performing Arts'};
    var themeName = themeNames[activeProfile.major] || activeProfile.major;
    var bonusCount = activeProfile.major === 'marine' && typeof THEME_MARINE !== 'undefined' ? THEME_MARINE.length : 0;
    html += '<div style="display:inline-block;padding:6px 14px;background:linear-gradient(135deg,#f0fdfa,#ccfbf1);border:1px solid #99f6e4;border-radius:20px;font-size:13px;font-weight:600;color:#0d9488;margin-bottom:12px">';
    html += themeName + ' Track';
    if (bonusCount > 0) html += ' &middot; +' + bonusCount + ' themed Qs';
    html += '</div>';
  }
  /* --- SVG Accuracy Ring --- */
  var ringPct = pct;
  var circumf = 2 * 3.14159 * 42;
  var dashOff = circumf - (ringPct / 100) * circumf;
  html += '<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px">';
  html += '<div style="position:relative;width:90px;height:90px;flex-shrink:0">';
  html += '<svg width="90" height="90" viewBox="0 0 100 100">';
  html += '<circle cx="50" cy="50" r="42" fill="none" stroke="#e2e8f0" stroke-width="8"/>';
  html += '<circle cx="50" cy="50" r="42" fill="none" stroke="#0d9488" stroke-width="8" stroke-linecap="round" stroke-dasharray="' + circumf.toFixed(1) + '" stroke-dashoffset="' + dashOff.toFixed(1) + '" transform="rotate(-90 50 50)" style="transition:stroke-dashoffset 0.8s ease"/>';
  html += '<text x="50" y="54" text-anchor="middle" font-size="20" font-weight="800" fill="#0d9488">' + pct + '%</text>';
  html += '</svg></div>';
  html += '<div style="flex:1"><div class="stat-value" style="font-size:18px">' + est + '</div><div class="stat-label">Est. Score</div>';
  html += '<div style="margin-top:6px"><span style="font-weight:700;color:#0d9488">' + (state.streak > 0 ? state.streak + ' &#128293;' : '0') + '</span> <span class="text-sm">streak</span></div>';
  html += '</div></div>';
  /* --- Domain Mastery Heat Map --- */
  html += '<div class="card" style="padding:14px"><p style="font-weight:600;font-size:13px;margin-bottom:8px">Domain Mastery</p>';
  html += '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px">';
  for (var hi = 0; hi < ALL_DOMAIN_KEYS.length; hi++) {
    var hk = ALL_DOMAIN_KEYS[hi];
    var hd = state.domainStats[hk] || {c:0,w:0};
    var ht = hd.c + hd.w;
    var hp = ht > 0 ? Math.round(hd.c / ht * 100) : -1;
    var hColor = '#94a3b8';
    if (hp >= 0 && hp < 40) hColor = '#ef4444';
    else if (hp >= 40 && hp < 60) hColor = '#f59e0b';
    else if (hp >= 60 && hp < 80) hColor = '#eab308';
    else if (hp >= 80) hColor = '#22c55e';
    var shortLabel = (DOMAIN_LABELS[hk] || hk);
    if (shortLabel.length > 10) shortLabel = shortLabel.substring(0, 9) + '.';
    html += '<div style="text-align:center"><div class="heat-sq" style="background:' + hColor + '">' + (hp >= 0 ? hp + '%' : '-') + '</div>';
    html += '<div style="font-size:9px;color:#64748b;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + shortLabel + '</div></div>';
  }
  html += '</div></div>';
  /* --- Session Trend Sparkline --- */
  if (state.sessionHistory && state.sessionHistory.length > 1) {
    var sh = state.sessionHistory.slice(-10);
    var spW = 200, spH = 40;
    var spPts = '';
    for (var si = 0; si < sh.length; si++) {
      var sx = Math.round(10 + (si / (sh.length - 1)) * (spW - 20));
      var sy = Math.round(spH - 4 - (sh[si].pct / 100) * (spH - 8));
      spPts += (si > 0 ? ' L' : 'M') + sx + ',' + sy;
    }
    html += '<div class="card" style="padding:12px"><p style="font-weight:600;font-size:13px;margin-bottom:6px">Session Trend</p>';
    html += '<svg width="' + spW + '" height="' + spH + '" viewBox="0 0 ' + spW + ' ' + spH + '" style="display:block;margin:0 auto">';
    html += '<path d="' + spPts + '" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    for (var sdi = 0; sdi < sh.length; sdi++) {
      var sdx = Math.round(10 + (sdi / (sh.length - 1)) * (spW - 20));
      var sdy = Math.round(spH - 4 - (sh[sdi].pct / 100) * (spH - 8));
      html += '<circle cx="' + sdx + '" cy="' + sdy + '" r="3" fill="#0d9488"/>';
    }
    html += '</svg>';
    html += '<p style="font-size:11px;color:#94a3b8;text-align:center;margin-top:2px">Last ' + sh.length + ' sessions</p></div>';
  }
  // QOTD
  var qotd = buildQOTD();
  if (qotd) html += qotd;
  // Spaced Rep
  var srCount = getSRCount();
  if (srCount > 0) {
    html += '<div class="card" style="cursor:pointer;border:2px solid #6366f1" onclick="startSR()">';
    html += '<div style="display:flex;align-items:center;gap:10px">';
    html += '<span style="font-size:24px">&#128260;</span>';
    html += '<div><div style="font-weight:700;color:#6366f1">Review Due</div>';
    html += '<div class="text-sm">' + srCount + ' question' + (srCount > 1 ? 's' : '') + ' to review</div></div></div></div>';
  }
  // Quick actions
  html += '<button class="btn btn-primary mb-8" onclick="navTo(' + "'practice'" + ')">&#128221; Start Practice</button>';
  html += '<button class="btn btn-outline mb-8" onclick="navTo(' + "'test'" + ')">&#9201; Timed Test</button>';
  html += '<button class="btn btn-outline btn-sm mb-8" onclick="showFormulaSheet()">&#128209; Formula Sheet</button>';
  html += '<button class="btn btn-outline btn-sm" onclick="showSettings()" style="margin-top:4px">&#9881; Settings</button>';
  html += '</div>';
  getApp().innerHTML = html;
}

/* ============================================================ */
function buildQOTD() {
  if (ALL_QS.length === 0) return '';
  var today = getDayKey();
  if (!state.qotdId || state.qotdDate !== today) {
    var seed = 0;
    for (var i = 0; i < today.length; i++) seed += today.charCodeAt(i);
    state.qotdId = ALL_QS[seed % ALL_QS.length].id;
    state.qotdDate = today;
    state.qotdAnswered = false;
    saveState();
  }
  if (state.qotdAnswered) return '';
  var q = null;
  for (var j = 0; j < ALL_QS.length; j++) {
    if (ALL_QS[j].id === state.qotdId) { q = ALL_QS[j]; break; }
  }
  if (!q) return '';
  return '<div class="card" style="cursor:pointer;border:2px solid #f59e0b;background:linear-gradient(135deg,#fefce8,#fef3c7)" onclick="startQOTD()">' +
    '<div style="display:flex;align-items:center;gap:10px">' +
    '<span style="font-size:24px">&#11088;</span>' +
    '<div><div style="font-weight:700;color:#d97706">Question of the Day</div>' +
    '<div class="text-sm">Tap to answer</div></div></div></div>';
}

function startQOTD() {
  var q = null;
  for (var i = 0; i < ALL_QS.length; i++) {
    if (ALL_QS[i].id === state.qotdId) { q = ALL_QS[i]; break; }
  }
  if (!q) return;
  srQueue = [{ q: q, sr: null }];
  srIdx = 0;
  srAnswered = false;
  showSRQ();
  state.qotdAnswered = true;
  saveState();
}

/* ============================================================ */
function getSRCount() {
  var now = Date.now();
  var count = 0;
  for (var i = 0; i < state.spacedRep.length; i++) {
    if (state.spacedRep[i].dueAt <= now) count++;
  }
  return count;
}

function startSR() {
  var now = Date.now();
  var due = [];
  for (var i = 0; i < state.spacedRep.length; i++) {
    if (state.spacedRep[i].dueAt <= now) {
      var q = null;
      for (var j = 0; j < ALL_QS.length; j++) {
        if (ALL_QS[j].id === state.spacedRep[i].id) { q = ALL_QS[j]; break; }
      }
      if (q) due.push({ q: q, sr: state.spacedRep[i] });
    }
  }
  if (due.length === 0) { navTo('home'); return; }
  srQueue = due;
  srIdx = 0;
  srAnswered = false;
  showSRQ();
}

function showSRQ() {
  if (srIdx >= srQueue.length) { navTo('home'); return; }
  srAnswered = false;
  var item = srQueue[srIdx];
  var q = item.q;
  var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">';
  html += '<button class="btn btn-outline btn-sm" style="width:auto;padding:8px 12px" onclick="navTo(' + "'home'" + ')">&#8592; Home</button>';
  html += '<span class="text-sm">Review ' + (srIdx+1) + ' of ' + srQueue.length + '</span></div>';
  if (q.passage) html += '<div class="passage-card">' + q.passage + '</div>';
  html += '<div class="card"><p style="font-weight:600;line-height:1.5;margin-bottom:16px">' + q.question + '</p>';
    var visual = getVisual(q.id); if (visual) html += '<div style="text-align:center;margin:12px 0;padding:12px;background:#f8fafc;border-radius:10px">' + visual + '</div>';
  for (var i = 0; i < q.answers.length; i++) {
    html += '<button class="choice" id="sr' + i + '" onclick="srAnswer(' + i + ')">';
    html += '<span class="choice-letter">' + String.fromCharCode(65+i) + '</span> ' + cleanMath(q.answers[i]);
    html += '</button>';
  }
  html += '</div><div id="srFeedback"></div>';
  getApp().innerHTML = html;
}

function srAnswer(idx) {
  if (srAnswered) return;
  srAnswered = true;
  var item = srQueue[srIdx];
  var q = item.q;
  var correct = idx === q.correct;
  for (var i = 0; i < q.answers.length; i++) {
    var btn = document.getElementById('sr' + i);
    if (!btn) continue;
    btn.classList.add('disabled');
    if (i === q.correct) btn.classList.add('correct');
    if (i === idx && !correct) btn.classList.add('wrong');
  }
  if (item.sr) {
    if (correct) {
      item.sr.interval = Math.min((item.sr.interval || 1) * 2, 7);
      item.sr.dueAt = Date.now() + item.sr.interval * DAY;
      if (item.sr.interval >= 7) state.spacedRep = state.spacedRep.filter(function(s){return s.id !== q.id;});
    } else {
      item.sr.interval = 1;
      item.sr.dueAt = Date.now() + DAY;
    }
    saveState();
  }
  var fb = '<div class="card mt-12">';
  fb += '<p style="font-weight:700;color:' + (correct ? '#22c55e' : '#ef4444') + '">' + (correct ? '&#10004; Correct!' : '&#10008; Incorrect') + '</p>';
  fb += '<p class="text-sm mt-8">' + (q.explanation || '') + '</p>';
  fb += '<button class="btn btn-primary mt-12" onclick="nextSR()">Next</button></div>';
  document.getElementById('srFeedback').innerHTML = fb;
}

function nextSR() { srIdx++; showSRQ(); }

function addToSR(qId) {
  for (var i = 0; i < state.spacedRep.length; i++) {
    if (state.spacedRep[i].id === qId) { state.spacedRep[i].interval = 1; state.spacedRep[i].dueAt = Date.now() + DAY; return; }
  }
  state.spacedRep.push({ id: qId, interval: 1, dueAt: Date.now() + DAY });
}

/* ============================================================ */
function showFormulaSheet() {
  var frac = function(n, d) { return '<span style="display:inline-flex;flex-direction:column;vertical-align:middle;text-align:center;line-height:1.15;margin:0 2px"><span style="border-bottom:1.5px solid currentColor;padding:0 3px;font-size:0.9em">' + n + '</span><span style="padding:0 3px;font-size:0.9em">' + d + '</span></span>'; };
  var sup = function(x) { return '<sup style="font-size:0.7em;margin-left:-0.1em">' + x + '</sup>'; };
  var sub = function(x) { return '<sub style="font-size:0.7em;margin-left:-0.05em">' + x + '</sub>'; };
  var rad = function(x) { return '<span style="white-space:nowrap;display:inline-flex;align-items:stretch;line-height:1"><span style="font-size:1.2em;line-height:1;margin-right:-1px">√</span><span style="border-top:1.5px solid currentColor;padding:1px 3px 0 1px;display:inline-flex;align-items:center;margin-top:1px">' + x + '</span></span>'; };
  var i = function(x) { return '<i>' + x + '</i>'; };
  var html = '<div class="fade-in"><h2>📋 Formula Reference</h2>';

  // ALGEBRA
  html += '<div class="card" style="border-left:4px solid #0d9488"><h3 style="color:#0d9488;font-size:15px;margin-bottom:12px">📐 Algebra</h3>';
  html += '<div style="margin-bottom:10px"><b>Slope-Intercept:</b> ' + i('y') + ' = ' + i('m') + i('x') + ' + ' + i('b') + '</div>';
  html += '<div style="margin-bottom:10px"><b>Point-Slope:</b> ' + i('y') + ' − ' + i('y') + sub('1') + ' = ' + i('m') + '(' + i('x') + ' − ' + i('x') + sub('1') + ')</div>';
  html += '<div style="margin-bottom:10px"><b>Slope:</b> ' + i('m') + ' = ' + frac(i('y') + sub('2') + ' − ' + i('y') + sub('1'), i('x') + sub('2') + ' − ' + i('x') + sub('1')) + '</div>';
  html += '<div style="margin-bottom:10px"><b>Standard Form:</b> ' + i('Ax') + ' + ' + i('By') + ' = ' + i('C') + '</div>';
  html += '<div><b>Midpoint:</b> (' + frac(i('x') + sub('1') + ' + ' + i('x') + sub('2'), '2') + ', ' + frac(i('y') + sub('1') + ' + ' + i('y') + sub('2'), '2') + ')</div>';
  html += '</div>';

  // ADVANCED MATH
  html += '<div class="card" style="border-left:4px solid #6366f1"><h3 style="color:#6366f1;font-size:15px;margin-bottom:12px">🧮 Advanced Math</h3>';
  html += '<div style="margin-bottom:10px"><b>Quadratic Formula:</b> ' + i('x') + ' = ' + frac('−' + i('b') + ' ± ' + rad(i('b') + sup('2') + ' − 4' + i('ac')), '2' + i('a')) + '</div>';
  html += '<div style="margin-bottom:10px"><b>Vertex Form:</b> ' + i('y') + ' = ' + i('a') + '(' + i('x') + ' − ' + i('h') + ')' + sup('2') + ' + ' + i('k') + ' <span style="font-size:11px;color:#94a3b8">vertex at (' + i('h') + ', ' + i('k') + ')</span></div>';
  html += '<div style="margin-bottom:10px"><b>Discriminant:</b> ' + i('D') + ' = ' + i('b') + sup('2') + ' − 4' + i('ac') + ' <span style="font-size:11px;color:#94a3b8">(D&gt;0: 2 roots, D=0: 1, D&lt;0: none)</span></div>';
  html += '<div style="margin-bottom:10px"><b>Difference of Squares:</b> ' + i('a') + sup('2') + ' − ' + i('b') + sup('2') + ' = (' + i('a') + ' + ' + i('b') + ')(' + i('a') + ' − ' + i('b') + ')</div>';
  html += '<div><b>Exponent Rules:</b> ' + i('a') + sup('m') + ' · ' + i('a') + sup('n') + ' = ' + i('a') + sup('m+n') + ' &nbsp;|&nbsp; ' + frac(i('a') + sup('m'), i('a') + sup('n')) + ' = ' + i('a') + sup('m−n') + '</div>';
  html += '</div>';

  // GEOMETRY
  html += '<div class="card" style="border-left:4px solid #f59e0b"><h3 style="color:#f59e0b;font-size:15px;margin-bottom:12px">📏 Geometry</h3>';
  html += '<div style="margin-bottom:10px"><b>Distance:</b> ' + i('d') + ' = ' + rad('(' + i('x') + sub('2') + ' − ' + i('x') + sub('1') + ')' + sup('2') + ' + (' + i('y') + sub('2') + ' − ' + i('y') + sub('1') + ')' + sup('2')) + '</div>';
  html += '<div style="margin-bottom:10px"><b>Circle:</b> (' + i('x') + ' − ' + i('h') + ')' + sup('2') + ' + (' + i('y') + ' − ' + i('k') + ')' + sup('2') + ' = ' + i('r') + sup('2') + ' <span style="font-size:11px;color:#94a3b8">center (' + i('h') + ',' + i('k') + '), radius ' + i('r') + '</span></div>';
  html += '<div style="margin-bottom:10px"><b>Areas:</b></div>';
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;font-size:14px;margin-bottom:10px">';
  html += '<div>Triangle: ' + frac('1','2') + i('bh') + '</div>';
  html += '<div>Circle: π' + i('r') + sup('2') + '</div>';
  html += '<div>Rect: ' + i('lw') + '</div>';
  html += '<div>Circumf: 2π' + i('r') + '</div>';
  html += '<div>Trapezoid: ' + frac('1','2') + '(' + i('b') + sub('1') + ' + ' + i('b') + sub('2') + ')' + i('h') + '</div>';
  html += '<div>Sphere SA: 4π' + i('r') + sup('2') + '</div>';
  html += '</div>';
  html += '<div style="margin-bottom:10px"><b>Volumes:</b></div>';
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;font-size:14px">';
  html += '<div>Box: ' + i('lwh') + '</div>';
  html += '<div>Cylinder: π' + i('r') + sup('2') + i('h') + '</div>';
  html += '<div>Cone: ' + frac('1','3') + 'π' + i('r') + sup('2') + i('h') + '</div>';
  html += '<div>Sphere: ' + frac('4','3') + 'π' + i('r') + sup('3') + '</div>';
  html += '</div></div>';

  // SPECIAL RIGHT TRIANGLES
  html += '<div class="card" style="border-left:4px solid #ec4899"><h3 style="color:#ec4899;font-size:15px;margin-bottom:12px">🔺 Special Right Triangles</h3>';
  html += '<div style="display:flex;gap:20px">';
  html += '<div style="flex:1;text-align:center"><b>45-45-90</b><div style="font-size:14px;margin-top:6px">' + i('x') + ' : ' + i('x') + ' : ' + i('x') + rad('2') + '</div></div>';
  html += '<div style="flex:1;text-align:center"><b>30-60-90</b><div style="font-size:14px;margin-top:6px">' + i('x') + ' : ' + i('x') + rad('3') + ' : 2' + i('x') + '</div></div>';
  html += '</div></div>';

  // TRIG VALUES TABLE
  html += '<div class="card" style="border-left:4px solid #8b5cf6"><h3 style="color:#8b5cf6;font-size:15px;margin-bottom:12px">📐 Trig Values</h3>';
  html += '<table style="width:100%;border-collapse:collapse;font-size:13px;text-align:center">';
  html += '<tr style="border-bottom:2px solid #e2e8f0"><th style="padding:6px;text-align:left">θ</th><th style="padding:6px">0°</th><th style="padding:6px">30°</th><th style="padding:6px">45°</th><th style="padding:6px">60°</th><th style="padding:6px">90°</th></tr>';
  html += '<tr style="border-bottom:1px solid #f1f5f9"><td style="padding:6px;text-align:left;font-weight:600">sin</td><td>0</td><td>' + frac('1','2') + '</td><td>' + frac(rad('2'),'2') + '</td><td>' + frac(rad('3'),'2') + '</td><td>1</td></tr>';
  html += '<tr style="border-bottom:1px solid #f1f5f9"><td style="padding:6px;text-align:left;font-weight:600">cos</td><td>1</td><td>' + frac(rad('3'),'2') + '</td><td>' + frac(rad('2'),'2') + '</td><td>' + frac('1','2') + '</td><td>0</td></tr>';
  html += '<tr><td style="padding:6px;text-align:left;font-weight:600">tan</td><td>0</td><td>' + frac(rad('3'),'3') + '</td><td>1</td><td>' + rad('3') + '</td><td>∞</td></tr>';
  html += '</table></div>';

  // DATA ANALYSIS
  html += '<div class="card" style="border-left:4px solid #14b8a6"><h3 style="color:#14b8a6;font-size:15px;margin-bottom:12px">📊 Data & Statistics</h3>';
  html += '<div style="margin-bottom:10px"><b>Mean:</b> ' + frac('Σ' + i('x'), i('n')) + ' &nbsp; <b>Probability:</b> P = ' + frac('favorable','total') + '</div>';
  html += '<div style="margin-bottom:10px"><b>Percent Change:</b> ' + frac('new − old','old') + ' × 100%</div>';
  html += '<div><b>Linear:</b> ' + i('y') + ' = ' + i('mx') + ' + ' + i('b') + ' &nbsp;|&nbsp; <b>Exponential:</b> ' + i('y') + ' = ' + i('a') + ' · ' + i('b') + sup(i('x')) + '</div>';
  html += '</div>';

  html += '<button class="btn btn-outline mt-8" onclick="navTo(' + "'home'" + ')">← Back</button>';
  html += '</div>';
  getApp().innerHTML = html;
}

