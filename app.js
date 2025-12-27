// ====== STATUS PILL: proves JS loaded ======
const statusPill = document.getElementById("statusPill");
statusPill.textContent = "JS: Loaded";
statusPill.classList.remove("red");
statusPill.classList.add("green");

// ====== QUESTION BANK (50) ======
const QUESTIONS = [
  // Easy / moderate knowledge based on the wine list you sent (brands/regions/styles)

  { q:"Which wine is a Cabernet Sauvignon from Napa Valley?", a:["Caymus Cabernet Sauvignon","Kim Crawford Sauvignon Blanc","Riondo Prosecco","Meiomi Pinot Noir"], c:0 },
  { q:"Which wine is a Sauvignon Blanc from New Zealand?", a:["Kim Crawford Sauvignon Blanc","Rombauer Chardonnay","Josh Cellars Cabernet","Cecchi Chianti Classico"], c:0 },
  { q:"Which wine is a Prosecco (sparkling) from Italy?", a:["Riondo Prosecco","Duckhorn Decoy Merlot","Caymus Cabernet Sauvignon","Beringer Founders Estate Cabernet"], c:0 },
  { q:"Which champagne brand listed is from France?", a:["Veuve Clicquot Yellow Label Brut","La Marca Prosecco Rosé","Riondo Prosecco","Seven Daughters Moscato"], c:0 },
  { q:"Which wine is a Riesling from Washington?", a:["Chateau Ste. Michelle Riesling","Apothic Red Blend","Mark West Pinot Noir","Coppola Diamond Cabernet"], c:0 },

  { q:"Which is a Pinot Grigio commonly associated with Italy?", a:["Santa Margherita Pinot Grigio","Josh Cellars Cabernet","Duckhorn Goldeneye","The Prisoner Red Blend"], c:0 },
  { q:"Which wine is known as a California Pinot Noir brand?", a:["Meiomi Pinot Noir","Allegrini Valpolicella","Ruffino Chianti DOCG","Il Borro ‘Pian di Nova’"], c:0 },
  { q:"Which wine is a Chardonnay from California (widely sold)?", a:["Kendall-Jackson Chardonnay","Ecco Domani Pinot Grigio","Kim Crawford Sauvignon Blanc","Riondo Prosecco"], c:0 },
  { q:"Which wine is a Super Tuscan from Tuscany?", a:["Il Borro ‘Pian di Nova’","Bogle Merlot","Mark West Pinot Noir","Beringer Founders Estate Cabernet"], c:0 },
  { q:"Which brand is known for buttery/rich Chardonnay style?", a:["Rombauer Chardonnay","Seven Daughters Moscato","Chloe Pinot Grigio","Fleurs de Prairie Rosé"], c:0 },

  { q:"Which is a red blend from California often served by the glass?", a:["Apothic Red Blend","Chateau Ste. Michelle Riesling","Riondo Prosecco","Santa Margherita Pinot Grigio"], c:0 },
  { q:"Which is a red blend known for bold, dark fruit style?", a:["The Prisoner Red Blend","Copper Ridge White Zinfandel","Fleurs de Prairie Rosé","La Marca Prosecco Rosé"], c:0 },
  { q:"Which is a Chianti (Italy) option listed?", a:["Ruffino Chianti DOCG","Kim Crawford Sauvignon Blanc","Josh Cellars Cabernet","Bogle Merlot"], c:0 },
  { q:"Which is a Chianti Classico (Italy) option listed?", a:["Cecchi Chianti Classico","Riondo Prosecco","Mark West Pinot Noir","Beringer Cabernet"], c:0 },
  { q:"Which is a Valpolicella from Verona (Italy)?", a:["Allegrini Valpolicella","Orin Swift ‘Abstract’","DAOU Cabernet Sauvignon","Conundrum Red Blend"], c:0 },

  { q:"Which is a Merlot brand listed?", a:["Bogle Merlot","Veuve Clicquot Brut","Kim Crawford Sauvignon Blanc","Riondo Prosecco"], c:0 },
  { q:"Which is a Merlot (Sonoma) brand listed?", a:["Duckhorn ‘Decoy’ Merlot","Seven Daughters Moscato","Caymus Cabernet","Riondo Prosecco"], c:0 },
  { q:"Which wine is a Cabernet Sauvignon brand listed?", a:["Josh Cellars Cabernet Sauvignon","Ecco Domani Pinot Grigio","Fleurs de Prairie Rosé","Mark West Pinot Noir"], c:0 },
  { q:"Which wine is a Paso Robles Cabernet listed?", a:["J. Lohr ‘Seven Oaks’ Cabernet","Cecchi Chianti Classico","Allegrini Valpolicella","Riondo Prosecco"], c:0 },
  { q:"Which wine is a Napa Cabernet listed (premium)?", a:["Stag’s Leap Artemis","Copper Ridge White Zinfandel","Chateau Ste. Michelle Riesling","La Marca Prosecco Rosé"], c:0 },

  { q:"Which is a Moscato from Italy?", a:["Seven Daughters Moscato","Duckhorn Goldeneye Pinot Noir","Beringer Cabernet","Coppola Diamond Cabernet"], c:0 },
  { q:"Which is a Rosé brand listed?", a:["Fleurs de Prairie Rosé","Orin Swift ‘Abstract’","DAOU ‘Pessimist’","Duckhorn Decoy Merlot"], c:0 },
  { q:"Which is a Prosecco Rosé brand listed?", a:["La Marca Prosecco Rosé","Veuve Clicquot Brut","Kim Crawford Sauvignon Blanc","Caymus Cabernet"], c:0 },
  { q:"Which is a Sauvignon Blanc from California listed?", a:["Quilt ‘Threadcount’ Sauvignon Blanc","Allegrini Valpolicella","Ruffino Chianti","Riondo Prosecco"], c:0 },
  { q:"Which is a Sonoma Sauvignon Blanc brand listed?", a:["Imagery Sauvignon Blanc","Josh Cellars Cabernet","Caymus Cabernet","Veuve Clicquot Brut"], c:0 },

  { q:"A ‘red blend’ means:", a:["Blend of multiple red grapes","A sweet sparkling wine","A white wine with bubbles","A wine only from France"], c:0 },
  { q:"Which grape is typically used for Pinot Noir?", a:["Pinot Noir grape","Cabernet Sauvignon grape","Riesling grape","Moscato grape"], c:0 },
  { q:"Which style is typically crisp/acidic?", a:["Sauvignon Blanc","Merlot","Cabernet Sauvignon","Red Blend"], c:0 },
  { q:"Which is typically light-bodied (compared to Cab)?", a:["Pinot Noir","Cabernet Sauvignon","Red Blend","Merlot"], c:0 },
  { q:"Which is typically sparkling?", a:["Prosecco","Merlot","Cabernet Sauvignon","Chianti"], c:0 },

  { q:"Which wine is an Orin Swift brand listed?", a:["Orin Swift ‘Abstract’","Riondo Prosecco","Kim Crawford Sauvignon Blanc","Cecchi Chianti Classico"], c:0 },
  { q:"Which wine is a DAOU brand listed?", a:["DAOU ‘Pessimist’","Rombauer Chardonnay","Veuve Clicquot Brut","Fleurs de Prairie Rosé"], c:0 },
  { q:"Which wine is a DAOU Cabernet listed?", a:["DAOU Cabernet Sauvignon","Copper Ridge White Zinfandel","Seven Daughters Moscato","Riondo Prosecco"], c:0 },
  { q:"Which wine is a Coppola brand listed?", a:["Coppola Diamond Cabernet","Allegrini Valpolicella","Il Borro Super Tuscan","La Marca Prosecco Rosé"], c:0 },
  { q:"Which wine is a Beringer brand listed?", a:["Beringer Founders’ Estate Cabernet","Kim Crawford Sauvignon Blanc","Riondo Prosecco","Cecchi Chianti Classico"], c:0 },

  { q:"If a guest wants a ‘buttery’ white, best pick is:", a:["Rombauer Chardonnay","Chateau Ste. Michelle Riesling","Kim Crawford Sauvignon Blanc","Santa Margherita Pinot Grigio"], c:0 },
  { q:"If a guest wants ‘dry bubbles’, best pick is:", a:["Veuve Clicquot Brut","Seven Daughters Moscato","Copper Ridge White Zinfandel","Kim Crawford Sauvignon Blanc"], c:0 },
  { q:"If a guest wants a ‘sweet-ish’ wine, best pick is:", a:["Moscato","Cabernet Sauvignon","Chianti","Merlot"], c:0 },
  { q:"If a guest wants ‘very bold red blend’, best pick is:", a:["The Prisoner Red Blend","Fleurs de Prairie Rosé","Riondo Prosecco","Chloe Pinot Grigio"], c:0 },
  { q:"If a guest wants ‘light, easy red’, best pick is:", a:["Mark West Pinot Noir","Caymus Cabernet Sauvignon","Stag’s Leap Artemis","DAOU Cabernet Sauvignon"], c:0 },

  { q:"Which wine is a Goldeneye (Pinot Noir) brand listed?", a:["Duckhorn ‘Goldeneye’","Riondo Prosecco","Veuve Clicquot Brut","Il Borro ‘Pian di Nova’"], c:0 },
  { q:"Which wine is a Belle Glos Pinot Noir listed?", a:["Belle Glos ‘Balade’","Bogle Merlot","Coppola Diamond Cabernet","Kendall-Jackson Chardonnay"], c:0 },
  { q:"Which is a ‘white zinfandel’ style listed?", a:["Copper Ridge White Zinfandel","Josh Cellars Cabernet","Cecchi Chianti Classico","Duckhorn Decoy Merlot"], c:0 },
  { q:"Pinot Grigio is generally:", a:["Light and crisp","Heavy and tannic","Sparkling sweet","Always fortified"], c:0 },
  { q:"Cabernet Sauvignon is generally:", a:["Full-bodied with tannins","Light-bodied with no tannins","Sparkling and sweet","Always rosé"], c:0 },

  { q:"Chianti is from:", a:["Italy","France","New Zealand","Washington"], c:0 },
  { q:"Prosecco is from:", a:["Italy","Napa Valley","Washington","France"], c:0 },
  { q:"Veuve Clicquot is from:", a:["France","Italy","New Zealand","Sonoma"], c:0 },
  { q:"Kim Crawford Sauvignon Blanc is from:", a:["New Zealand","Italy","France","Washington"], c:0 },
  { q:"Caymus Cabernet Sauvignon is from:", a:["Napa Valley","Verona","Tuscany","Washington"], c:0 },

  { q:"To PASS this test you need:", a:["80% or higher","60% or higher","50% or higher","100% only"], c:0 },
];

// ====== STATE ======
const PASSING = 0.80;

let idx = 0;
let name = "";
let answers = new Array(QUESTIONS.length).fill(null);

// ====== ELEMENTS ======
const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const results = document.getElementById("results");

const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("startBtn");
const introError = document.getElementById("introError");

const qText = document.getElementById("qText");
const progress = document.getElementById("progress");
const namePill = document.getElementById("namePill");
const choicesBox = document.getElementById("choices");
const quizError = document.getElementById("quizError");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

const rName = document.getElementById("rName");
const rScore = document.getElementById("rScore");
const rPct = document.getElementById("rPct");
const stamp = document.getElementById("stamp");
const restartBtn = document.getElementById("restartBtn");

// ====== HELPERS ======
function show(el){ el.classList.remove("hidden"); }
function hide(el){ el.classList.add("hidden"); }

function render(){
  const q = QUESTIONS[idx];
  progress.textContent = `${idx + 1} of ${QUESTIONS.length}`;
  qText.textContent = q.q;

  choicesBox.innerHTML = "";
  q.a.forEach((label, i) => {
    const row = document.createElement("label");
    row.className = "choice";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "choice";
    radio.value = String(i);
    radio.checked = answers[idx] === i;

    radio.addEventListener("change", () => {
      answers[idx] = i;
      quizError.textContent = "";
    });

    const text = document.createElement("div");
    text.textContent = label;

    row.appendChild(radio);
    row.appendChild(text);
    choicesBox.appendChild(row);
  });

  backBtn.disabled = idx === 0;
  nextBtn.textContent = idx === QUESTIONS.length - 1 ? "Finish →" : "Next →";
}

function score(){
  let correct = 0;
  QUESTIONS.forEach((q, i) => {
    if (answers[i] === q.c) correct++;
  });
  return correct;
}

function finish(){
  const correct = score();
  const total = QUESTIONS.length;
  const pct = correct / total;

  rName.textContent = name;
  rScore.textContent = `${correct} / ${total}`;
  rPct.textContent = `${Math.round(pct * 100)}%`;

  if (pct >= PASSING){
    stamp.textContent = "PASS";
    stamp.classList.remove("fail");
  } else {
    stamp.textContent = "FAIL";
    stamp.classList.add("fail");
  }

  hide(quiz);
  show(results);
}

// ====== EVENTS ======
startBtn.addEventListener("click", () => {
  introError.textContent = "";
  name = (nameInput.value || "").trim();

  if (!name){
    introError.textContent = "Please enter your name to begin.";
    return;
  }

  namePill.textContent = name;

  hide(intro);
  show(quiz);
  idx = 0;
  render();
});

backBtn.addEventListener("click", () => {
  quizError.textContent = "";
  if (idx > 0){
    idx--;
    render();
  }
});

nextBtn.addEventListener("click", () => {
  if (answers[idx] === null){
    quizError.textContent = "Pick an answer before continuing.";
    return;
  }
  quizError.textContent = "";

  if (idx === QUESTIONS.length - 1){
    finish();
  } else {
    idx++;
    render();
  }
});

restartBtn.addEventListener("click", () => {
  // reset
  idx = 0;
  name = "";
  answers = new Array(QUESTIONS.length).fill(null);

  nameInput.value = "";
  namePill.textContent = "—";
  introError.textContent = "";
  quizError.textContent = "";

  hide(results);
  hide(quiz);
  show(intro);
});