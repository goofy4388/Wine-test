(() => {
  const PASSING_PCT = 80; // 80% to pass
  const REVIEW_MODE_AFTER_FINISH = false; // keep FALSE to never show correct answers

  // ============ DOM IDs expected in your HTML ============
  // startBtn, nameInput
  // qSection, qNum, qText, choicesWrap, backBtn, nextBtn
  // resultsSection, rName, rScore, rPct, stamp, restartBtn
  // If your IDs differ, rename them here.
  const el = (id) => document.getElementById(id);

  const startBtn = el("startBtn");
  const nameInput = el("nameInput");

  const qSection = el("qSection");
  const qNum = el("qNum");
  const qText = el("qText");
  const choicesWrap = el("choicesWrap");
  const backBtn = el("backBtn");
  const nextBtn = el("nextBtn");

  const resultsSection = el("resultsSection");
  const rName = el("rName");
  const rScore = el("rScore");
  const rPct = el("rPct");
  const stamp = el("stamp");
  const restartBtn = el("restartBtn");

  // ============ Wine data (from your list) ============
  // NOTE: This is used only to build harder questions.
  const WINES = [
    { n: "Caymus Cabernet Sauvignon (Napa Valley)", t: "Red", g: "Cabernet Sauvignon", r: "Napa Valley, California", c: "USA" },
    { n: "Stag's Leap Artemis Cabernet Sauvignon", t: "Red", g: "Cabernet Sauvignon", r: "Napa Valley, California", c: "USA" },
    { n: "J. Lohr 'Seven Oaks' Cabernet Sauvignon", t: "Red", g: "Cabernet Sauvignon", r: "Paso Robles, California", c: "USA" },
    { n: "DAOU Cabernet Sauvignon", t: "Red", g: "Cabernet Sauvignon", r: "Paso Robles, California", c: "USA" },
    { n: "Josh Cellars Cabernet Sauvignon", t: "Red", g: "Cabernet Sauvignon", r: "California", c: "USA" },
    { n: "Beringer Founders' Estate Cabernet Sauvignon", t: "Red", g: "Cabernet Sauvignon", r: "California", c: "USA" },
    { n: "Coppola Diamond Cabernet Sauvignon", t: "Red", g: "Cabernet Sauvignon", r: "California", c: "USA" },

    { n: "Bogle Merlot", t: "Red", g: "Merlot", r: "California", c: "USA" },
    { n: "Duckhorn 'Decoy' Merlot", t: "Red", g: "Merlot", r: "Sonoma County, California", c: "USA" },

    { n: "The Prisoner Red Blend", t: "Red", g: "Red Blend", r: "California", c: "USA" },
    { n: "Orin Swift 'Abstract' Red Blend", t: "Red", g: "Red Blend", r: "California", c: "USA" },
    { n: "DAOU 'Pessimist' Red Blend", t: "Red", g: "Red Blend", r: "California", c: "USA" },
    { n: "Apothic Red Blend", t: "Red", g: "Red Blend", r: "California", c: "USA" },
    { n: "Conundrum Red Blend", t: "Red", g: "Red Blend", r: "California", c: "USA" },

    { n: "Mark West Pinot Noir", t: "Red", g: "Pinot Noir", r: "California", c: "USA" },
    { n: "Meiomi Pinot Noir", t: "Red", g: "Pinot Noir", r: "California", c: "USA" },
    { n: "Belle Glos 'Balade' Pinot Noir", t: "Red", g: "Pinot Noir", r: "California", c: "USA" },
    { n: "Duckhorn 'Goldeneye' Pinot Noir", t: "Red", g: "Pinot Noir", r: "California", c: "USA" },

    { n: "Riondo Prosecco", t: "Sparkling", g: "Prosecco (Glera)", r: "Italy", c: "Italy" },
    { n: "LaMarca Prosecco Rosé", t: "Sparkling", g: "Prosecco Rosé", r: "Italy", c: "Italy" },
    { n: "Veuve Clicquot Yellow Label Brut", t: "Sparkling", g: "Champagne Blend", r: "France", c: "France" },

    { n: "Seven Daughters Moscato", t: "White", g: "Moscato", r: "Italy", c: "Italy" },
    { n: "Copper Ridge White Zinfandel", t: "Rosé", g: "White Zinfandel", r: "California", c: "USA" },
    { n: "Chateau Ste. Michelle Riesling", t: "White", g: "Riesling", r: "Washington", c: "USA" },
    { n: "Fleurs de Prairie Rosé", t: "Rosé", g: "Rosé Blend", r: "France", c: "France" },

    { n: "Ecco Domani Pinot Grigio", t: "White", g: "Pinot Grigio", r: "Italy", c: "Italy" },
    { n: "Chloe Pinot Grigio", t: "White", g: "Pinot Grigio", r: "Italy", c: "Italy" },
    { n: "Santa Margherita Pinot Grigio", t: "White", g: "Pinot Grigio", r: "Italy", c: "Italy" },
    { n: "Bonizio Bianco by Cecchi", t: "White", g: "Italian White Blend", r: "Tuscany, Italy", c: "Italy" },

    { n: "Imagery Sauvignon Blanc", t: "White", g: "Sauvignon Blanc", r: "Sonoma, California", c: "USA" },
    { n: "Quilt 'Threadcount' Sauvignon Blanc", t: "White", g: "Sauvignon Blanc", r: "California", c: "USA" },
    { n: "Kim Crawford Sauvignon Blanc", t: "White", g: "Sauvignon Blanc", r: "New Zealand", c: "New Zealand" },

    { n: "Antinori 'Tormaresca' (Chardonnay)", t: "White", g: "Chardonnay", r: "Italy", c: "Italy" },
    { n: "William Hill Chardonnay", t: "White", g: "Chardonnay", r: "California", c: "USA" },
    { n: "Kendall-Jackson Chardonnay", t: "White", g: "Chardonnay", r: "California", c: "USA" },
    { n: "Rombauer Chardonnay", t: "White", g: "Chardonnay", r: "California", c: "USA" },

    { n: "Allegrini Valpolicella", t: "Red", g: "Valpolicella Blend", r: "Verona, Italy", c: "Italy" },
    { n: "Ruffino Chianti DOCG", t: "Red", g: "Sangiovese (Chianti)", r: "Tuscany, Italy", c: "Italy" },
    { n: "Cecchi Chianti Classico", t: "Red", g: "Sangiovese (Chianti Classico)", r: "Tuscany, Italy", c: "Italy" },
    { n: "Bonizio Rosso by Cecchi", t: "Red", g: "Italian Red Blend", r: "Italy", c: "Italy" },
    { n: "Il Borro 'Pian di Nova' (Super Tuscan)", t: "Red", g: "Super Tuscan Blend", r: "Tuscany, Italy", c: "Italy" },
  ];

  // ============ Helper utilities ============
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const unique = (arr) => [...new Set(arr)];

  const byGrape = (g) => WINES.filter((w) => w.g === g);
  const byCountry = (c) => WINES.filter((w) => w.c === c);
  const byType = (t) => WINES.filter((w) => w.t === t);

  // ============ HARDER QUESTION GENERATORS ============
  // IMPORTANT: Question text never contains the correct answer.
  // Choices are full statements/pairings so user must KNOW.
  function qCorrectPairing() {
    // Choose a wine, then ask which pairing is correct (wine -> grape OR wine -> region OR wine -> type)
    const w = pick(WINES);
    const mode = pick(["grape", "region", "type"]);

    const correct =
      mode === "grape"
        ? `${w.n} — ${w.g}`
        : mode === "region"
        ? `${w.n} — ${w.r}`
        : `${w.n} — ${w.t}`;

    // Build wrong options by mixing other wines’ attributes
    const wrongs = unique(
      shuffle(WINES)
        .filter((x) => x.n !== w.n)
        .slice(0, 8)
        .map((x) => {
          if (mode === "grape") return `${w.n} — ${x.g}`;
          if (mode === "region") return `${w.n} — ${x.r}`;
          return `${w.n} — ${x.t}`;
        })
    ).filter((x) => x !== correct);

    const options = shuffle([correct, ...wrongs.slice(0, 3)]);
    const prompt =
      mode === "grape"
        ? "Which pairing is correct?"
        : mode === "region"
        ? "Which pairing is correct?"
        : "Which pairing is correct?";

    return { prompt, stem: `Select the correct match for the wine shown:`, context: w.n, options, answer: correct };
  }

  function qOddOneOut() {
    // 3 share same grape/type/country; 1 is different
    const mode = pick(["grape", "type", "country"]);

    let group = [];
    let odd = null;

    if (mode === "country") {
      // Choose a country with >= 3 wines
      const candidateCountries = unique(WINES.map((w) => w.c)).filter((c) => byCountry(c).length >= 3);
      const c = pick(candidateCountries);
      group = shuffle(byCountry(c)).slice(0, 3);

      // odd from different country
      odd = pick(WINES.filter((w) => w.c !== c));
    } else if (mode === "type") {
      const candidateTypes = unique(WINES.map((w) => w.t)).filter((t) => byType(t).length >= 3);
      const t = pick(candidateTypes);
      group = shuffle(byType(t)).slice(0, 3);
      odd = pick(WINES.filter((w) => w.t !== t));
    } else {
      const candidateGrapes = unique(WINES.map((w) => w.g)).filter((g) => byGrape(g).length >= 3);
      const g = pick(candidateGrapes);
      group = shuffle(byGrape(g)).slice(0, 3);
      odd = pick(WINES.filter((w) => w.g !== g));
    }

    const options = shuffle([...group.map((w) => w.n), odd.n]);
    return {
      prompt: "Which option does NOT belong with the other three?",
      stem: "Choose the odd one out.",
      context: "",
      options,
      answer: odd.n
    };
  }

  function qCategoryCheck() {
    // Ask: Which list contains ONLY wines from X category (harder because it’s a set)
    const mode = pick(["ItalyOnly", "SparklingOnly", "CabernetOnly", "PinotGrigioOnly"]);
    let correctSet = [];
    let wrongSet1 = [];
    let wrongSet2 = [];
    let wrongSet3 = [];
    let prompt = "Which set is correct?";
    let stem = "";

    if (mode === "ItalyOnly") {
      stem = "Pick the set that contains ONLY wines from Italy.";
      correctSet = shuffle(byCountry("Italy")).slice(0, 3).map((w) => w.n);
      wrongSet1 = [correctSet[0], correctSet[1], pick(WINES.filter((w) => w.c !== "Italy")).n];
      wrongSet2 = [correctSet[0], pick(WINES.filter((w) => w.c !== "Italy")).n, pick(WINES.filter((w) => w.c !== "Italy")).n];
      wrongSet3 = [correctSet[2], pick(WINES.filter((w) => w.c !== "Italy")).n, correctSet[0]];
    } else if (mode === "SparklingOnly") {
      stem = "Pick the set that contains ONLY sparkling wines.";
      correctSet = shuffle(byType("Sparkling")).slice(0, 3).map((w) => w.n);
      wrongSet1 = [correctSet[0], correctSet[1], pick(WINES.filter((w) => w.t !== "Sparkling")).n];
      wrongSet2 = [correctSet[0], pick(WINES.filter((w) => w.t !== "Sparkling")).n, pick(WINES.filter((w) => w.t !== "Sparkling")).n];
      wrongSet3 = [correctSet[2], pick(WINES.filter((w) => w.t !== "Sparkling")).n, correctSet[0]];
    } else if (mode === "CabernetOnly") {
      stem = "Pick the set that contains ONLY Cabernet Sauvignon wines.";
      const cabs = WINES.filter((w) => w.g === "Cabernet Sauvignon");
      correctSet = shuffle(cabs).slice(0, 3).map((w) => w.n);
      wrongSet1 = [correctSet[0], correctSet[1], pick(WINES.filter((w) => w.g !== "Cabernet Sauvignon")).n];
      wrongSet2 = [correctSet[0], pick(WINES.filter((w) => w.g !== "Cabernet Sauvignon")).n, pick(WINES.filter((w) => w.g !== "Cabernet Sauvignon")).n];
      wrongSet3 = [correctSet[2], pick(WINES.filter((w) => w.g !== "Cabernet Sauvignon")).n, correctSet[0]];
    } else {
      stem = "Pick the set that contains ONLY Pinot Grigio wines.";
      const pgs = WINES.filter((w) => w.g === "Pinot Grigio");
      correctSet = shuffle(pgs).slice(0, 3).map((w) => w.n);
      wrongSet1 = [correctSet[0], correctSet[1], pick(WINES.filter((w) => w.g !== "Pinot Grigio")).n];
      wrongSet2 = [correctSet[0], pick(WINES.filter((w) => w.g !== "Pinot Grigio")).n, pick(WINES.filter((w) => w.g !== "Pinot Grigio")).n];
      wrongSet3 = [correctSet[2], pick(WINES.filter((w) => w.g !== "Pinot Grigio")).n, correctSet[0]];
    }

    const packs = shuffle([correctSet, wrongSet1, wrongSet2, wrongSet3]).map((set) => set.join(" • "));
    const answer = correctSet.join(" • ");

    return { prompt, stem, context: "", options: packs, answer };
  }

  function buildQuestions50() {
    const qs = [];
    while (qs.length < 50) {
      const gen = pick([qCorrectPairing, qOddOneOut, qCategoryCheck]);
      const q = gen();

      // Ensure 4 options and unique options
      q.options = unique(q.options).slice(0, 4);
      if (q.options.length < 4) continue;

      // Answer must be in options
      if (!q.options.includes(q.answer)) continue;

      qs.push(q);
    }
    return qs;
  }

  const QUESTIONS = buildQuestions50();

  // ============ STATE ============
  const KEY = "wine_test_v3";
  const loadState = () => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  };
  const saveState = () => localStorage.setItem(KEY, JSON.stringify(state));

  let state = loadState() || {
    name: "",
    idx: 0,
    answers: {}, // { [i]: optionString }
    started: false,
    finished: false
  };

  // ============ RENDER ============
  function show(section) {
    if (qSection) qSection.style.display = section === "quiz" ? "block" : "none";
    if (resultsSection) resultsSection.style.display = section === "results" ? "block" : "none";
  }

  function renderQuestion() {
    const i = state.idx;
    const q = QUESTIONS[i];

    if (qNum) qNum.textContent = `${i + 1} / ${QUESTIONS.length}`;
    if (qText) {
      // HARDER: question text does not contain answer
      // We optionally show a context line (wine name) for pairing questions
      const ctx = q.context ? `<div class="qContext">${escapeHTML(q.context)}</div>` : "";
      qText.innerHTML = `
        <div class="qPrompt">${escapeHTML(q.prompt)}</div>
        <div class="qStem">${escapeHTML(q.stem || "")}</div>
        ${ctx}
      `;
    }

    // Choices as radio list
    if (choicesWrap) {
      choicesWrap.innerHTML = "";
      const selected = state.answers[i] || "";

      q.options.forEach((opt, idx) => {
        const id = `opt_${i}_${idx}`;
        const row = document.createElement("label");
        row.className = "choiceRow";
        row.setAttribute("for", id);
        row.innerHTML = `
          <input type="radio" name="q${i}" id="${id}" value="${escapeAttr(opt)}" ${selected === opt ? "checked" : ""}/>
          <span class="choiceText">${escapeHTML(opt)}</span>
        `;
        row.addEventListener("click", () => {
          state.answers[i] = opt;
          saveState();
          refreshNavButtons();
        });
        choicesWrap.appendChild(row);
      });
    }

    refreshNavButtons();
  }

  function refreshNavButtons() {
    const i = state.idx;
    const answered = !!state.answers[i];

    if (backBtn) backBtn.disabled = i === 0;
    if (nextBtn) {
      // require answer before next
      nextBtn.disabled = !answered;
      nextBtn.textContent = i === QUESTIONS.length - 1 ? "Finish" : "Next →";
    }
  }

  function scoreTest() {
    let correct = 0;
    for (let i = 0; i < QUESTIONS.length; i++) {
      if (state.answers[i] && state.answers[i] === QUESTIONS[i].answer) correct++;
    }
    const pct = Math.round((correct / QUESTIONS.length) * 100);
    return { correct, pct };
  }

  function renderResults() {
    const { correct, pct } = scoreTest();
    if (rName) rName.textContent = state.name || "—";
    if (rScore) rScore.textContent = `${correct} / ${QUESTIONS.length}`;
    if (rPct) rPct.textContent = `${pct}%`;

    const passed = pct >= PASSING_PCT;
    if (stamp) stamp.textContent = passed ? "PASS ✅" : "FAIL ❌";

    // Never show answers unless you explicitly allow it
    if (REVIEW_MODE_AFTER_FINISH) {
      // optional: could render a review section (not included by default)
    }
  }

  function startTest() {
    const nm = (nameInput?.value || "").trim();
    if (!nm) {
      alert("Please enter your name.");
      return;
    }
    state.name = nm;
    state.started = true;
    state.finished = false;
    state.idx = 0;
    saveState();
    show("quiz");
    renderQuestion();
  }

  function next() {
    const i = state.idx;
    if (!state.answers[i]) return;

    if (i === QUESTIONS.length - 1) {
      // finish
      state.finished = true;
      saveState();
      show("results");
      renderResults();
      return;
    }
    state.idx++;
    saveState();
    renderQuestion();
  }

  function back() {
    if (state.idx === 0) return;
    state.idx--;
    saveState();
    renderQuestion();
  }

  function restart() {
    if (!confirm("Restart the test? This will clear answers.")) return;
    state = { name: "", idx: 0, answers: {}, started: false, finished: false };
    localStorage.removeItem(KEY);
    if (nameInput) nameInput.value = "";
    show("quiz");
    if (qSection) qSection.style.display = "none";
    if (resultsSection) resultsSection.style.display = "none";
  }

  // ============ ESCAPE HELPERS ============
  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
  }
  function escapeAttr(s) {
    return String(s).replace(/"/g, "&quot;");
  }

  // ============ WIRE UP ============
  if (startBtn) startBtn.addEventListener("click", startTest);
  if (nextBtn) nextBtn.addEventListener("click", next);
  if (backBtn) backBtn.addEventListener("click", back);
  if (restartBtn) restartBtn.addEventListener("click", restart);

  // ============ BOOT ============
  // If they were mid-test, resume
  if (state.started && !state.finished) {
    show("quiz");
    renderQuestion();
  } else if (state.finished) {
    show("results");
    renderResults();
  } else {
    // initial
    if (qSection) qSection.style.display = "none";
    if (resultsSection) resultsSection.style.display = "none";
  }
})();