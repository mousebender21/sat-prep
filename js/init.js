/* ====== INIT ====== */

normalize(MATH_QUESTIONS);
normalize(RW_QUESTIONS);
normalize(THEME_MARINE);
ALL_QS = MATH_QUESTIONS.concat(RW_QUESTIONS);

document.addEventListener('DOMContentLoaded', function() {
  loadProfiles();
  setupMathObserver();
  // Show loading indicator
  getApp().innerHTML = '<div class="text-center" style="padding-top:60px"><div style="font-size:40px;margin-bottom:12px">&#128218;</div><h1 style="margin-bottom:8px">SAT Prep</h1><p class="text-sm">Syncing...</p></div>';
  // Load from cloud, then initialize
  cloudLoad(function(success) {
    var savedId = null;
    try { savedId = localStorage.getItem('sat-active'); } catch(e){}
    if (savedId) {
      for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].id === savedId) { activeProfile = profiles[i]; break; }
      }
    }
    if (activeProfile) { loadState(); showNav(); showHome(); }
    else { showProfiles(); }
  });
});
