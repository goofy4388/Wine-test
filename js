const PASS_COUNT = 40; // 80% of 50

const QUESTIONS = [
  { q:"Which wine is typically the sweetest?", options:["Cabernet Sauvignon","Pinot Noir","Moscato","Merlot"], answerIndex:2 },
  { q:"Prosecco comes from which country?", options:["France","Spain","Italy","USA"], answerIndex:2 },
  { q:"Pinot Grigio is usually best described as:", options:["Bold and tannic","Sweet and heavy","Light, crisp, and refreshing","Smoky and oaky"], answerIndex:2 },
  { q:"Which wine is sparkling?", options:["Chardonnay","Prosecco","Merlot","Sauvignon Blanc"], answerIndex:1 },
  { q:"Red wine gets most of its color from:", options:["Oak barrels","Grape skins","Sugar","Bottle aging"], answerIndex:1 },
  { q:"Which is typically a full-bodied red?", options:["Cabernet Sauvignon","Pinot Grigio","Prosecco","Moscato"], answerIndex:0 },
  { q:"Which is usually a light-bodied red?", options:["Cabernet Sauvignon","Pinot Noir","Red Blend","Merlot"], answerIndex:1 },
  { q:"Riesling is typically a:", options:["White wine","Red wine","Sparkling red","Fortified wine only"], answerIndex:0 },
  { q:"Rosé is usually made by:", options:["Mixing red and white wine (usually)","Short contact with red grape skins","Using only white grapes","Adding food coloring"], answerIndex:1 },
  { q:"Which pairing is most common?", options:["Cabernet + steak","Moscato + steak","Prosecco + steak","Pinot Grigio + steak"], answerIndex:0 },

  { q:"Caymus is best known as which style?", options:["Pinot Noir","Chardonnay","Cabernet Sauvignon","Merlot"], answerIndex:2 },
  { q:"Veuve Clicquot Yellow Label is a:", options:["Prosecco","Rosé","Champagne","Moscato"], answerIndex:2 },
  { q:"Kim Crawford is famous for:", options:["Sauvignon Blanc","Merlot","Cabernet Sauvignon","Pinot Noir"], answerIndex:0 },
  { q:"Seven Daughters Moscato is best described as:", options:["Dry and oaky","Sweet and light","Bold and tannic","Smoky and earthy"], answerIndex:1 },
  { q:"Santa Margherita is a well-known:", options:["Pinot Grigio","Cabernet Sauvignon","Merlot","Champagne"], answerIndex:0 },
  { q:"Chateau Ste. Michelle Riesling is a:", options:["White wine","Sparkling wine","Red blend","Rosé only"], answerIndex:0 },
  { q:"Mark West is commonly a:", options:["Pinot Noir","Cabernet Sauvignon","Merlot","Sauvignon Blanc"], answerIndex:0 },
  { q:"Meiomi is commonly a:", options:["Pinot Noir","Pinot Grigio","Prosecco","Riesling"], answerIndex:0 },
  { q:"The Prisoner is typically a:", options:["Red Blend","Chardonnay","Riesling","Sparkling Rosé"], answerIndex:0 },
  { q:"Apothic is typically a:", options:["Red Blend","Pinot Grigio","Champagne","Sauvignon Blanc"], answerIndex:0 },

  { q:"Which is most likely a 'sparkling' option on your list?", options:["Riondo Prosecco","Kendall-Jackson Chardonnay","Josh Cellars Cabernet","Bogle Merlot"], answerIndex:0 },
  { q:"Which wine would you suggest for someone who wants 'bubbly and celebratory'?", options:["Merlot","Cabernet Sauvignon","Prosecco","Red Blend"], answerIndex:2 },
  { q:"Which is commonly a crisp, zesty white?", options:["Sauvignon Blanc","Cabernet Sauvignon","Merlot","Red Blend"], answerIndex:0 },
  { q:"Which is a common Italian red style on your list?", options:["Valpolicella","Moscato","Sauvignon Blanc","Prosecco"], answerIndex:0 },
  { q:"Ruffino Chianti is from:", options:["France","Italy","USA","New Zealand"], answerIndex:1 },
  { q:"Chianti is typically:", options:["Italian red wine","French sparkling wine","California white wine","Dessert wine only"], answerIndex:0 },
  { q:"Chardonnay is typically:", options:["A white wine","A red wine","A sparkling red","A fortified wine"], answerIndex:0 },
  { q:"Kendall-Jackson is commonly a:", options:["Chardonnay","Prosecco","Moscato","Riesling"], answerIndex:0 },
  { q:"William Hill (on your list) is commonly a:", options:["Chardonnay","Cabernet Franc","Prosecco Rosé","Port"], answerIndex:0 },
  { q:"Bogle (on your list) appears under:", options:["Rich & Velvety Reds","Sparkling","Whites only","Rosé only"], answerIndex:0 },

  { q:"Best match for a guest asking for 'light and refreshing'?", options:["Pinot Grigio","Cabernet Sauvignon","Red Blend","Merlot"], answerIndex:0 },
  { q:"A guest wants 'sweet'. Best direction:", options:["Moscato","Cabernet Sauvignon","Valpolicella","Chianti"], answerIndex:0 },
  { q:"A guest wants 'dry white'. Best direction:", options:["Pinot Grigio or Sauvignon Blanc","Moscato","Red Blend","Merlot"], answerIndex:0 },
  { q:"A guest wants a smooth red that isn’t too heavy:", options:["Pinot Noir","Cabernet Sauvignon","Big red blend only","Very oaky Chardonnay"], answerIndex:0 },
  { q:"Cabernet Sauvignon is usually described as:", options:["Bold with tannins","Sweet and bubbly","Light and floral","Only rosé"], answerIndex:0 },
  { q:"Merlot is often described as:", options:["Softer and smooth red","Sweet sparkling wine","Crisp white only","Always high acid and tart"], answerIndex:0 },
  { q:"Pinot Noir is usually:", options:["Lighter red with softer tannins","The sweetest wine","Always sparkling","Always fortified"], answerIndex:0 },
  { q:"Sauvignon Blanc is often:", options:["Crisp with citrus/green notes","Heavy and buttery","Sweet red","Sparkling"], answerIndex:0 },
  { q:"Which would most likely pair well with pasta + red sauce?", options:["Chianti / Red Blend","Moscato","Prosecco only","Pinot Grigio only"], answerIndex:0 },
  { q:"Which is a common pairing for spicy food?", options:["Off-dry Riesling or fruity white","Big tannic Cabernet","Very dry red","Only champagne"], answerIndex:0 },

  { q:"Allegrini Valpolicella is from:", options:["Italy","France","USA","New Zealand"], answerIndex:0 },
  { q:"La Marca is commonly:", options:["Prosecco","Merlot","Cabernet Sauvignon","Pinot Noir"], answerIndex:0 },
  { q:"Veuve Clicquot is most associated with:", options:["Champagne, France","Prosecco, Italy","Cabernet, USA","Riesling, Germany"], answerIndex:0 },
  { q:"Stag’s Leap Artemis is typically a:", options:["Cabernet Sauvignon","Pinot Grigio","Prosecco","Riesling"], answerIndex:0 },
  { q:"J. Lohr Seven Oaks is typically a:", options:["Cabernet Sauvignon","Moscato","Sparkling Rosé","Pinot Grigio"], answerIndex:0 },
  { q:"Josh Cellars (on your list) is commonly:", options:["Cabernet Sauvignon","Prosecco","Champagne","Riesling"], answerIndex:0 },
  { q:"Beringer Founders’ Estate (on your list) is commonly:", options:["Cabernet Sauvignon","Pinot Grigio","Moscato","Prosecco"], answerIndex:0 },
  { q:"Duckhorn 'Decoy' on your list is shown under:", options:["Reds","Sparkling","Rosé only","Whites only"], answerIndex:0 },
  { q:"The term 'Red Blend' means:", options:["Multiple red grapes combined","White wine mixed with red","Only one grape","Wine mixed with soda"], answerIndex:0 },
  { q:"If a guest says 'I don’t like bitterness/tannins,' steer away from:", options:["Big Cabernet Sauvignon","Pinot Grigio","Prosecco","Moscato"], answerIndex:0 }
];

// ---------- UI ----------
const el = (id) => document.getElementById(id);

const startScreen = el("startScreen");
const testScreen = el("testScreen");
const resultsScreen = el("resultsScreen");

const statusBadge = el("statusBadge");
const startBtn = el("startBtn");
const submitBtn = el("submitBtn");
const restartBtn = el("restartBtn");
const printBtn = el("printBtn");
const reviewBtn = el("reviewBtn");
const scrollTopBtn = el("scrollTopBtn");

const testName = el("testName");
const questionList = el("questionList");
const progressText = el("progressText");
const progressFill = el("progressFill");

const testTitle = el("testTitle");
const testMeta = el("testMeta");

const resName = el("resName");
const resScore = el("resScore");
const resPassFail = el("resPassFail");
const resDate = el("resDate");
const reviewPanel = el("reviewPanel");

el("qCount").textContent = String(QUESTIONS.length);

let userAnswers = new Array(QUESTIONS.length).fill(null);
let userName = "";

function setBadge(text){ statusBadge.textContent = text; }
function show(section){
  startScreen.classList.add("hidden");
  testScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  section.classList.remove("hidden");
}
function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function renderQuestions(){
  questionList.innerHTML = "";
  QUESTIONS.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "qCard";

    const top = document.createElement("div");
    top.className = "qTop";
    top.innerHTML = `
      <div>
        <div class="qNum">Question ${idx+1} of ${QUESTIONS.length}</div>
        <div class="qText">${escapeHtml(item.q)}</div>
      </div>
    `;

    const opts = document.createElement("div");
    opts.className = "options";

    item.options.forEach((optText, oIdx) => {
      const opt = document.createElement("label");
      opt.className = "opt";
      opt.innerHTML = `
        <input type="radio" name="q${idx}" value="${oIdx}" />
        <div><strong>${String.fromCharCode(65+oIdx)}.</strong> ${escapeHtml(optText)}</div>
      `;
      opt.querySelector("input").addEventListener("change", () => {
        userAnswers[idx] = oIdx;
        updateProgress();
      });
      opts.appendChild(opt);
    });

    card.appendChild(top);
    card.appendChild(opts);
    questionList.appendChild(card);
  });

  updateProgress();
}

function updateProgress(){
  const answered = userAnswers.filter(v => v !== null).length;
  progressText.textContent = `${answered}/${QUESTIONS.length} answered`;
  const pct = Math.round((answered / QUESTIONS.length) * 100);
  progressFill.style.width = `${pct}%`;
}

function grade(){
  let correct = 0;
  const details = [];

  for(let i=0;i<QUESTIONS.length;i++){
    const q = QUESTIONS[i];
    const ua = userAnswers[i];
    const isCorrect = ua === q.answerIndex;
    if(isCorrect) correct++;
    details.push({ i, q: q.q, chosen: ua, correct: q.answerIndex, isCorrect });
  }

  const percent = Math.round((correct / QUESTIONS.length) * 100);
  const pass = correct >= PASS_COUNT;
  return { correct, percent, pass, details };
}

function showResults(result){
  resName.textContent = userName || "—";
  resScore.textContent = `${result.correct}/${QUESTIONS.length} (${result.percent}%)`;
  resPassFail.textContent = result.pass ? "PASS ✅" : "FAIL ❌";
  resPassFail.className = "resultsValue " + (result.pass ? "pass" : "fail");
  resDate.textContent = new Date().toLocaleString();

  reviewPanel.innerHTML = "";
  result.details.forEach(d => {
    const q = QUESTIONS[d.i];
    const chosenText = (d.chosen === null)
      ? "No answer"
      : `${String.fromCharCode(65 + d.chosen)}. ${q.options[d.chosen]}`;
    const correctText = `${String.fromCharCode(65 + d.correct)}. ${q.options[d.correct]}`;

    const item = document.createElement("div");
    item.className = "reviewItem";
    item.innerHTML = `
      <div class="reviewQ">${d.i+1}. ${escapeHtml(d.q)}</div>
      <div class="reviewA">Your answer:
        <span class="${d.isCorrect ? "reviewGood" : "reviewBad"}">${escapeHtml(chosenText)}</span>
      </div>
      ${d.isCorrect ? "" : `<div class="reviewA">Correct:
        <span class="reviewGood">${escapeHtml(correctText)}</span>
      </div>`}
    `;
    reviewPanel.appendChild(item);
  });
}

// Events
startBtn.addEventListener("click", () => {
  userName = (testName.value || "").trim();
  if(!userName){
    alert("Please enter your name.");
    testName.focus();
    return;
  }
  userAnswers = new Array(QUESTIONS.length).fill(null);
  renderQuestions();

  testTitle.textContent = "Wine Knowledge Test";
  testMeta.textContent = `Name: ${userName} • ${QUESTIONS.length} questions • Pass = 80%`;

  setBadge("In Progress");
  show(testScreen);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

submitBtn.addEventListener("click", () => {
  const unanswered = userAnswers.filter(v => v === null).length;
  if(unanswered){
    const ok = confirm(`You left ${unanswered} unanswered.\n\nSubmit anyway?`);
    if(!ok) return;
  }

  const result = grade();
  showResults(result);

  setBadge(result.pass ? "PASS ✅" : "FAIL ❌");
  show(resultsScreen);
  reviewPanel.classList.add("hidden");
  reviewBtn.textContent = "Review Answers";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

restartBtn.addEventListener("click", () => {
  testName.value = "";
  userName = "";
  userAnswers = new Array(QUESTIONS.length).fill(null);
  setBadge("Ready");
  show(startScreen);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

printBtn.addEventListener("click", () => window.print());
reviewBtn.addEventListener("click", () => {
  reviewPanel.classList.toggle("hidden");
  reviewBtn.textContent = reviewPanel.classList.contains("hidden") ? "Review Answers" : "Hide Review";
});
scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Initial
setBadge("Ready");
show(startScreen);
