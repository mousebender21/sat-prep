/* ====== PRACTICE MODE ====== */

var _pSec = 'all', _pDiff = 'all', _pDoms = [];


var _longPressTimer = null;

function strikeChoice(e, idx) {
  e.preventDefault();
  if (practiceAnswered) return false;
  var btn = document.getElementById('pc' + idx);
  if (!btn) return false;
  if (btn.classList.contains('crossed')) {
    btn.classList.remove('crossed');
  } else {
    btn.classList.add('crossed');
    // If this was the selected answer, deselect it
    if (practiceSelected === idx) {
      btn.classList.remove('selected');
      practiceSelected = -1;
      var sr = document.getElementById('submitRow');
      if (sr) sr.style.display = 'none';
    }
  }
  return false;
}

function showCalc() {
  var overlay = document.createElement('div');
  overlay.className = 'calc-overlay';
  overlay.id = 'calcOverlay';
  overlay.onclick = function() { closeCalc(); };
  document.body.appendChild(overlay);
  var container = document.createElement('div');
  container.className = 'calc-container';
  container.id = 'calcContainer';
  container.onclick = function(e) { e.stopPropagation(); };
  container.innerHTML = '<div class="calc-header"><span style="font-weight:700;font-size:14px">&#128200; Desmos Calculator</span><button onclick="closeCalc()">&#10005;</button></div><iframe class="calc-iframe" src="https://www.desmos.com/calculator" allow="clipboard-write"></iframe>';
  document.body.appendChild(container);
}

function closeCalc() {
  var o = document.getElementById('calcOverlay');
  var c = document.getElementById('calcContainer');
  if (o) o.remove();
  if (c) c.remove();
}

/* ============================================================ */
function showPracticeSetup() {
  showNav();
  var html = '<h2>Practice</h2>';
  html += '<div class="mb-8"><p class="text-sm mb-8">Section</p>';
  html += '<span class="pill active" onclick="setSec(' + "'all'" + ',this)">All</span>';
  html += '<span class="pill" onclick="setSec(' + "'math'" + ',this)">&#128208; Math</span>';
  html += '<span class="pill" onclick="setSec(' + "'rw'" + ',this)">&#128214; R&W</span>';
  html += '</div>';
  html += '<div id="domainArea"></div>';
  html += '<div class="mb-8"><p class="text-sm mb-8">Difficulty</p>';
  html += '<span class="pill active" onclick="setDiff(' + "'all'" + ',this)">All</span>';
  html += '<span class="pill" onclick="setDiff(' + "'easy'" + ',this)">&#128215; Easy</span>';
  html += '<span class="pill" onclick="setDiff(' + "'medium'" + ',this)">&#128216; Medium</span>';
  html += '<span class="pill" onclick="setDiff(' + "'hard'" + ',this)">&#128213; Hard</span>';
  html += '</div>';
  html += '<p class="text-sm mb-16" id="poolCount">' + ALL_QS.length + ' questions available</p>';
  html += '<button class="btn btn-primary" onclick="startPractice()">Start Practice</button>';
  getApp().innerHTML = html;
  _pSec = 'all'; _pDiff = 'all'; _pDoms = [];
  updateDomainPills();
  updatePoolCount();
}

function setSec(val, el) {
  _pSec = val;
  _pDoms = [];
  var pills = el.parentElement.querySelectorAll('.pill');
  for (var i = 0; i < pills.length; i++) pills[i].classList.remove('active');
  el.classList.add('active');
  updateDomainPills();
  updatePoolCount();
}

function setDiff(val, el) {
  _pDiff = val;
  var pills = el.parentElement.querySelectorAll('.pill');
  for (var i = 0; i < pills.length; i++) pills[i].classList.remove('active');
  el.classList.add('active');
  updatePoolCount();
}

function toggleDom(key, el) {
  var idx = _pDoms.indexOf(key);
  if (idx >= 0) { _pDoms.splice(idx, 1); el.classList.remove('active'); }
  else { _pDoms.push(key); el.classList.add('active'); }
  updatePoolCount();
}

function updateDomainPills() {
  var area = document.getElementById('domainArea');
  if (!area) return;
  if (_pSec === 'all') { area.innerHTML = ''; return; }
  var domains = _pSec === 'math' ? MATH_DOMAINS : RW_DOMAINS;
  var html = '<div class="mb-8"><p class="text-sm mb-8">Domain <span style="font-size:11px;color:#94a3b8">(select any)</span></p>';
  for (var i = 0; i < domains.length; i++) {
    var key = domains[i];
    var label = DOMAIN_LABELS[key] || key;
    var ds = state.domainStats[key] || {c:0,w:0};
    var dt = ds.c + ds.w;
    var dp = dt > 0 ? Math.round(ds.c / dt * 100) : 0;
    html += '<span class="pill" onclick="toggleDom(' + "'" + key + "'" + ',this)">';
    html += label;
    if (dt > 0) html += ' <span style="font-size:11px;opacity:0.7">' + dp + '%</span>';
    html += '</span>';
  }
  html += '</div>';
  area.innerHTML = html;
}

function updatePoolCount() {
  var pool = buildPool();
  var el = document.getElementById('poolCount');
  if (el) el.textContent = pool.length + ' questions available';
}

function buildPool() {
  var pool = [];
  if (_pSec === 'all' || _pSec === 'math') pool = pool.concat(MATH_QUESTIONS);
  if (_pSec === 'all' || _pSec === 'rw') pool = pool.concat(RW_QUESTIONS);
  if (activeProfile && activeProfile.major === 'marine' && typeof THEME_MARINE !== 'undefined') {
    pool = pool.concat(THEME_MARINE);
  }
  if (_pDiff !== 'all') pool = pool.filter(function(q){ return q.difficulty === _pDiff; });
  if (_pDoms.length > 0) pool = pool.filter(function(q){ return _pDoms.indexOf(q.domain) >= 0; });
  return pool;
}

function startPractice() {
  practicePool = shuffle(buildPool());
  practiceIdx = 0;
  practiceCorrect = 0;
  practiceTotal = 0;
  practiceAnswered = false;
  adaptiveDifficulty = 'medium';
  consecutiveCorrect = 0;
  consecutiveWrong = 0;
  /* Adaptive: sort so weak-domain questions come first */
  var weakDoms = [];
  for (var wi = 0; wi < ALL_DOMAIN_KEYS.length; wi++) {
    var wk = ALL_DOMAIN_KEYS[wi];
    var wd = state.domainStats[wk] || {c:0,w:0};
    var wt = wd.c + wd.w;
    if (wt >= 3 && (wd.c / wt) < 0.6) weakDoms.push(wk);
  }
  if (weakDoms.length > 0) {
    practicePool.sort(function(a, b) {
      var aWeak = weakDoms.indexOf(a.domain) >= 0 ? 0 : 1;
      var bWeak = weakDoms.indexOf(b.domain) >= 0 ? 0 : 1;
      return aWeak - bWeak;
    });
  }
  if (practicePool.length === 0) { getApp().innerHTML = '<div class="card text-center fade-in"><p>No questions match your filters.</p><button class="btn btn-outline mt-12" onclick="navTo(' + "'home'" + ')">Home</button></div>'; return; }
  showQuestion();
}

function showQuestion() {
  if (practiceIdx >= practicePool.length || practiceIdx >= 20) { showPracticeSummary(); return; }
  practiceAnswered = false;
  practiceSelected = -1;
  /* Adaptive: try to swap in a question matching adaptiveDifficulty */
  if (practicePool[practiceIdx] && practicePool[practiceIdx].difficulty !== adaptiveDifficulty) {
    for (var si = practiceIdx + 1; si < practicePool.length && si < practiceIdx + 10; si++) {
      if (practicePool[si] && practicePool[si].difficulty === adaptiveDifficulty) {
        var tmp = practicePool[practiceIdx];
        practicePool[practiceIdx] = practicePool[si];
        practicePool[si] = tmp;
        break;
      }
    }
  }
  var q = practicePool[practiceIdx];
  var html = '<div class="progress-bar"><div class="progress-fill" style="width:' + Math.round(practiceIdx / Math.min(20, practicePool.length) * 100) + '%"></div></div>';
  html += '<p class="text-sm mb-8">Question ' + (practiceIdx+1) + ' of ' + Math.min(20, practicePool.length) + '</p>';
  if (q.passage) html += '<div class="passage-card">' + q.passage + '</div>';
  html += '<div class="card" style="border-left:3px solid ' + (isMath(q) ? '#0d9488' : '#6366f1') + '">';
  if (isMath(q)) html += '<button onclick="showCalc()" style="float:right;background:none;border:1px solid #e2e8f0;border-radius:8px;padding:4px 10px;font-size:13px;cursor:pointer;color:#64748b">&#128200; Calculator</button>';
  html += '<p style="font-weight:600;line-height:1.5;margin-bottom:16px" class="q-text">' + cleanMath(q.question) + '</p>';
    var visual = getVisual(q.id); if (visual) html += '<div style="text-align:center;margin:12px 0;padding:12px;background:#f8fafc;border-radius:10px">' + visual + '</div>';
  for (var i = 0; i < q.answers.length; i++) {
    html += '<button class="choice" id="pc' + i + '" onclick="practiceSelect(' + i + ')" oncontextmenu="return strikeChoice(event,' + i + ')">';
    html += '<span class="choice-letter">' + String.fromCharCode(65+i) + '</span> ' + cleanMath(q.answers[i]);
    html += '</button>';
  }
  html += '<div class="submit-row" id="submitRow" style="display:none"><button class="btn btn-primary" onclick="practiceSubmit()">Submit Answer</button></div>';
  html += '<p style="text-align:center;font-size:11px;color:#94a3b8;margin-top:8px">Right-click or long-press a choice to cross it out</p>';
  html += '</div><div id="practiceFeedback"></div>';
  getApp().innerHTML = html;
}

function practiceSelect(idx) {
  if (practiceAnswered) return;
  practiceSelected = idx;
  var q = practicePool[practiceIdx];
  for (var i = 0; i < q.answers.length; i++) {
    var btn = document.getElementById('pc' + i);
    if (btn) btn.classList.remove('selected');
  }
  var sel = document.getElementById('pc' + idx);
  if (sel) sel.classList.add('selected');
  var sr = document.getElementById('submitRow');
  if (sr) sr.style.display = 'block';
}

function practiceSubmit() {
  if (practiceAnswered || practiceSelected < 0) return;
  practiceAnswer(practiceSelected);
}

function practiceAnswer(idx) {
  if (practiceAnswered) return;
  practiceAnswered = true;
  var q = practicePool[practiceIdx];
  var correct = idx === q.correct;
  practiceTotal++;
  if (correct) {
    practiceCorrect++; state.correct++; state.streak++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
    consecutiveCorrect++; consecutiveWrong = 0;
    if (consecutiveCorrect >= 3) {
      consecutiveCorrect = 0;
      if (adaptiveDifficulty === 'easy') adaptiveDifficulty = 'medium';
      else if (adaptiveDifficulty === 'medium') adaptiveDifficulty = 'hard';
    }
  } else {
    state.wrong++; state.streak = 0; addToSR(q.id);
    consecutiveWrong++; consecutiveCorrect = 0;
    if (consecutiveWrong >= 2) {
      consecutiveWrong = 0;
      if (adaptiveDifficulty === 'hard') adaptiveDifficulty = 'medium';
      else if (adaptiveDifficulty === 'medium') adaptiveDifficulty = 'easy';
    }
  }
  var ds = state.domainStats[q.domain];
  if (ds) { if (correct) ds.c++; else ds.w++; }
  saveState();
  for (var i = 0; i < q.answers.length; i++) {
    var btn = document.getElementById('pc' + i);
    if (!btn) continue;
    btn.classList.add('disabled');
    if (i === q.correct) { btn.classList.add('correct'); btn.classList.add('pulse-correct'); }
    if (i === idx && !correct) { btn.classList.add('wrong'); btn.classList.add('shake-wrong'); }
  }
  var fb = '<div class="card mt-12 fade-in">';
  fb += '<p style="font-weight:700;color:' + (correct ? '#22c55e' : '#ef4444') + '">' + (correct ? '&#10004; Correct!' : '&#10008; Incorrect') + '</p>';
  fb += '<p class="text-sm mt-8">' + (q.explanation || '') + '</p>';
  if (!correct) {
    fb += '<div style="margin-top:10px;padding:10px;background:#fef2f2;border-radius:8px;border-left:3px solid #ef4444">';
    fb += '<p style="font-weight:600;font-size:13px;color:#b91c1c;margin-bottom:4px">Why wrong answers fail:</p>';
    for (var wi = 0; wi < q.answers.length; wi++) {
      if (wi === q.correct || wi === idx) continue;
      var wrongLetter = String.fromCharCode(65 + wi);
      fb += '<p style="font-size:12px;color:#64748b;margin-top:3px"><b>' + wrongLetter + ')</b> ' + cleanMath(q.answers[wi]) + ' &mdash; does not satisfy the given conditions.</p>';
      break;
    }
    fb += '</div>';
  }
  fb += '<button class="btn btn-primary mt-12" onclick="nextPractice()">Next &#8594;</button></div>';
  document.getElementById('practiceFeedback').innerHTML = fb;
  checkMilestone();
}

function nextPractice() { practiceIdx++; showQuestion(); }

function showPracticeSummary() {
  var pct = practiceTotal > 0 ? Math.round(practiceCorrect / practiceTotal * 100) : 0;
  if (!state.sessionHistory) state.sessionHistory = [];
  state.sessionHistory.push({date: new Date().toISOString().slice(0,10), pct: pct, total: practiceTotal});
  if (state.sessionHistory.length > 20) state.sessionHistory = state.sessionHistory.slice(-20);
  saveState();
  var html = '<div class="card text-center fade-in">';
  html += '<h2>Session Complete</h2>';
  html += '<div style="font-size:48px;font-weight:800;color:#0d9488;margin:16px 0">' + pct + '%</div>';
  html += '<p class="text-sm">' + practiceCorrect + ' of ' + practiceTotal + ' correct</p>';
  html += '<p style="font-size:12px;color:#94a3b8;margin-top:4px">Difficulty adapted to: ' + adaptiveDifficulty + '</p>';
  html += '<button class="btn btn-primary mt-16" onclick="startPractice()">Practice Again</button>';
  html += '<button class="btn btn-outline mt-8" onclick="navTo(' + "'home'" + ')">Home</button>';
  html += '</div>';
  getApp().innerHTML = html;
}

