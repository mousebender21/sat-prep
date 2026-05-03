/* ====== TIMED TESTS ====== */

/* ============================================================ */

function strikeTimedChoice(e, idx) {
  e.preventDefault();
  var btn = document.getElementById('tc' + idx);
  if (!btn) return false;
  if (btn.classList.contains('crossed')) {
    btn.classList.remove('crossed');
  } else {
    btn.classList.add('crossed');
    // If this was the selected answer, deselect it
    if (timedAnswers[timedIdx] === idx) {
      timedAnswers[timedIdx] = -1;
      showTimedQ();
    }
  }
  return false;
}

function showTestSetup() {
  showNav();
  var html = '<div class="fade-in"><h2>Timed Test</h2>';
  html += '<div class="card" style="cursor:pointer" onclick="startTimedTest(' + "'math'" + ')"><div style="font-size:24px;margin-bottom:4px">&#128208; Math</div><p class="text-sm">22 questions &middot; 35 minutes</p></div>';
  html += '<div class="card" style="cursor:pointer" onclick="startTimedTest(' + "'rw'" + ')"><div style="font-size:24px;margin-bottom:4px">&#128214; Reading & Writing</div><p class="text-sm">27 questions &middot; 32 minutes</p></div>';
  html += '<div class="card" style="cursor:pointer" onclick="startTimedTest(' + "'full'" + ')"><div style="font-size:24px;margin-bottom:4px">&#128218; Full Test</div><p class="text-sm">49 questions &middot; 67 minutes</p></div>';
  /* Test history */
  if (state.timedHistory && state.timedHistory.length > 0) {
    html += '<div class="card"><h3 style="font-size:14px;font-weight:700;margin-bottom:8px">Recent Tests</h3>';
    for (var ti = state.timedHistory.length - 1; ti >= 0; ti--) {
      var th = state.timedHistory[ti];
      var tColor = th.pct >= 80 ? '#22c55e' : (th.pct >= 60 ? '#f59e0b' : '#ef4444');
      html += '<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #f1f5f9">';
      html += '<span style="font-size:12px;color:#64748b">' + th.date + ' &middot; ' + th.mode + '</span>';
      html += '<span style="font-size:14px;font-weight:700;color:' + tColor + '">' + th.pct + '% <span style="font-size:11px;font-weight:400">(' + th.correct + '/' + th.total + ')</span></span>';
      html += '</div>';
    }
    html += '</div>';
  }
  html += '</div>';
  getApp().innerHTML = html;
}

function startTimedTest(mode) {
  hideNav();
  var pool, time;
  if (mode === 'math') { pool = shuffle(MATH_QUESTIONS.slice()).slice(0,22); time = 35*60; }
  else if (mode === 'rw') { pool = shuffle(RW_QUESTIONS.slice()).slice(0,27); time = 32*60; }
  else { pool = shuffle(MATH_QUESTIONS.slice()).slice(0,22).concat(shuffle(RW_QUESTIONS.slice()).slice(0,27)); time = 67*60; }
  timedQuestions = pool;
  timedAnswers = new Array(pool.length);
  timedFlags = new Array(pool.length);
  for (var i = 0; i < pool.length; i++) { timedAnswers[i] = -1; timedFlags[i] = false; }
  timedIdx = 0;
  timedTimeLeft = time;
  document.getElementById('timerBar').style.display = 'flex';
  startTimer();
  showTimedQ();
}

function startTimer() {
  if (timedTimer) clearInterval(timedTimer);
  timedTimer = setInterval(function() {
    timedTimeLeft--;
    var m = Math.floor(timedTimeLeft / 60);
    var s = timedTimeLeft % 60;
    var el = document.getElementById('timerDisplay');
    if (el) el.textContent = m + ':' + (s < 10 ? '0' : '') + s;
    if (timedTimeLeft <= 0) { clearInterval(timedTimer); timedTimer = null; endTimedTest(); }
  }, 1000);
}

function showTimedQ() {
  var q = timedQuestions[timedIdx];
  document.getElementById('timerQCount').textContent = (timedIdx+1) + '/' + timedQuestions.length;
  var html = '';
  if (q.passage) html += '<div class="passage-card">' + q.passage + '</div>';
  html += '<div class="card"><p style="font-weight:600;line-height:1.5;margin-bottom:16px">' + q.question + '</p>';
    var visual = getVisual(q.id); if (visual) html += '<div style="text-align:center;margin:12px 0;padding:12px;background:#f8fafc;border-radius:10px">' + visual + '</div>';
  for (var i = 0; i < q.answers.length; i++) {
    var sel = timedAnswers[timedIdx] === i ? ' style="border-color:#0d9488;background:#f0fdfa"' : '';
    html += '<button class="choice"' + sel + ' id="tc' + i + '" onclick="timedAnswer(' + i + ')" oncontextmenu="return strikeTimedChoice(event,' + i + ')">';
    html += '<span class="choice-letter">' + String.fromCharCode(65+i) + '</span> ' + cleanMath(q.answers[i]);
    html += '</button>';
  }
  html += '</div>';
  html += '<div style="display:flex;gap:8px;margin-top:12px">';
  html += '<button class="btn btn-outline btn-sm" style="flex:1" onclick="timedPrev()"' + (timedIdx === 0 ? ' disabled' : '') + '>&#8592; Prev</button>';
  html += '<button class="btn btn-outline btn-sm" style="flex:1" onclick="timedFlag()">' + (timedFlags[timedIdx] ? '&#128278; Unflag' : '&#128279; Flag') + '</button>';
  if (timedIdx < timedQuestions.length - 1) html += '<button class="btn btn-primary btn-sm" style="flex:1" onclick="timedNext()">Next &#8594;</button>';
  else html += '<button class="btn btn-primary btn-sm" style="flex:1" onclick="endTimedTest()">Finish</button>';
  html += '</div>';
  /* Navigation dots */
  html += '<div class="nav-dots" style="margin-top:10px">';
  for (var di = 0; di < timedQuestions.length; di++) {
    var dotCls = 'dot';
    if (timedFlags[di]) dotCls += ' dot-flagged';
    else if (timedAnswers[di] >= 0) dotCls += ' dot-answered';
    else dotCls += ' dot-empty';
    if (di === timedIdx) dotCls += ' dot-current';
    html += '<span class="' + dotCls + '" onclick="jumpToTimedQ(' + di + ')"></span>';
  }
  html += '</div>';
  getApp().innerHTML = html;
}

function timedAnswer(idx) { timedAnswers[timedIdx] = idx; showTimedQ(); }

function timedNext() { if (timedIdx < timedQuestions.length - 1) { timedIdx++; showTimedQ(); } }

function timedPrev() { if (timedIdx > 0) { timedIdx--; showTimedQ(); } }

function timedFlag() { timedFlags[timedIdx] = !timedFlags[timedIdx]; showTimedQ(); }

function jumpToTimedQ(idx) { timedIdx = idx; showTimedQ(); }

function endTimedTest() {
  if (timedTimer) { clearInterval(timedTimer); timedTimer = null; }
  document.getElementById('timerBar').style.display = 'none';
  showNav();
  var correct = 0, total = timedQuestions.length;
  for (var i = 0; i < total; i++) {
    if (timedAnswers[i] === timedQuestions[i].correct) correct++;
  }
  var pct = Math.round(correct / total * 100);
  /* Store timed test history */
  if (!state.timedHistory) state.timedHistory = [];
  var tMode = total <= 22 ? 'Math' : (total <= 27 ? 'R&W' : 'Full');
  state.timedHistory.push({date: new Date().toISOString().slice(0,10), mode: tMode, pct: pct, correct: correct, total: total});
  if (state.timedHistory.length > 10) state.timedHistory = state.timedHistory.slice(-10);
  saveState();
  var html = '<div class="card text-center fade-in">';
  html += '<h2>Test Complete</h2>';
  html += '<div style="font-size:48px;font-weight:800;color:#0d9488;margin:16px 0">' + pct + '%</div>';
  html += '<p class="text-sm">' + correct + ' of ' + total + ' correct</p>';
  html += '<p class="text-sm mt-8">Estimated Score: ' + Math.round(400 + (correct/total) * 1200) + '</p>';
  html += '<button class="btn btn-outline mt-16" onclick="showTimedReview()">&#128270; Review Answers</button>';
  html += '<button class="btn btn-primary mt-8" onclick="navTo(' + "'home'" + ')">Home</button>';
  html += '</div>';
  getApp().innerHTML = html;
}

/* ============================================================ */
function showTimedReview() {
  var html = '<div class="fade-in"><h2>&#128270; Answer Review</h2>';
  for (var ri = 0; ri < timedQuestions.length; ri++) {
    var rq = timedQuestions[ri];
    var userAns = timedAnswers[ri];
    var wasCorrect = userAns === rq.correct;
    html += '<div class="card" style="border-left:3px solid ' + (wasCorrect ? '#22c55e' : '#ef4444') + '">';
    html += '<p style="font-size:12px;color:#94a3b8;margin-bottom:4px">Q' + (ri + 1) + ' &middot; ' + (rq.domain || '') + '</p>';
    html += '<p style="font-weight:600;font-size:14px;line-height:1.5;margin-bottom:10px">' + cleanMath(rq.question) + '</p>';
    for (var ci = 0; ci < rq.answers.length; ci++) {
      var letter = String.fromCharCode(65 + ci);
      var style = 'padding:6px 10px;margin-bottom:4px;border-radius:8px;font-size:13px;';
      if (ci === rq.correct) style += 'background:#f0fdf4;border:1px solid #22c55e;';
      else if (ci === userAns && !wasCorrect) style += 'background:#fef2f2;border:1px solid #ef4444;';
      else style += 'background:#f8fafc;border:1px solid #e2e8f0;';
      html += '<div style="' + style + '">';
      html += '<b>' + letter + ')</b> ' + cleanMath(rq.answers[ci]);
      if (ci === rq.correct) html += ' &#10004;';
      if (ci === userAns && !wasCorrect) html += ' &#10008; (your answer)';
      html += '</div>';
    }
    if (rq.explanation) {
      html += '<p style="font-size:12px;color:#64748b;margin-top:8px;padding:8px;background:#f8fafc;border-radius:6px">' + cleanMath(rq.explanation) + '</p>';
    }
    html += '</div>';
  }
  html += '<button class="btn btn-primary mt-8" onclick="navTo(' + "'home'" + ')">Home</button>';
  html += '</div>';
  getApp().innerHTML = html;
  window.scrollTo(0, 0);
}

