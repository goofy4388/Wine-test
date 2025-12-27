// Wine Knowledge Test (50 Questions) — Easy/Moderate — 80% passing
(() => {
  "use strict";

  // ========= QUESTIONS =========
  // Note: These are designed to be easy-to-moderate and align to common wine knowledge
  // (grape, country/region, style, basic tasting notes, pairing).
  // You can swap/adjust any question text later without breaking functionality.
  const QUESTIONS = [
    { q: "Cabernet Sauvignon is most commonly known as a:", choices: ["Light-bodied white wine", "Full-bodied red wine", "Sparkling wine", "Sweet dessert wine"], a: 1 },
    { q: "Pinot Grigio is typically:", choices: ["A white wine", "A red wine", "A fortified wine", "A sparkling-only wine"], a: 0 },
    { q: "Prosecco is usually produced in:", choices: ["France", "Italy", "Spain", "United States"], a: 1 },
    { q: "Champagne must come from which country?", choices: ["Italy", "Spain", "France", "Germany"], a: 2 },
    { q: "Sauvignon Blanc is often described as:", choices: ["Crisp and zesty", "Heavy and tannic", "Sweet and syrupy", "Smoky and oaky by default"], a: 0 },

    { q: "Merlot is generally considered:", choices: ["A red grape/wine", "A white grape/wine", "A sparkling-only grape", "A non-grape fruit wine"], a: 0 },
    { q: "Pinot Noir is often:", choices: ["Very dark and extremely tannic", "Light to medium-bodied red", "A white wine", "Always sweet"], a: 1 },
    { q: "Chardonnay is most commonly:", choices: ["A white wine", "A red wine", "A rosé only", "A dessert wine only"], a: 0 },
    { q: "Riesling is often associated with:", choices: ["Germany", "Argentina", "South Africa", "Chile"], a: 0 },
    { q: "Rosé is typically made from:", choices: ["Only white grapes", "Only red grapes with short skin contact", "Only apples", "Only fortified spirits"], a: 1 },

    { q: "Which is a common Italian red region/wine style?", choices: ["Valpolicella", "Napa Valley", "Marlborough", "Mosel"], a: 0 },
    { q: "Chianti is a famous wine from:", choices: ["Tuscany, Italy", "Burgundy, France", "Rioja, Spain", "Sonoma, USA"], a: 0 },
    { q: "Moscato is typically:", choices: ["Very dry and tannic", "Sweet or off-dry and aromatic", "Always sparkling only", "A red blend"], a: 1 },
    { q: "Which grape is commonly associated with Rioja?", choices: ["Tempranillo", "Sangiovese", "Pinot Noir", "Sauvignon Blanc"], a: 0 },
    { q: "A 'red blend' means:", choices: ["Blended with soda", "Mixed red and white in the glass", "Made from multiple red grape varieties", "Aged only 1 day"], a: 2 },

    { q: "What do tannins usually feel like?", choices: ["Bubbly sensation", "Drying/grippy mouthfeel", "Salty taste", "Spicy heat"], a: 1 },
    { q: "Which wine is commonly described as 'buttery' when oaked?", choices: ["Chardonnay", "Pinot Grigio", "Riesling", "Prosecco"], a: 0 },
    { q: "A wine labeled 'Brut' is usually:", choices: ["Sweet", "Dry", "Red", "Fortified"], a: 1 },
    { q: "Sparkling wine bubbles are from:", choices: ["Tannins", "Carbon dioxide", "Sugar crystals", "Oak barrels"], a: 1 },
    { q: "Which is a common food pairing for Cabernet Sauvignon?", choices: ["Steak", "Lemon sorbet", "Very spicy curry only", "Cotton candy"], a: 0 },

    { q: "Sauvignon Blanc pairs well with:", choices: ["Seafood or salads", "Only chocolate cake", "Only burgers", "Only ice cream"], a: 0 },
    { q: "Pinot Noir often pairs well with:", choices: ["Heavier than steak-only", "Chicken, salmon, or lighter meats", "Only spicy wings", "Only dessert"], a: 1 },
    { q: "Merlot is often considered:", choices: ["Soft and approachable", "Extremely acidic and fizzy", "Always sweet sparkling", "A fortified spirit"], a: 0 },
    { q: "Which is a common California wine region?", choices: ["Napa Valley", "Tuscany", "Champagne", "Mosel"], a: 0 },
    { q: "Which is commonly a sparkling wine from Italy?", choices: ["Prosecco", "Rioja", "Chianti", "Cabernet Sauvignon"], a: 0 },

    { q: "Which is typically a 'white zinfandel'?", choices: ["A sweet-ish rosé style", "A heavy red-only wine", "A fortified wine", "A brandy"], a: 0 },
    { q: "Pinot Grigio is often described as:", choices: ["Light and crisp", "Heavy and tannic", "Always sweet", "Always oaky"], a: 0 },
    { q: "Riesling can range from:", choices: ["Only sweet", "Only dry", "Dry to sweet", "Only red"], a: 2 },
    { q: "A wine’s 'body' refers to:", choices: ["Bottle shape", "Weight/feel in the mouth", "Sugar only", "Color only"], a: 1 },
    { q: "Which wine is commonly served chilled?", choices: ["White wine", "Red wine only", "Only fortified wine", "Only dessert wine"], a: 0 },

    { q: "Caymus is most commonly known as a:", choices: ["Cabernet Sauvignon", "Pinot Grigio", "Prosecco", "Riesling"], a: 0 },
    { q: "Sangiovese is strongly associated with:", choices: ["Italy (Tuscany/Chianti)", "New Zealand", "Germany", "South Africa"], a: 0 },
    { q: "Tempranillo is strongly associated with:", choices: ["Spain", "France", "Italy", "Australia"], a: 0 },
    { q: "Pinot Noir is strongly associated with Burgundy in:", choices: ["France", "Spain", "Greece", "Portugal"], a: 0 },
    { q: "Sauvignon Blanc is strongly associated with Marlborough in:", choices: ["New Zealand", "Italy", "USA only", "Germany"], a: 0 },

    { q: "A wine described as 'oaked' often has notes like:", choices: ["Vanilla/toast", "Lemon zest only", "Sea salt only", "Mint gum only"], a: 0 },
    { q: "A wine described as 'unoaked' is often:", choices: ["More fruit-forward and crisp", "Always sweet", "Always sparkling", "Always red blend"], a: 0 },
    { q: "Which one is usually a red wine?", choices: ["Cabernet Sauvignon", "Pinot Grigio", "Prosecco", "Moscato"], a: 0 },
    { q: "Which one is usually a white wine?", choices: ["Sauvignon Blanc", "Merlot", "Pinot Noir", "Red blend"], a: 0 },
    { q: "Which is often considered a lighter red wine?", choices: ["Pinot Noir", "Cabernet Sauvignon", "Syrah (usually)", "Very oaky Malbec (usually)"], a: 0 },

    { q: "Which wine style is typically sweet and bubbly?", choices: ["Moscato (sparkling)", "Cabernet Sauvignon", "Chianti", "Tempranillo reserva"], a: 0 },
    { q: "Which wine is commonly described as 'zesty'?", choices: ["Sauvignon Blanc", "Merlot", "Cabernet Sauvignon", "Red blend"], a: 0 },
    { q: "A 'split' bottle is commonly:", choices: ["Smaller than a standard bottle", "Bigger than a magnum", "Not a bottle size", "Only for red wine"], a: 0 },
    { q: "Which pair is both typically Italian wines?", choices: ["Chianti & Prosecco", "Champagne & Rioja", "Napa & Mosel", "Burgundy & Marlborough"], a: 0 },
    { q: "Which is typically a rosé wine brand/style you might see?", choices: ["Rosé Provence style", "Valpolicella Amarone only", "Cabernet Reserve only", "Brut Champagne only"], a: 0 },

    { q: "White wines are generally higher in:", choices: ["Acidity (often)", "Tannins (always)", "Smoke flavor by default", "Carbonation always"], a: 0 },
    { q: "Red wines generally get tannins from:", choices: ["Grape skins", "Ice", "Sugar", "Water"], a: 0 },
    { q: "Sparkling wines are commonly served in:", choices: ["Flute or tulip glass", "Coffee mug", "Shot glass", "Soup bowl"], a: 0 },
    { q: "A dry wine means it has:", choices: ["Less residual sugar", "More bubbles", "More salt", "More alcohol always"], a: 0 },
    { q: "If a guest wants something 'smooth and easy' in reds, a common pick is:", choices: ["Merlot", "Very tannic young Cab", "Extra-brut Champagne", "High acid Riesling"], a: 0 },
  ];

  const PASS_PERCENT = 80;

  // ========= DOM =========
  const el = (id) => document.getElementById(id);

  const introScreen = el("introScreen");
  const quizScreen = el("quizScreen");
  const resultsScreen = el("resultsScreen");

  const testerName = el("testerName");
  const startTestBtn = el("startTestBtn");
  const introError = el("introError");

  const namePill = el("namePill");
  const quizTitle = el("quizTitle");
  const progressText = el("progressText");
  const questionText = el("questionText");
  const answersBox = el("answersBox");
  const quizError = el("quizError");
  const prevBtn = el("prevBtn");
  const nextBtn = el("nextBtn");

  const resultName = el("resultName");
  const resultScore = el("resultScore");
  const resultPercent = el("resultPercent");
  const passStamp = el("passStamp");
  const reviewBtn = el("reviewBtn");
  const restartBtn = el("restartBtn");
  const reviewWrap = el("reviewWrap");
  const hideReviewBtn = el("hideReviewBtn");
  const reviewList = el("reviewList");

  // ========= STATE =========
  let currentIndex = 0;
  let name = "";
  let answers = new Array(QUESTIONS.length).fill(null);

  // ========= HELPERS =========
  function showOnly(screen) {
    [introScreen, quizScreen, resultsScreen].forEach(s => s.classList.add("hidden"));
    screen.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function sanitizeName(str) {
    return (str || "").trim().replace(/\s+/g, " ");
  }

  function renderQuestion(i) {
    quizError.textContent = "";

    const total = QUESTIONS.length;
    const qObj = QUESTIONS[i];

    quizTitle.textContent = `Question ${i + 1}`;
    progressText.textContent = `${i + 1} of ${total}`;
    questionText.textContent = qObj.q;

    answersBox.innerHTML = "";

    qObj.choices.forEach((choiceText, idx) => {
      const choice = document.createElement("label");
      choice.className = "choice";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = String(idx);
      input.checked = answers[i] === idx;

      const span = document.createElement("div");
      span.className = "choiceText";
      span.textContent = choiceText;

      choice.appendChild(input);
      choice.appendChild(span);

      choice.addEventListener("click", () => {
        answers[i] = idx;
        // Update checked states
        [...answersBox.querySelectorAll("input")].forEach(r => (r.checked = false));
        input.checked = true;
      });

      answersBox.appendChild(choice);
    });

    prevBtn.disabled = i === 0;
    nextBtn.textContent = (i === total - 1) ? "Finish ✅" : "Next →";
  }

  function computeScore() {
    let correct = 0;
    for (let i = 0; i < QUESTIONS.length; i++) {
      if (answers[i] === QUESTIONS[i].a) correct++;
    }
    const percent = Math.round((correct / QUESTIONS.length) * 100);
    return { correct, percent };
  }

  function showResults() {
    const { correct, percent } = computeScore();
    const total = QUESTIONS.length;

    resultName.textContent = name;
    resultScore.textContent = `${correct} / ${total}`;
    resultPercent.textContent = `${percent}%`;

    const passed = percent >= PASS_PERCENT;
    passStamp.textContent = passed ? "PASS" : "FAIL";
    passStamp.classList.toggle("fail", !passed);

    showOnly(resultsScreen);
  }

  function buildReview() {
    reviewList.innerHTML = "";

    for (let i = 0; i < QUESTIONS.length; i++) {
      const qObj = QUESTIONS[i];
      const user = answers[i];
      const correctIndex = qObj.a;

      const item = document.createElement("div");
      item.className = "reviewItem";

      const title = document.createElement("div");
      title.innerHTML = `<b>Q${i + 1}.</b> ${qObj.q}`;

      const userLine = document.createElement("div");
      userLine.className = "reviewMeta";
      userLine.textContent = `Your answer: ${user === null ? "— (no answer)" : qObj.choices[user]}`;

      const correctLine = document.createElement("div");
      correctLine.className = "reviewMeta";
      correctLine.textContent = `Correct answer: ${qObj.choices[correctIndex]}`;

      const status = document.createElement("div");
      status.className = "reviewMeta";
      const ok = user === correctIndex;
      status.textContent = ok ? "✅ Correct" : "❌ Incorrect";

      item.appendChild(title);
      item.appendChild(userLine);
      item.appendChild(correctLine);
      item.appendChild(status);

      reviewList.appendChild(item);
    }
  }

  function requireAnswerBeforeNext() {
    if (answers[currentIndex] === null) {
      quizError.textContent = "Please select an answer to continue.";
      return false;
    }
    return true;
  }

  // ========= EVENTS =========
  startTestBtn.addEventListener("click", () => {
    introError.textContent = "";
    name = sanitizeName(testerName.value);

    if (!name) {
      introError.textContent = "Please enter your name to begin.";
      testerName.focus();
      return;
    }

    // Reset state
    currentIndex = 0;
    answers = new Array(QUESTIONS.length).fill(null);

    namePill.textContent = name;

    showOnly(quizScreen);
    renderQuestion(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    quizError.textContent = "";
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion(currentIndex);
    }
  });

  nextBtn.addEventListener("click", () => {
    quizError.textContent = "";

    // Require answer before proceeding/finishing
    if (!requireAnswerBeforeNext()) return;

    if (currentIndex < QUESTIONS.length - 1) {
      currentIndex++;
      renderQuestion(currentIndex);
    } else {
      showResults();
    }
  });

  reviewBtn.addEventListener("click", () => {
    buildReview();
    reviewWrap.classList.remove("hidden");
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });

  hideReviewBtn.addEventListener("click", () => {
    reviewWrap.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  restartBtn.addEventListener("click", () => {
    testerName.value = "";
    introError.textContent = "";
    quizError.textContent = "";
    reviewWrap.classList.add("hidden");
    showOnly(introScreen);
  });

})();
