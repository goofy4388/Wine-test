(function () {
  "use strict";

  // ===== DOM =====
  const startCard   = document.getElementById("startCard");
  const testCard    = document.getElementById("testCard");
  const resultsCard = document.getElementById("resultsCard");

  const nameInput   = document.getElementById("nameInput");
  const startBtn    = document.getElementById("startBtn");
  const resetBtnTop = document.getElementById("resetBtnTop");

  const whoName      = document.getElementById("whoName");
  const progressText = document.getElementById("progressText");
  const qCount       = document.getElementById("qCount");
  const questionText = document.getElementById("questionText");
  const optionsForm  = document.getElementById("optionsForm");

  const backBtn   = document.getElementById("backBtn");
  const nextBtn   = document.getElementById("nextBtn");
  const finishBtn = document.getElementById("finishBtn");
  const resetBtn  = document.getElementById("resetBtn");

  const rName  = document.getElementById("rName");
  const rScore = document.getElementById("rScore");
  const rPct   = document.getElementById("rPct");
  const stamp  = document.getElementById("stamp");

  const reviewBtn  = document.getElementById("reviewBtn");
  const restartBtn = document.getElementById("restartBtn");
  const missedList = document.getElementById("missedList");
  const reviewWrap = document.getElementById("reviewWrap");

  // ===== SETTINGS =====
  const PASS_PCT = 80;
  const KEY = "wine_test_v1";

  // ===== QUESTIONS (50) =====
  // Question text does NOT reveal the answer; answer is stored only in JS.
  const QUESTIONS = [
    { q: "Which wine on our list is a Napa Valley Cabernet Sauvignon?", choices: ["Caymus Cabernet Sauvignon","Josh Cellars Cabernet Sauvignon","Mark West Pinot Noir","Santa Margherita Pinot Grigio"], a: 0 },
    { q: "Which wine is a Super Tuscan from Tuscany?", choices: ["Il Borro 'Pian di Nova'","Riondo Prosecco","Veuve Clicquot Yellow Label","Chateau Ste. Michelle Riesling"], a: 0 },
    { q: "Which wine is a Sauvignon Blanc from Marlborough, New Zealand?", choices: ["Kim Crawford Sauvignon Blanc","Quilt 'Threadcount' Sauvignon Blanc","Kendall-Jackson Chardonnay","Meomi Pinot Noir"], a: 0 },
    { q: "Which sparkling wine is a French Champagne on our list?", choices: ["Veuve Clicquot Yellow Label","La Marca Prosecco Rosé","Riondo Prosecco","Fleurs de Prairie Rosé"], a: 0 },
    { q: "Which wine is a Prosecco from Italy?", choices: ["Riondo Prosecco","Duckhorn 'Decoy' Merlot","DAOU Cabernet Sauvignon","The Prisoner Red Blend"], a: 0 },

    { q: "Which wine is a Prosecco Rosé?", choices: ["La Marca Prosecco Rosé","Rombauer Chardonnay","Bogle Merlot","Coppola Diamond Cabernet Sauvignon"], a: 0 },
    { q: "Which wine is a Riesling from Washington State?", choices: ["Chateau Ste. Michelle Riesling","Ecco Domani Pinot Grigio","Conundrum Red Blend","Allegrini Valpolicella"], a: 0 },
    { q: "Which wine is commonly categorized as a sweet Moscato?", choices: ["Seven Daughters Moscato","Josh Cellars Cabernet Sauvignon","Duckhorn 'Goldeneye' Pinot Noir","Orin Swift 'Abstract'"], a: 0 },
    { q: "Which wine is a White Zinfandel from California?", choices: ["Copper Ridge White Zinfandel","Belle Glos 'Balade' Pinot Noir","DAOU 'Pessimist'","J. Lohr 'Seven Oaks'"], a: 0 },
    { q: "Which wine is a Rosé from France on our list?", choices: ["Fleurs de Prairie Rosé","Bonizio Bianco by Cecchi","Kendall-Jackson Chardonnay","Josh Cellars Cabernet Sauvignon"], a: 0 },

    { q: "Which wine is an Italian Pinot Grigio often considered a premium by-the-glass choice?", choices: ["Santa Margherita Pinot Grigio","Mark West Pinot Noir","Beringer Founders' Estate","Conundrum Red Blend"], a: 0 },
    { q: "Which wine is a Pinot Grigio from Italy (popular label)?", choices: ["Ecco Domani Pinot Grigio","Stag's Leap Artemis","Duckhorn 'Goldeneye' Pinot Noir","The Prisoner Red Blend"], a: 0 },
    { q: "Which wine is a Pinot Grigio from Italy with a short brand label name?", choices: ["Chloe Pinot Grigio","DAOU Cabernet Sauvignon","Bogle Merlot","Riondo Prosecco"], a: 0 },
    { q: "Which wine is the Sauvignon Blanc labeled 'Threadcount'?", choices: ["Quilt 'Threadcount' Sauvignon Blanc","Kim Crawford Sauvignon Blanc","Imagery Sauvignon Blanc","Seven Daughters Moscato"], a: 0 },
    { q: "Which wine is a Sauvignon Blanc from Sonoma on our list?", choices: ["Imagery Sauvignon Blanc","Veuve Clicquot Yellow Label","Allegrini Valpolicella","Rombauer Chardonnay"], a: 0 },

    { q: "Which wine is a Chardonnay from Italy (Antinori family)?", choices: ["Antinori 'Tormaresca'","William Hill Chardonnay","Kendall-Jackson Chardonnay","Rombauer Chardonnay"], a: 0 },
    { q: "Which Chardonnay on our list is a widely known California brand often described as balanced?", choices: ["Kendall-Jackson Chardonnay","Allegrini Valpolicella","Riondo Prosecco","Ruffino Chianti DOCG"], a: 0 },
    { q: "Which Chardonnay is known for a richer style and is usually priced higher?", choices: ["Rombauer Chardonnay","Copper Ridge White Zinfandel","Fleurs de Prairie Rosé","Conundrum Red Blend"], a: 0 },
    { q: "Which Chardonnay is from California and is a classic, clean option?", choices: ["William Hill Chardonnay","Duckhorn 'Goldeneye' Pinot Noir","Cecchi Chianti Classico","DAOU Cabernet Sauvignon"], a: 0 },
    { q: "Which Pinot Noir is typically considered an entry-level California option?", choices: ["Mark West Pinot Noir","Duckhorn 'Decoy' Merlot","Il Borro 'Pian di Nova'","Veuve Clicquot Yellow Label"], a: 0 },

    { q: "Which Pinot Noir on our list is often recognized as fuller and fruit-forward?", choices: ["Meomi Pinot Noir","Chateau Ste. Michelle Riesling","Bonizio Bianco by Cecchi","Josh Cellars Cabernet Sauvignon"], a: 0 },
    { q: "Which Pinot Noir is associated with Anderson Valley and a premium producer?", choices: ["Duckhorn 'Goldeneye' Pinot Noir","Beringer Founders' Estate","Copper Ridge White Zinfandel","Riondo Prosecco"], a: 0 },
    { q: "Which Pinot Noir is a Belle Glos label?", choices: ["Belle Glos 'Balade' Pinot Noir","The Prisoner Red Blend","DAOU 'Pessimist'","Santa Margherita Pinot Grigio"], a: 0 },
    { q: "Which red is a Merlot from California on our list?", choices: ["Bogle Merlot","Allegrini Valpolicella","Ruffino Chianti DOCG","Veuve Clicquot Yellow Label"], a: 0 },
    { q: "Which Merlot is the Duckhorn 'Decoy' label?", choices: ["Duckhorn 'Decoy' Merlot","Orin Swift 'Abstract'","Il Borro 'Pian di Nova'","Kendall-Jackson Chardonnay"], a: 0 },

    { q: "Which red blend is famously known as a bold California blend brand?", choices: ["The Prisoner Red Blend","Chloe Pinot Grigio","Riondo Prosecco","Chateau Ste. Michelle Riesling"], a: 0 },
    { q: "Which red blend is labeled 'Abstract'?", choices: ["Orin Swift 'Abstract' Red Blend","Conundrum Red Blend","Apothic Red Blend","The Prisoner Red Blend"], a: 0 },
    { q: "Which red blend is labeled 'Pessimist'?", choices: ["DAOU 'Pessimist' Red Blend","Conundrum Red Blend","Apothic Red Blend","The Prisoner Red Blend"], a: 0 },
    { q: "Which red blend is a value-focused California brand?", choices: ["Apothic Red Blend","Cecchi Chianti Classico","Allegrini Valpolicella","Il Borro 'Pian di Nova'"], a: 0 },
    { q: "Which red blend name is often recognized as a versatile California blend?", choices: ["Conundrum Red Blend","Riondo Prosecco","Fleurs de Prairie Rosé","Copper Ridge White Zinfandel"], a: 0 },

    { q: "Which Italian red is a Valpolicella from Verona?", choices: ["Allegrini Valpolicella","Coppola Diamond Cabernet Sauvignon","Josh Cellars Cabernet Sauvignon","DAOU Cabernet Sauvignon"], a: 0 },
    { q: "Which Italian red is a Chianti DOCG?", choices: ["Ruffino Chianti DOCG","Bogle Merlot","Rombauer Chardonnay","Kim Crawford Sauvignon Blanc"], a: 0 },
    { q: "Which Italian red is a Chianti Classico?", choices: ["Cecchi Chianti Classico","Conundrum Red Blend","Mark West Pinot Noir","Seven Daughters Moscato"], a: 0 },
    { q: "Which Italian red blend is labeled 'Bonizio Rosso by Cecchi'?", choices: ["Bonizio Rosso by Cecchi","Bonizio Bianco by Cecchi","Il Borro 'Pian di Nova'","Allegrini Valpolicella"], a: 0 },
    { q: "Which Cabernet Sauvignon is a common value brand in many restaurants?", choices: ["Beringer Founders' Estate Cabernet Sauvignon","Stag's Leap Artemis","Caymus Cabernet Sauvignon","Veuve Clicquot Yellow Label"], a: 0 },

    { q: "Which Cabernet Sauvignon is Josh Cellars?", choices: ["Josh Cellars Cabernet Sauvignon","Coppola Diamond Cabernet Sauvignon","J. Lohr 'Seven Oaks' Cabernet Sauvignon","DAOU Cabernet Sauvignon"], a: 0 },
    { q: "Which Cabernet Sauvignon is Coppola Diamond?", choices: ["Coppola Diamond Cabernet Sauvignon","Josh Cellars Cabernet Sauvignon","Beringer Founders' Estate Cabernet Sauvignon","DAOU Cabernet Sauvignon"], a: 0 },
    { q: "Which Cabernet Sauvignon is 'Seven Oaks' from Paso Robles?", choices: ["J. Lohr 'Seven Oaks' Cabernet Sauvignon","Stag's Leap Artemis","Caymus Cabernet Sauvignon","Beringer Founders' Estate Cabernet Sauvignon"], a: 0 },
    { q: "Which Cabernet Sauvignon is a premium Napa bottle named after a Greek goddess?", choices: ["Stag's Leap Artemis","Caymus Cabernet Sauvignon","Josh Cellars Cabernet Sauvignon","Coppola Diamond Cabernet Sauvignon"], a: 0 },
    { q: "Which Cabernet Sauvignon is associated with Paso Robles and a sleek modern brand?", choices: ["DAOU Cabernet Sauvignon","Beringer Founders' Estate Cabernet Sauvignon","Josh Cellars Cabernet Sauvignon","Coppola Diamond Cabernet Sauvignon"], a: 0 },

    { q: "Which wine is an Italian white blend labeled 'Bonizio Bianco by Cecchi'?", choices: ["Bonizio Bianco by Cecchi","Bonizio Rosso by Cecchi","Chloe Pinot Grigio","Ecco Domani Pinot Grigio"], a: 0 },
    { q: "Which of these is a sparkling option (not still wine)?", choices: ["Veuve Clicquot Yellow Label","Meomi Pinot Noir","Bogle Merlot","DAOU Cabernet Sauvignon"], a: 0 },
    { q: "Which of these is most likely served chilled and categorized as rosé?", choices: ["Fleurs de Prairie Rosé","The Prisoner Red Blend","Coppola Diamond Cabernet Sauvignon","Allegrini Valpolicella"], a: 0 },
    { q: "Which option is a Pinot Noir (not a blend or Cabernet)?", choices: ["Meomi Pinot Noir","Apothic Red Blend","Conundrum Red Blend","Josh Cellars Cabernet Sauvignon"], a: 0 },
    { q: "Which option is a Pinot Grigio (not Sauvignon Blanc)?", choices: ["Santa Margherita Pinot Grigio","Kim Crawford Sauvignon Blanc","Imagery Sauvignon Blanc","Quilt 'Threadcount' Sauvignon Blanc"], a: 0 },

    { q: "Which option is a Sauvignon Blanc (not Chardonnay)?", choices: ["Kim Crawford Sauvignon Blanc","Kendall-Jackson Chardonnay","William Hill Chardonnay","Rombauer Chardonnay"], a: 0 },
    { q: "Which option is typically categorized as a sweet wine style?", choices: ["Seven Daughters Moscato","Josh Cellars Cabernet Sauvignon","Allegrini Valpolicella","Duckhorn 'Goldeneye' Pinot Noir"], a: 0 },
    { q: "Which option is clearly an Italian classification you might see on a wine list?", choices: ["Chianti DOCG","Cabernet Sauvignon","Pinot Noir","Sauvignon Blanc"], a: 0 },
    { q: "Which option is a Napa Valley Cabernet Sauvignon in the premium tier?", choices: ["Caymus Cabernet Sauvignon","Beringer Founders' Estate Cabernet Sauvignon","Josh Cellars Cabernet Sauvignon","J. Lohr 'Seven Oaks' Cabernet Sauvignon"], a: 0 },
    { q: "Which option is a bold red blend brand known for strong label recognition?", choices: ["The Prisoner Red Blend","Ecco Domani Pinot Grigio","Chateau Ste. Michelle Riesling","Riondo Prosecco"], a: 0 }
  ];

  // ===== STATE =====
  let order = [];
  let current = 0;
  let answers = [];
  let testName = "";

  // per-question shuffled choice order (stable when navigating back/next)
  const answersMeta = new Array(QUESTIONS.length).fill(null);

  // ===== HELPERS =====
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function show(el){ el.classList.remove("hidden"); }
  function hide(el){ el.classList.add("hidden"); }

  function saveState() {
    localStorage.setItem(KEY, JSON.stringify({ order, current, answers, testName, answersMeta }));
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      if (!data || !Array.isArray(data.order) || data.order.length !== QUESTIONS.length) return false;
      order = data.order;
      current = Number.isFinite(data.current) ? data.current : 0;
      answers = Array.isArray(data.answers) ? data.answers : new Array(QUESTIONS.length).fill(null);
      testName = (data.testName || "").trim();

      // restore meta if present
      if (Array.isArray(data.answersMeta) && data.answersMeta.length === QUESTIONS.length) {
        for (let i = 0; i < QUESTIONS.length; i++) answersMeta[i] = data.answersMeta[i];
      }
      return true;
    } catch {
      return false;
    }
  }

  function clearState() { localStorage.removeItem(KEY); }

  function buildNewTest() {
    order = shuffle([...Array(QUESTIONS.length).keys()]);
    current = 0;
    answers = new Array(QUESTIONS.length).fill(null);
    for (let i = 0; i < QUESTIONS.length; i++) answersMeta[i] = null;
  }

  function ensureChoiceOrder(qIndex) {
    if (answersMeta[qIndex]?.choiceOrder) return answersMeta[qIndex].choiceOrder;
    const idxs = shuffle([...Array(QUESTIONS[qIndex].choices.length).keys()]);
    answersMeta[qIndex] = { choiceOrder: idxs };
    return idxs;
  }

  function getCorrectDisplayedIndex(qIndex) {
    const co = ensureChoiceOrder(qIndex);
    return co.indexOf(QUESTIONS[qIndex].a);
  }

  function render() {
    const qIndex = order[current];
    const q = QUESTIONS[qIndex];

    whoName.textContent = testName || "—";
    progressText.textContent = `${current + 1}/${QUESTIONS.length}`;
    qCount.textContent = `${current + 1} of ${QUESTIONS.length}`;
    questionText.textContent = q.q;

    backBtn.disabled = current === 0;
    nextBtn.classList.toggle("hidden", current === QUESTIONS.length - 1);
    finishBtn.classList.toggle("hidden", current !== QUESTIONS.length - 1);

    optionsForm.innerHTML = "";

    const choiceOrder = ensureChoiceOrder(qIndex);
    const chosenDisplayed = answers[qIndex];

    choiceOrder.forEach((choiceIdx, displayedIdx) => {
      const id = `opt_${qIndex}_${displayedIdx}`;

      const label = document.createElement("label");
      label.className = "opt";
      label.setAttribute("for", id);

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q_${qIndex}`;
      input.id = id;
      input.value = String(displayedIdx);
      input.checked = chosenDisplayed === displayedIdx;

      const span = document.createElement("span");
      span.className = "optText";
      span.textContent = q.choices[choiceIdx];

      input.addEventListener("change", () => {
        answers[qIndex] = displayedIdx; // store displayed index (not raw)
        saveState();
      });

      label.appendChild(input);
      label.appendChild(span);
      optionsForm.appendChild(label);
    });

    saveState();
  }

  function startTestFlow(name) {
    testName = (name || "").trim();
    if (!testName) {
      alert("Please enter your name first.");
      nameInput.focus();
      return;
    }
    if (!order.length) buildNewTest();

    hide(startCard);
    hide(resultsCard);
    show(testCard);
    render();
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function grade() {
    let correct = 0;
    const missed = [];

    for (let pos = 0; pos < order.length; pos++) {
      const qIndex = order[pos];
      const chosenDisplayed = answers[qIndex];
      const correctDisplayed = getCorrectDisplayedIndex(qIndex);

      if (chosenDisplayed === correctDisplayed) {
        correct++;
      } else {
        const q = QUESTIONS[qIndex];
        const co = ensureChoiceOrder(qIndex);

        const chosenText =
          (chosenDisplayed === null || chosenDisplayed === undefined)
            ? "No answer selected"
            : q.choices[co[chosenDisplayed]];

        const correctText = q.choices[q.a];

        missed.push({
          number: pos + 1,
          question: q.q,
          chosen: chosenText,
          correct: correctText
        });
      }
    }

    const total = QUESTIONS.length;
    const pct = Math.round((correct / total) * 100);

    rName.textContent = testName;
    rScore.textContent = `${correct}/${total}`;
    rPct.textContent = `${pct}%`;

    stamp.classList.remove("hidden", "pass", "fail");
    const pass = pct >= PASS_PCT;
    stamp.textContent = pass ? "PASS" : "FAIL";
    stamp.classList.add(pass ? "pass" : "fail");

    missedList.innerHTML = "";
    if (missed.length === 0) {
      const div = document.createElement("div");
      div.className = "missedItem";
      div.innerHTML = `<div class="q">Perfect score 🎉</div><div class="a">No missed questions.</div>`;
      missedList.appendChild(div);
    } else {
      missed.forEach(m => {
        const div = document.createElement("div");
        div.className = "missedItem";
        div.innerHTML = `
          <div class="q">${m.number}. ${escapeHtml(m.question)}</div>
          <div class="a"><strong>Your answer:</strong> ${escapeHtml(m.chosen)}</div>
          <div class="a"><strong>Correct:</strong> ${escapeHtml(m.correct)}</div>
        `;
        missedList.appendChild(div);
      });
    }

    hide(testCard);
    hide(startCard);
    show(resultsCard);
    reviewWrap.open = false;

    saveState();
  }

  function resetAll() {
    clearState();
    order = [];
    current = 0;
    answers = [];
    testName = "";
    for (let i = 0; i < QUESTIONS.length; i++) answersMeta[i] = null;

    nameInput.value = "";
    whoName.textContent = "—";

    hide(testCard);
    hide(resultsCard);
    show(startCard);
  }

  // ===== EVENTS =====
  startBtn.addEventListener("click", () => startTestFlow(nameInput.value));
  resetBtnTop.addEventListener("click", resetAll);

  backBtn.addEventListener("click", () => {
    current = Math.max(0, current - 1);
    saveState();
    render();
  });

  nextBtn.addEventListener("click", () => {
    current = Math.min(QUESTIONS.length - 1, current + 1);
    saveState();
    render();
  });

  finishBtn.addEventListener("click", grade);

  resetBtn.addEventListener("click", resetAll);
  restartBtn.addEventListener("click", resetAll);

  reviewBtn.addEventListener("click", () => {
    reviewWrap.open = true;
    reviewWrap.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      startTestFlow(nameInput.value);
    }
  });

  // ===== BOOT =====
  const loaded = loadState();
  if (loaded && testName) {
    hide(startCard);
    show(testCard);
    render();
  }
})();