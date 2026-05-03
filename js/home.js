/* ====== HOME SCREEN ====== */

/* ============================================================ */
function showHome() {
  showNav();
  var total = state.correct + state.wrong;
  var pct = total > 0 ? Math.round(state.correct / total * 100) : 0;
  var est = getEstScore();
  var html = '<div class="fade-in">';
  /* Sticky header: user greeting + score ring always visible on mobile */
  html += '<div class="home-header">';
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
  html += '</div>'; /* close .home-header */
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
  hideNav();
  var k = function(tex) { return '<span class="km">' + tex + '</span>'; };
  var html = '<div style="padding:16px 16px 100px;max-width:520px;margin:0 auto">';
  html += '<h2 style="font-size:20px;margin-bottom:16px">📐 Formula Reference</h2>';

  // Algebra (teal)
  html += '<div style="background:#f0fdfa;border-radius:12px;padding:16px;margin-bottom:12px;border-left:4px solid #14b8a6">';
  html += '<div style="font-weight:700;color:#0d9488;margin-bottom:10px">Algebra</div>';
  html += '<div style="font-size:15px;line-height:2.2;color:#1e293b">';
  html += '<b>Slope:</b> ' + k('m = \\frac{y_2 - y_1}{x_2 - x_1}') + '<br>';
  html += '<b>Slope-Intercept:</b> ' + k('y = mx + b') + '<br>';
  html += '<b>Point-Slope:</b> ' + k('y - y_1 = m(x - x_1)') + '<br>';
  html += '<b>Standard Form:</b> ' + k('Ax + By = C') + '<br>';
  html += '<b>Direct Variation:</b> ' + k('y = kx') + '<br>';
  html += '<b>Midpoint:</b> ' + k('\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)') + '<br>';
  html += '<b>Distance:</b> ' + k('d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}') + '</div></div>';

  // Advanced Math (indigo)
  html += '<div style="background:#eef2ff;border-radius:12px;padding:16px;margin-bottom:12px;border-left:4px solid #6366f1">';
  html += '<div style="font-weight:700;color:#4f46e5;margin-bottom:10px">Advanced Math</div>';
  html += '<div style="font-size:15px;line-height:2.2;color:#1e293b">';
  html += '<b>Quadratic Formula:</b> ' + k('x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}') + '<br>';
  html += '<b>Vertex Form:</b> ' + k('f(x) = a(x-h)^2 + k') + '<br>';
  html += '<b>Discriminant:</b> ' + k('\\Delta = b^2 - 4ac') + '<br>';
  html += '<b>Difference of Squares:</b> ' + k('a^2 - b^2 = (a+b)(a-b)') + '<br>';
  html += '<b>Exponent Rules:</b> ' + k('a^m \\cdot a^n = a^{m+n}') + ' &nbsp; ' + k('\\frac{a^m}{a^n} = a^{m-n}') + ' &nbsp; ' + k('(a^m)^n = a^{mn}') + '<br>';
  html += '<b>Negative Exp:</b> ' + k('a^{-n} = \\frac{1}{a^n}') + '</div></div>';

  // Geometry (amber)
  html += '<div style="background:#fffbeb;border-radius:12px;padding:16px;margin-bottom:12px;border-left:4px solid #f59e0b">';
  html += '<div style="font-weight:700;color:#d97706;margin-bottom:10px">Geometry & Trigonometry</div>';
  html += '<div style="font-size:15px;line-height:2.2;color:#1e293b">';
  html += '<b>Circle Area:</b> ' + k('A = \\pi r^2') + ' &nbsp; <b>Circumference:</b> ' + k('C = 2\\pi r') + '<br>';
  html += '<b>Arc Length:</b> ' + k('s = r\\theta') + ' &nbsp; <b>Sector Area:</b> ' + k('A = \\frac{1}{2}r^2\\theta') + '<br>';
  html += '<b>Triangle Area:</b> ' + k('A = \\frac{1}{2}bh') + '<br>';
  html += '<b>Pythagorean:</b> ' + k('a^2 + b^2 = c^2') + '<br>';
  html += '<b>Rectangle:</b> ' + k('A = lw') + ' &nbsp; <b>Trapezoid:</b> ' + k('A = \\frac{1}{2}(b_1 + b_2)h') + '<br>';
  html += '<b>Cylinder Vol:</b> ' + k('V = \\pi r^2 h') + ' &nbsp; <b>Sphere Vol:</b> ' + k('V = \\frac{4}{3}\\pi r^3') + '<br>';
  html += '<b>Cone Vol:</b> ' + k('V = \\frac{1}{3}\\pi r^2 h') + '</div></div>';

  // Special Triangles (pink)
  html += '<div style="background:#fdf2f8;border-radius:12px;padding:16px;margin-bottom:12px;border-left:4px solid #ec4899">';
  html += '<div style="font-weight:700;color:#db2777;margin-bottom:10px">Special Right Triangles</div>';
  html += '<div style="font-size:15px;line-height:2.2;color:#1e293b">';
  html += '<b>45-45-90:</b> sides ' + k('1 : 1 : \\sqrt{2}') + '<br>';
  html += '<b>30-60-90:</b> sides ' + k('1 : \\sqrt{3} : 2') + '</div></div>';

  // Trig Values (purple)
  html += '<div style="background:#f5f3ff;border-radius:12px;padding:16px;margin-bottom:12px;border-left:4px solid #8b5cf6">';
  html += '<div style="font-weight:700;color:#7c3aed;margin-bottom:10px">Trig Values</div>';
  html += '<table style="width:100%;font-size:14px;border-collapse:collapse;text-align:center">';
  html += '<tr style="border-bottom:1.5px solid #ddd6fe"><th style="padding:6px">θ</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>';
  html += '<tr style="border-bottom:1px solid #ede9fe"><td style="font-weight:600;padding:6px">sin</td><td>0</td><td>' + k('\\frac{1}{2}') + '</td><td>' + k('\\frac{\\sqrt{2}}{2}') + '</td><td>' + k('\\frac{\\sqrt{3}}{2}') + '</td><td>1</td></tr>';
  html += '<tr style="border-bottom:1px solid #ede9fe"><td style="font-weight:600;padding:6px">cos</td><td>1</td><td>' + k('\\frac{\\sqrt{3}}{2}') + '</td><td>' + k('\\frac{\\sqrt{2}}{2}') + '</td><td>' + k('\\frac{1}{2}') + '</td><td>0</td></tr>';
  html += '<tr><td style="font-weight:600;padding:6px">tan</td><td>0</td><td>' + k('\\frac{\\sqrt{3}}{3}') + '</td><td>1</td><td>' + k('\\sqrt{3}') + '</td><td>∞</td></tr>';
  html += '</table></div>';

  // Data & Statistics (teal)
  html += '<div style="background:#f0fdfa;border-radius:12px;padding:16px;margin-bottom:12px;border-left:4px solid #14b8a6">';
  html += '<div style="font-weight:700;color:#0d9488;margin-bottom:10px">Data & Statistics</div>';
  html += '<div style="font-size:15px;line-height:2.2;color:#1e293b">';
  html += '<b>Mean:</b> ' + k('\\bar{x} = \\frac{\\sum x_i}{n}') + '<br>';
  html += '<b>Probability:</b> ' + k('P(A) = \\frac{\\text{favorable}}{\\text{total}}') + '<br>';
  html += '<b>Linear:</b> ' + k('y = a + bx') + ' &nbsp;|&nbsp; <b>Exponential:</b> ' + k('y = a \\cdot b^x') + '</div></div>';

  html += '<button class="btn btn-outline mt-8" onclick="navTo(' + "'home'" + ')">← Back</button>';
  html += '</div>';
  getApp().innerHTML = html;
}

