/* ====== NAVIGATION ====== */

/* ============================================================ */
function navTo(screen) {
  var nav = document.getElementById('bottomNav');
  var items = nav.querySelectorAll('.nav-item');
  for (var i = 0; i < items.length; i++) items[i].classList.remove('active');
  if (screen === 'home') { items[0].classList.add('active'); showHome(); }
  else if (screen === 'practice') { items[1].classList.add('active'); showPracticeSetup(); }
  else if (screen === 'test') { items[2].classList.add('active'); showTestSetup(); }
  else if (screen === 'stats') { items[3].classList.add('active'); showStats(); }
  document.getElementById('timerBar').style.display = 'none';
  if (timedTimer) { clearInterval(timedTimer); timedTimer = null; }
}

function showNav() { document.getElementById('bottomNav').style.display = 'flex'; }

function hideNav() { document.getElementById('bottomNav').style.display = 'none'; }

