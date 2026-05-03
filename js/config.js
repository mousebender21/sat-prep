/* ====== CONFIG ====== */

var DOMAIN_MAP = {
  'Algebra':'algebra','Advanced Math':'advanced-math',
  'Problem Solving & Data Analysis':'data-analysis',
  'Geometry & Trigonometry':'geometry','Geometry & Trig':'geometry',
  'Craft and Structure':'craft-structure','Craft & Structure':'craft-structure',
  'Information and Ideas':'info-ideas','Information & Ideas':'info-ideas',
  'Standard English Conventions':'standard-english',
  'Expression of Ideas':'expression-ideas'
};
var DIFF_MAP = {1:'easy',2:'medium',3:'hard'};
var MATH_DOMAINS = ['algebra','advanced-math','data-analysis','geometry'];
var RW_DOMAINS = ['craft-structure','info-ideas','standard-english','expression-ideas'];
var ALL_DOMAIN_KEYS = MATH_DOMAINS.concat(RW_DOMAINS);
var COLORS = ['#0d9488','#6366f1','#f59e0b','#ef4444','#8b5cf6','#ec4899','#14b8a6','#f97316'];
var DAY = 86400000;
var profiles = [];
var activeProfile = null;
var state = {};
var ALL_QS = [];
var practicePool = [];
var practiceIdx = 0;
var practiceAnswered = false;
var practiceSelected = -1;
var practiceCorrect = 0;
var practiceTotal = 0;
var timedQuestions = [];
var timedAnswers = [];
var timedIdx = 0;
var timedTimeLeft = 0;
var timedTimer = null;
var timedFlags = [];
var srQueue = [];
var srIdx = 0;
var srAnswered = false;
var adaptiveDifficulty = 'medium';
var consecutiveCorrect = 0;
var consecutiveWrong = 0;
var milestoneShown = {};

var DOMAIN_LABELS = {
  'algebra':'Algebra','advanced-math':'Advanced Math','data-analysis':'Data Analysis','geometry':'Geometry',
  'craft-structure':'Craft & Structure','info-ideas':'Information & Ideas','standard-english':'Standard English','expression-ideas':'Expression of Ideas'
};

/* ============================================================ */
function normalize(arr) {
  for (var i = 0; i < arr.length; i++) {
    var q = arr[i];
    if (q.text && !q.question) q.question = q.text;
    if (q.choices && !q.answers) {
      q.answers = [];
      for (var c = 0; c < q.choices.length; c++) {
        var val = q.choices[c];
        q.answers.push(typeof val === 'string' ? val.replace(/^[A-D]\)\s*/, '') : String(val || ''));
      }
    }
    if (typeof q.answer === 'number' && q.correct === undefined) q.correct = q.answer;
    var mapped = DOMAIN_MAP[q.domain];
    if (mapped) { q.domainLabel = q.domain; q.domain = mapped; }
    if (typeof q.difficulty === 'number') q.difficulty = DIFF_MAP[q.difficulty] || 'medium';
    if (!q.difficulty) q.difficulty = 'medium';
  }
}

/* ============================================================ */
function getApp() { return document.getElementById('app'); }

function shuffle(arr) {
  var a = arr.slice();
  var seed = Date.now() + Math.random() * 10000;
  for (var i = a.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    var j = Math.floor((seed / 233280) * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function defaultState() {
  var ds = {};
  for (var i = 0; i < ALL_DOMAIN_KEYS.length; i++) ds[ALL_DOMAIN_KEYS[i]] = {c:0,w:0};
  return { correct:0, wrong:0, streak:0, bestStreak:0, domainStats:ds, spacedRep:[], qotdId:null, qotdDate:null, qotdAnswered:false, settings:{sound:false,keyboard:true}, sessionHistory:[], timedHistory:[] };
}

function getEstScore() {
  var total = state.correct + state.wrong;
  if (total < 5) return '?';
  var pct = state.correct / total;
  return Math.round(400 + pct * 1200);
}

function getDayKey() { var d = new Date(); return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }

function isMath(q) { return MATH_DOMAINS.indexOf(q.domain) >= 0; }



function getVisual(qId) {
  // Right triangles
  if (qId === 'm86') return '<svg viewBox="0 0 280 200" width="280" style="max-width:100%"><polygon points="30,170 230,170 30,30" fill="none" stroke="#0d9488" stroke-width="2.5"/><rect x="30" y="155" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/><text x="20" y="105" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="end">8</text><text x="130" y="190" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="middle">15</text><text x="140" y="90" font-size="14" fill="#6366f1" font-weight="700" font-family="system-ui" text-anchor="middle">?</text><text x="30" y="185" font-size="12" fill="#64748b" font-family="system-ui">C</text><text x="235" y="185" font-size="12" fill="#64748b" font-family="system-ui">B</text><text x="22" y="25" font-size="12" fill="#64748b" font-family="system-ui">A</text></svg>';
  if (qId === 'm184') return '<svg viewBox="0 0 280 200" width="280" style="max-width:100%"><polygon points="30,170 220,170 30,40" fill="none" stroke="#0d9488" stroke-width="2.5"/><rect x="30" y="155" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/><text x="20" y="110" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="end">5</text><text x="125" y="190" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="middle">12</text><text x="135" y="95" font-size="14" fill="#6366f1" font-weight="600" font-family="system-ui" text-anchor="middle">hyp</text></svg>';
  if (qId === 'm273') return '<svg viewBox="0 0 280 200" width="280" style="max-width:100%"><polygon points="40,170 200,170 40,50" fill="none" stroke="#0d9488" stroke-width="2.5"/><rect x="40" y="155" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/><text x="30" y="115" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="end">3</text><text x="120" y="190" font-size="14" fill="#6366f1" font-weight="700" font-family="system-ui" text-anchor="middle">?</text><text x="130" y="100" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="middle">5</text></svg>';
  if (qId === 'm282') return '<svg viewBox="0 0 280 200" width="280" style="max-width:100%"><polygon points="30,170 250,170 30,30" fill="none" stroke="#0d9488" stroke-width="2.5"/><rect x="30" y="155" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/><text x="20" y="105" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="end">7</text><text x="140" y="190" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="middle">24</text><text x="150" y="90" font-size="14" fill="#6366f1" font-weight="700" font-family="system-ui" text-anchor="middle">?</text></svg>';
  if (qId === 'm289') return '<svg viewBox="0 0 280 200" width="280" style="max-width:100%"><polygon points="40,170 240,170 40,20" fill="none" stroke="#0d9488" stroke-width="2.5"/><rect x="40" y="155" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/><text x="30" y="100" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="end">9</text><text x="140" y="190" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="middle">40</text><text x="150" y="85" font-size="14" fill="#6366f1" font-weight="700" font-family="system-ui" text-anchor="middle">41</text></svg>';
  // 30-60-90 triangle
  if (qId === 'm83') return '<svg viewBox="0 0 280 220" width="280" style="max-width:100%"><polygon points="40,190 240,190 40,30" fill="none" stroke="#0d9488" stroke-width="2.5"/><rect x="40" y="175" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/><text x="30" y="115" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="end">7</text><text x="140" y="210" font-size="14" fill="#6366f1" font-weight="600" font-family="system-ui" text-anchor="middle">?</text><text x="150" y="100" font-size="14" fill="#6366f1" font-weight="600" font-family="system-ui" text-anchor="middle">hyp?</text><text x="55" y="195" font-size="11" fill="#64748b" font-family="system-ui">30&#176;</text><text x="220" y="186" font-size="11" fill="#64748b" font-family="system-ui">60&#176;</text></svg>';
  // Similar triangles
  if (qId === 'm81') return '<svg viewBox="0 0 300 180" width="280" style="max-width:100%"><polygon points="20,150 100,150 20,60" fill="none" stroke="#0d9488" stroke-width="2"/><polygon points="150,150 280,150 150,20" fill="none" stroke="#6366f1" stroke-width="2"/><text x="10" y="110" font-size="12" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="end">4</text><text x="60" y="168" font-size="12" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="middle">3</text><text x="65" y="100" font-size="12" fill="#0d9488" font-weight="600" font-family="system-ui">5</text><text x="215" y="168" font-size="12" fill="#6366f1" font-weight="600" font-family="system-ui" text-anchor="middle">?</text><text x="140" y="90" font-size="12" fill="#6366f1" font-weight="600" font-family="system-ui">12.5</text></svg>';
  // Equilateral triangle
  if (qId === 'm275') return '<svg viewBox="0 0 260 220" width="260" style="max-width:100%"><polygon points="130,20 30,190 230,190" fill="none" stroke="#0d9488" stroke-width="2.5"/><text x="130" y="210" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="middle">4 cm</text><text x="70" y="110" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="end">4 cm</text><text x="190" y="110" font-size="14" fill="#0d9488" font-weight="600" font-family="system-ui">4 cm</text><text x="130" y="195" font-size="11" fill="#64748b" font-family="system-ui" text-anchor="middle">60&#176;</text><text x="55" y="185" font-size="11" fill="#64748b" font-family="system-ui">60&#176;</text><text x="200" y="185" font-size="11" fill="#64748b" font-family="system-ui">60&#176;</text></svg>';
  // Circle with arc
  if (qId === 'm78') return '<svg viewBox="0 0 260 260" width="240" style="max-width:100%"><circle cx="130" cy="130" r="95" fill="none" stroke="#e2e8f0" stroke-width="2"/><line x1="130" y1="130" x2="225" y2="130" stroke="#0d9488" stroke-width="2"/><line x1="130" y1="130" x2="196" y2="60" stroke="#0d9488" stroke-width="2"/><path d="M 225 130 A 95 95 0 0 0 196 60" stroke="#6366f1" stroke-width="3" fill="none"/><text x="175" y="145" font-size="13" fill="#0d9488" font-weight="600" font-family="system-ui">r=10</text><text x="160" y="80" font-size="13" fill="#64748b" font-family="system-ui">72&#176;</text><text x="218" y="90" font-size="13" fill="#6366f1" font-weight="700" font-family="system-ui">arc?</text><circle cx="130" cy="130" r="3" fill="#0d9488"/></svg>';
  // Circle with sector
  if (qId === 'm79') return '<svg viewBox="0 0 260 260" width="240" style="max-width:100%"><circle cx="130" cy="130" r="95" fill="none" stroke="#e2e8f0" stroke-width="2"/><path d="M 130 130 L 225 130 A 95 95 0 0 0 130 35 Z" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/><text x="175" y="145" font-size="13" fill="#0d9488" font-weight="600" font-family="system-ui">r=8</text><text x="170" y="100" font-size="13" fill="#64748b" font-family="system-ui">90&#176;</text><circle cx="130" cy="130" r="3" fill="#0d9488"/></svg>';
  // Bar charts
  if (qId === 'm68') return '<svg viewBox="0 0 300 200" width="280" style="max-width:100%"><line x1="40" y1="170" x2="290" y2="170" stroke="#64748b" stroke-width="1"/><line x1="40" y1="170" x2="40" y2="20" stroke="#64748b" stroke-width="1"/><rect x="55" y="62" width="30" height="108" fill="#0d9488" rx="3"/><rect x="95" y="72" width="30" height="98" fill="#14b8a6" rx="3"/><rect x="135" y="90" width="30" height="80" fill="#0d9488" rx="3"/><rect x="175" y="108" width="30" height="62" fill="#14b8a6" rx="3"/><rect x="215" y="44" width="30" height="126" fill="#0d9488" rx="3"/><rect x="255" y="26" width="30" height="144" fill="#14b8a6" rx="3"/><text x="70" y="185" font-size="9" fill="#64748b" font-family="system-ui" text-anchor="middle">Jan</text><text x="110" y="185" font-size="9" fill="#64748b" font-family="system-ui" text-anchor="middle">Feb</text><text x="150" y="185" font-size="9" fill="#64748b" font-family="system-ui" text-anchor="middle">Mar</text><text x="190" y="185" font-size="9" fill="#64748b" font-family="system-ui" text-anchor="middle">Apr</text><text x="230" y="185" font-size="9" fill="#64748b" font-family="system-ui" text-anchor="middle">May</text><text x="270" y="185" font-size="9" fill="#64748b" font-family="system-ui" text-anchor="middle">Jun</text><text x="70" y="57" font-size="9" fill="#0d9488" font-family="system-ui" text-anchor="middle">4.2</text><text x="110" y="67" font-size="9" fill="#0d9488" font-family="system-ui" text-anchor="middle">3.8</text><text x="150" y="85" font-size="9" fill="#0d9488" font-family="system-ui" text-anchor="middle">3.1</text><text x="190" y="103" font-size="9" fill="#0d9488" font-family="system-ui" text-anchor="middle">2.4</text><text x="230" y="39" font-size="9" fill="#0d9488" font-family="system-ui" text-anchor="middle">4.9</text><text x="270" y="21" font-size="9" fill="#0d9488" font-family="system-ui" text-anchor="middle">5.6</text><text x="15" y="15" font-size="10" fill="#64748b" font-family="system-ui">in.</text></svg>';
  if (qId === 'm168') return '<svg viewBox="0 0 280 200" width="260" style="max-width:100%"><line x1="40" y1="170" x2="260" y2="170" stroke="#64748b" stroke-width="1"/><line x1="40" y1="170" x2="40" y2="20" stroke="#64748b" stroke-width="1"/><rect x="55" y="70" width="40" height="100" fill="#0d9488" rx="3"/><rect x="110" y="48" width="40" height="122" fill="#14b8a6" rx="3"/><rect x="165" y="60" width="40" height="110" fill="#0d9488" rx="3"/><rect x="220" y="36" width="40" height="134" fill="#14b8a6" rx="3"/><text x="75" y="185" font-size="10" fill="#64748b" font-family="system-ui" text-anchor="middle">2020</text><text x="130" y="185" font-size="10" fill="#64748b" font-family="system-ui" text-anchor="middle">2021</text><text x="185" y="185" font-size="10" fill="#64748b" font-family="system-ui" text-anchor="middle">2022</text><text x="240" y="185" font-size="10" fill="#64748b" font-family="system-ui" text-anchor="middle">2023</text><text x="75" y="65" font-size="10" fill="#0d9488" font-family="system-ui" text-anchor="middle">120</text><text x="130" y="43" font-size="10" fill="#0d9488" font-family="system-ui" text-anchor="middle">145</text><text x="185" y="55" font-size="10" fill="#0d9488" font-family="system-ui" text-anchor="middle">130</text><text x="240" y="31" font-size="10" fill="#0d9488" font-family="system-ui" text-anchor="middle">160</text><text x="15" y="15" font-size="10" fill="#64748b" font-family="system-ui">tons</text></svg>';
  // Scatterplot
  if (qId === 'm60') return '<svg viewBox="0 0 280 220" width="270" style="max-width:100%"><line x1="40" y1="190" x2="270" y2="190" stroke="#64748b" stroke-width="1"/><line x1="40" y1="190" x2="40" y2="20" stroke="#64748b" stroke-width="1"/><circle cx="60" cy="170" r="4" fill="#6366f1"/><circle cx="80" cy="155" r="4" fill="#6366f1"/><circle cx="100" cy="140" r="4" fill="#6366f1"/><circle cx="110" cy="145" r="4" fill="#6366f1"/><circle cx="130" cy="120" r="4" fill="#6366f1"/><circle cx="150" cy="110" r="4" fill="#6366f1"/><circle cx="160" cy="100" r="4" fill="#6366f1"/><circle cx="180" cy="85" r="4" fill="#6366f1"/><circle cx="200" cy="75" r="4" fill="#6366f1"/><circle cx="220" cy="60" r="4" fill="#6366f1"/><circle cx="240" cy="50" r="4" fill="#6366f1"/><circle cx="250" cy="55" r="4" fill="#6366f1"/><line x1="50" y1="175" x2="260" y2="45" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="4,3"/><text x="155" y="208" font-size="11" fill="#64748b" font-family="system-ui" text-anchor="middle">Hours studied</text><text x="15" y="105" font-size="11" fill="#64748b" font-family="system-ui" transform="rotate(-90,15,105)">Score</text></svg>';
  // Rectangle
  if (qId === 'm93') return '<svg viewBox="0 0 280 180" width="260" style="max-width:100%"><rect x="40" y="30" width="200" height="110" fill="none" stroke="#0d9488" stroke-width="2.5" rx="2"/><text x="140" y="20" font-size="13" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="middle">length</text><text x="260" y="90" font-size="13" fill="#0d9488" font-weight="600" font-family="system-ui">width</text><text x="140" y="160" font-size="12" fill="#64748b" font-family="system-ui" text-anchor="middle">Perimeter = 56 cm</text></svg>';
  // Trapezoid
  if (qId === 'm183') return '<svg viewBox="0 0 280 180" width="260" style="max-width:100%"><polygon points="60,30 220,30 260,140 20,140" fill="none" stroke="#0d9488" stroke-width="2.5"/><text x="140" y="22" font-size="13" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="middle">8 m</text><text x="140" y="160" font-size="13" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="middle">12 m</text><line x1="140" y1="30" x2="140" y2="140" stroke="#64748b" stroke-width="1" stroke-dasharray="4,3"/><text x="148" y="90" font-size="12" fill="#6366f1" font-weight="600" font-family="system-ui">5 m</text></svg>';
  // Running track (rectangle + semicircles)
  if (qId === 'm74') return '<svg viewBox="0 0 300 160" width="280" style="max-width:100%"><rect x="70" y="20" width="160" height="110" fill="none" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/><path d="M 70 20 A 55 55 0 0 0 70 130" stroke="#0d9488" stroke-width="2.5" fill="none"/><path d="M 230 20 A 55 55 0 0 1 230 130" stroke="#0d9488" stroke-width="2.5" fill="none"/><line x1="70" y1="20" x2="230" y2="20" stroke="#0d9488" stroke-width="2.5"/><line x1="70" y1="130" x2="230" y2="130" stroke="#0d9488" stroke-width="2.5"/><text x="150" y="13" font-size="12" fill="#0d9488" font-weight="600" font-family="system-ui" text-anchor="middle">100 m</text><text x="250" y="80" font-size="12" fill="#0d9488" font-weight="600" font-family="system-ui">60 m</text></svg>';
  return '';
}



var _mathObserver = null;
function setupMathObserver() {
  var app = document.getElementById('app');
  if (!app || _mathObserver) return;
  _mathObserver = new MutationObserver(function() {
    renderMath();
  });
  _mathObserver.observe(app, { childList: true, subtree: true });
}

function renderMath() {
  if (typeof katex === 'undefined') return;
  var els = document.querySelectorAll('.km');
  for (var i = 0; i < els.length; i++) {
    if (els[i].classList.contains('kd')) continue;
    var tex = els[i].textContent;
    try {
      katex.render(tex, els[i], { throwOnError: false, displayMode: false });
      els[i].classList.add('kd');
    } catch(e) { /* leave as plain text */ }
  }
}

function cleanMath(s) {
  if (!s) return '';
  if (!/[√²³⁴⁵⁶⁷⁸⁹⁰ⁿˣʸᵐᵗ\^]/.test(s)) return s;
  var t = s;
  t = t.replace(/²/g, '^{2}');
  t = t.replace(/³/g, '^{3}');
  t = t.replace(/⁴/g, '^{4}');
  t = t.replace(/⁵/g, '^{5}');
  t = t.replace(/⁶/g, '^{6}');
  t = t.replace(/⁷/g, '^{7}');
  t = t.replace(/⁸/g, '^{8}');
  t = t.replace(/⁹/g, '^{9}');
  t = t.replace(/⁰/g, '^{0}');
  t = t.replace(/ⁿ/g, '^{n}');
  t = t.replace(/ˣ/g, '^{x}');
  t = t.replace(/ʸ/g, '^{y}');
  t = t.replace(/ᵐ/g, '^{m}');
  t = t.replace(/ᵗ/g, '^{t}');
  t = t.replace(/√\(([^)]+)\)/g, '\\sqrt{$1}');
  t = t.replace(/√(\d+)/g, '\\sqrt{$1}');
  t = t.replace(/√([a-zA-Z])/g, '\\sqrt{$1}');
  // Check if pure math (no English words)
  var words = t.split(/\s+/);
  var eng = 0;
  for (var i = 0; i < words.length; i++) {
    var w = words[i].replace(/[^a-zA-Z]/g, '');
    if (w.length > 2 && !/^(sqrt|frac|log|sin|cos|tan|max|min|abs|mod)$/i.test(w)) eng++;
  }
  if (eng === 0) {
    // Pure math — wrap entire expression, convert fractions
    t = t.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '\\frac{$1}{$2}');
    t = t.replace(/\(([^()]+)\)\/(\w+)/g, '\\frac{$1}{$2}');
    t = t.replace(/(\w+)\/\(([^()]+)\)/g, '\\frac{$1}{$2}');
    return '<span class="km">' + t + '</span>';
  }
  // Mixed text+math — find math regions
  var result = [];
  var mathBuf = [];
  function flushMath() {
    if (mathBuf.length === 0) return;
    var m = mathBuf.join(' ');
    m = m.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '\\frac{$1}{$2}');
    m = m.replace(/\(([^()]+)\)\/(\w+)/g, '\\frac{$1}{$2}');
    result.push('<span class="km">' + m + '</span>');
    mathBuf = [];
  }
  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    var hasMath = /[\^{}\\]/.test(w) || /^\d/.test(w) || /^[a-zA-Z][\^(]/.test(w) || /^[(]/.test(w) || /[=<>+×·≤≥≠]/.test(w) || w === '−';
    if (hasMath) { mathBuf.push(w); }
    else { flushMath(); result.push(w); }
  }
  flushMath();
  return result.join(' ');
}
