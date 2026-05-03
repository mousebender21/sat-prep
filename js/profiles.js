/* ====== PROFILES ====== */

function saveState() { try { localStorage.setItem('sat-state-'+activeProfile.id, JSON.stringify(state)); } catch(e){} cloudSave(); }

function loadState() { try { var s = JSON.parse(localStorage.getItem('sat-state-'+activeProfile.id)); state = s ? Object.assign(defaultState(), s) : defaultState(); } catch(e){ state = defaultState(); } }

function saveProfiles() { try { localStorage.setItem('sat-profiles', JSON.stringify(profiles)); } catch(e){} }

function loadProfiles() { try { profiles = JSON.parse(localStorage.getItem('sat-profiles')) || []; } catch(e){ profiles = []; } }

/* ============================================================ */
function showProfiles() {
  hideNav();
  var html = '<div class="text-center" style="padding-top:40px">';
  html += '<div style="font-size:40px;margin-bottom:12px">&#128218;</div>';
  html += '<h1 style="margin-bottom:4px">SAT Prep</h1>';
  html += '<p class="text-sm mb-16">Who is practicing today?</p>';
  html += '<div id="profileList"></div>';
  html += '<button class="new-btn mt-8" onclick="showNewProfile()">+ New Profile</button>';
  html += '<div id="newProfileArea" class="hidden mt-12">';
  html += '<input type="text" id="nameInput" placeholder="Enter your name..." maxlength="20">';
  html += '<div style="display:flex;gap:8px;margin-top:8px"><button class="btn btn-outline btn-sm" style="flex:1" onclick="cancelNew()">Cancel</button>';
  html += '<button class="btn btn-primary btn-sm" style="flex:1" onclick="createProfile()">Start</button></div>';
  html += '</div></div>';
  getApp().innerHTML = html;
  renderProfileList();
}

function renderProfileList() {
  var el = document.getElementById('profileList');
  if (!el) return;
  var html = '';
  for (var i = 0; i < profiles.length; i++) {
    var p = profiles[i];
    html += '<button class="profile-btn" onclick="selectProfile('+i+')">';
    html += '<span class="avatar" style="background:'+p.color+'">'+p.name.charAt(0).toUpperCase()+'</span>';
    html += '<span style="flex:1">'+p.name+'</span>';
    html += '<span style="color:#94a3b8;font-size:20px" onclick="event.stopPropagation();deleteProfile('+i+')">&times;</span>';
    html += '</button>';
  }
  el.innerHTML = html;
}

function showNewProfile() {
  document.getElementById('newProfileArea').classList.remove('hidden');
  document.getElementById('nameInput').focus();
}

function cancelNew() { document.getElementById('newProfileArea').classList.add('hidden'); }

function createProfile() {
  var name = document.getElementById('nameInput').value.trim();
  if (!name) return;
  var p = { id: Date.now().toString(), name: name, color: COLORS[profiles.length % COLORS.length], major: null, interests: [] };
  profiles.push(p);
  saveProfiles();
  activeProfile = p;
  try { localStorage.setItem('sat-active', p.id); } catch(e){}
  loadState();
  cloudSave();
  showMajorSurvey();
}

function showMajorSurvey() {
  hideNav();
  var html = '<div class="text-center" style="padding-top:20px">';
  html += '<h2 style="margin-bottom:4px">What interests you?</h2>';
  html += '<p class="text-sm mb-16">Pick your area of interest to get personalized questions</p>';
  var majors = [
    {key:'marine', icon:'&#128044;', label:'Marine Bio / Vet Science'},
    {key:'engineering', icon:'&#9881;', label:'Engineering / CS'},
    {key:'business', icon:'&#128188;', label:'Business / Economics'},
    {key:'medicine', icon:'&#127973;', label:'Medicine / Health'},
    {key:'environment', icon:'&#127807;', label:'Environmental Science'},
    {key:'sports', icon:'&#127946;', label:'Sports / Kinesiology'},
    {key:'arts', icon:'&#127917;', label:'Performing Arts / Music'},
    {key:'general', icon:'&#128218;', label:'Undecided / General'}
  ];
  for (var i = 0; i < majors.length; i++) {
    var m = majors[i];
    html += '<button class="profile-btn" style="justify-content:flex-start" onclick="pickMajor(' + "'" + m.key + "'" + ')">';
    html += '<span style="font-size:24px">' + m.icon + '</span>';
    html += '<span>' + m.label + '</span></button>';
  }
  html += '<button class="btn btn-outline btn-sm mt-12" onclick="pickMajor(' + "'general'" + ')">Skip for now</button>';
  html += '</div>';
  getApp().innerHTML = html;
}

function pickMajor(key) {
  activeProfile.major = key;
  saveProfiles();
  showNav();
  showHome();
}

function selectProfile(i) {
  activeProfile = profiles[i];
  try { localStorage.setItem('sat-active', activeProfile.id); } catch(e){}
  loadState();
  showNav();
  showHome();
}

function deleteProfile(i) {
  if (!confirm('Delete ' + profiles[i].name + '?')) return;
  var id = profiles[i].id;
  profiles.splice(i, 1);
  saveProfiles();
  try { localStorage.removeItem('sat-state-'+id); } catch(e){}
  cloudSave();
  if (activeProfile && activeProfile.id === id) { activeProfile = null; showProfiles(); }
  else renderProfileList();
}

function switchUser() { activeProfile = null; try{localStorage.removeItem('sat-active');}catch(e){} showProfiles(); }

function resetProgress() {
  if (!confirm('Reset all progress for ' + activeProfile.name + '?')) return;
  state = defaultState();
  saveState();
  navTo('home');
}

