// =========================
// QUESTIONS
// =========================

const questionsByPlayer = [

  // JOUEUR 1
  [
    {
      question: "Quel pays a remporté la Coupe du Monde 2018 ?",

      answers: [
        {
          img: "https://flagcdn.com/w320/br.png",
          text: "Brésil"
        },
        {
          img: "https://flagcdn.com/w320/fr.png",
          text: "France"
        },
        {
          img: "https://flagcdn.com/w320/de.png",
          text: "Allemagne"
        },
        {
          img: "https://flagcdn.com/w320/ar.png",
          text: "Argentine"
        }
      ],

      correct: 1
    },

    {
      question: "Quel club a remporté la Ligue des Champions 2021 ?",

      answers: [
        { emoji: "🔵", text: "Chelsea" },
        { emoji: "🔷", text: "Manchester City" },
        { emoji: "🔴", text: "Liverpool" },
        { emoji: "🔵🔴", text: "PSG" }
      ],

      correct: 0
    },

    {
      question: "Quel joueur est surnommé CR7 ?",

      answers: [
        { emoji: "🇵🇹", text: "Cristiano Ronaldo" },
        { emoji: "🇧🇷", text: "Neymar" },
        { emoji: "🇫🇷", text: "Kylian Mbappé" },
        { emoji: "🇺🇾", text: "Luis Suárez" }
      ],

      correct: 0
    },

    {
      question: "Quel club anglais possède le plus de titres de Premier League ?",

      answers: [
        { emoji: "🔴", text: "Liverpool" },
        { emoji: "🔴⚪", text: "Arsenal" },
        { emoji: "🔵", text: "Chelsea" },
        { emoji: "🔴⚫", text: "Manchester United" }
      ],

      correct: 3
    },

    {
      question: "Quel joueur a remporté le Ballon d'Or 2022 ?",

      answers: [
        { emoji: "🇫🇷", text: "Karim Benzema" },
        { emoji: "🇫🇷", text: "Kylian Mbappé" },
        { emoji: "🇦🇷", text: "Lionel Messi" },
        { emoji: "🇵🇹", text: "Cristiano Ronaldo" }
      ],

      correct: 0
    }
  ],


  // JOUEUR 2
  [
    {
      question: "Quel pays a remporté l'Euro 2020 ?",

      answers: [
        {
          img: "https://flagcdn.com/w320/it.png",
          text: "Italie"
        },

        {
          img: "https://flagcdn.com/w320/gb-eng.png",
          text: "Angleterre"
        },

        {
          img: "https://flagcdn.com/w320/fr.png",
          text: "France"
        },

        {
          img: "https://flagcdn.com/w320/es.png",
          text: "Espagne"
        }
      ],

      correct: 0
    },

    {
      question: "Qui est le meilleur buteur de l'histoire du PSG ?",

      answers: [
        { emoji: "🇫🇷", text: "Kylian Mbappé" },
        { emoji: "🇸🇪", text: "Zlatan Ibrahimović" },
        { emoji: "🇧🇷", text: "Neymar" },
        { emoji: "🇺🇾", text: "Edinson Cavani" }
      ],

      correct: 0
    },

    {
      question: "Quel club a remporté la Ligue Europa 2021 ?",

      answers: [
        { emoji: "🇪🇸", text: "Villarreal" },
        { emoji: "🏴", text: "Manchester United" },
        { emoji: "🇪🇸", text: "Séville" },
        { emoji: "🏴", text: "Arsenal" }
      ],

      correct: 0
    },

    {
      question: "Quel joueur est surnommé La Pulga ?",

      answers: [
        { emoji: "🇦🇷", text: "Lionel Messi" },
        { emoji: "🇫🇷", text: "Kylian Mbappé" },
        { emoji: "🇧🇷", text: "Neymar" },
        { emoji: "🇵🇹", text: "Cristiano Ronaldo" }
      ],

      correct: 0
    },

    {
      question: "Quel club est surnommé les Red Devils ?",

      answers: [
        { emoji: "🔴", text: "Manchester United" },
        { emoji: "🔵", text: "Chelsea" },
        { emoji: "🔴", text: "Liverpool" },
        { emoji: "🔴⚪", text: "Arsenal" }
      ],

      correct: 0
    }
  ],


  // JOUEUR 3
  [
    {
      question: "Qui a marqué le but de la victoire en finale de la Coupe du Monde 2014 ?",

      answers: [
        { emoji: "🇩🇪", text: "Mario Götze" },
        { emoji: "🇩🇪", text: "Thomas Müller" },
        { emoji: "🇦🇷", text: "Lionel Messi" },
        { emoji: "🇩🇪", text: "Toni Kroos" }
      ],

      correct: 0
    },

    {
      question: "Quel club a remporté la Copa Libertadores 2021 ?",

      answers: [
        { emoji: "🇧🇷", text: "Palmeiras" },
        { emoji: "🇧🇷", text: "Flamengo" },
        { emoji: "🇦🇷", text: "River Plate" },
        { emoji: "🇦🇷", text: "Boca Juniors" }
      ],

      correct: 0
    },

    {
      question: "Quel joueur argentin est surnommé La Pulga ?",

      answers: [
        { emoji: "🇦🇷", text: "Lionel Messi" },
        { emoji: "🇦🇷", text: "Di María" },
        { emoji: "🇦🇷", text: "Agüero" },
        { emoji: "🇦🇷", text: "Dybala" }
      ],

      correct: 0
    },

    {
      question: "Quel joueur égyptien est une star de Liverpool ?",

      answers: [
        { emoji: "🇪🇬", text: "Mohamed Salah" },
        { emoji: "🇸🇳", text: "Sadio Mané" },
        { emoji: "🇧🇷", text: "Firmino" },
        { emoji: "🇵🇹", text: "Diogo Jota" }
      ],

      correct: 0
    },

    {
      question: "Quelle sélection a remporté la Ligue des Nations 2021 ?",

      answers: [
        { emoji: "🇫🇷", text: "France" },
        { emoji: "🇪🇸", text: "Espagne" },
        { emoji: "🇮🇹", text: "Italie" },
        { emoji: "🇧🇪", text: "Belgique" }
      ],

      correct: 0
    }
  ],


  // JOUEUR 4
  [
    {
      question: "Quel club a remporté la Serie A en 2021 ?",

      answers: [
        { emoji: "🔵⚫", text: "Inter Milan" },
        { emoji: "⚪⚫", text: "Juventus" },
        { emoji: "🔴⚫", text: "AC Milan" },
        { emoji: "🔵", text: "Napoli" }
      ],

      correct: 0
    },

    {
      question: "Quel joueur brésilien est connu pour jouer ailier gauche au Real Madrid ?",

      answers: [
        { emoji: "🇧🇷", text: "Vinícius Jr." },
        { emoji: "🇧🇷", text: "Neymar" },
        { emoji: "🇧🇷", text: "Thiago Silva" },
        { emoji: "🇧🇷", text: "Alisson" }
      ],

      correct: 0
    },

    {
      question: "Quel club a remporté la Bundesliga en 2021 ?",

      answers: [
        { emoji: "🔴⚪", text: "Bayern Munich" },
        { emoji: "🟡⚫", text: "Dortmund" },
        { emoji: "🔴⚪", text: "RB Leipzig" },
        { emoji: "🔵⚪", text: "Schalke" }
      ],

      correct: 0
    },

    {
      question: "Quel joueur français a remporté le Ballon d'Or 2022 ?",

      answers: [
        { emoji: "🇫🇷", text: "Karim Benzema" },
        { emoji: "🇫🇷", text: "Kylian Mbappé" },
        { emoji: "🇫🇷", text: "Antoine Griezmann" },
        { emoji: "🇫🇷", text: "Paul Pogba" }
      ],

      correct: 0
    },

    {
      question: "Quel surnom désigne l'équipe nationale espagnole ?",

      answers: [
        { emoji: "🇪🇸", text: "La Roja" },
        { emoji: "🇪🇸", text: "La Pulga" },
        { emoji: "🇪🇸", text: "Los Blancos" },
        { emoji: "🇪🇸", text: "La Furia Azul" }
      ],

      correct: 0
    }
  ]
];


// =========================
// VARIABLES
// =========================

let players = [];
let scores = [];

let currentPlayerIndex = 0;
let currentQuestion = 0;

let timer = null;

let timeLeft = 10;

let answerLocked = false;


// =========================
// ÉLÉMENTS HTML
// =========================

const homeSection =
  document.getElementById("home");

const transitionSection =
  document.getElementById("turn-transition");

const gameSection =
  document.getElementById("game");

const resultsSection =
  document.getElementById("results");

const playerCountSelect =
  document.getElementById("player-count");

const playerNamesDiv =
  document.getElementById("player-names");

const playButton =
  document.getElementById("play-btn");

const restartButton =
  document.getElementById("restart-btn");

const homeButton =
  document.getElementById("home-btn");

const questionElement =
  document.getElementById("question");

const answersElement =
  document.getElementById("answers");

const timerElement =
  document.getElementById("time");

const progressText =
  document.getElementById("progress-text");

const progressFill =
  document.getElementById("progress-fill");


// =========================
// CRÉER LES JOUEURS
// =========================

function createPlayerInputs() {

  const count =
    Number(playerCountSelect.value);

  playerNamesDiv.innerHTML = "";

  for (
    let i = 0;
    i < count;
    i++
  ) {

    const input =
      document.createElement("input");

    input.type = "text";

    input.id =
      `player-${i}`;

    input.placeholder =
      `Nom du joueur ${i + 1}`;

    input.maxLength = 15;

    playerNamesDiv.appendChild(input);
  }
}


// =========================
// LANCER LE QUIZ
// =========================

function launchQuiz() {

  clearTimer();

  const count =
    Number(playerCountSelect.value);

  players = [];

  scores =
    new Array(count).fill(0);

  for (
    let i = 0;
    i < count;
    i++
  ) {

    const input =
      document.getElementById(
        `player-${i}`
      );

    let name =
      input.value.trim();

    if (!name) {

      name =
        `Joueur ${i + 1}`;
    }

    players.push(name);
  }

  currentPlayerIndex = 0;

  currentQuestion = 0;

  answerLocked = false;

  hideAllSections();

  showTurnTransition();
}


// =========================
// TRANSITION JOUEUR
// =========================

function showTurnTransition() {

  clearTimer();

  hideAllSections();

  transitionSection.classList.remove(
    "hidden"
  );

  const nextPlayerText =
    document.getElementById(
      "next-player-text"
    );

  nextPlayerText.textContent =
    `⚽ C’est au tour de ${players[currentPlayerIndex]} !`;

  setTimeout(() => {

    transitionSection.classList.add(
      "hidden"
    );

    showGame();

  }, 1500);
}


// =========================
// AFFICHER LE JEU
// =========================

function showGame() {

  gameSection.classList.remove(
    "hidden"
  );

  showQuestion();
}


// =========================
// AFFICHER QUESTION
// =========================

function showQuestion() {

  clearTimer();

  answerLocked = false;

  const playerQuestions =
    questionsByPlayer[currentPlayerIndex];

  const question =
    playerQuestions[currentQuestion];

  if (!question) {

    finishPlayerTurn();

    return;
  }

  questionElement.textContent =
    question.question;

  progressText.textContent =
    `Question ${currentQuestion + 1} / ${playerQuestions.length}`;

  const progress =
    ((currentQuestion + 1) /
      playerQuestions.length) * 100;

  progressFill.style.width =
    `${progress}%`;

  answersElement.innerHTML = "";

  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");

      button.className =
        "answer-btn";

      if (answer.img) {

        const img =
          document.createElement("img");

        img.src = answer.img;

        img.alt = answer.text;

        img.onerror = function () {

          this.style.display =
            "none";
        };

        button.appendChild(img);
      }

      if (answer.emoji) {

        const emoji =
          document.createElement("div");

        emoji.textContent =
          answer.emoji;

        emoji.style.fontSize =
          "45px";

        emoji.style.marginBottom =
          "10px";

        button.appendChild(emoji);
      }

      const text =
        document.createElement("span");

      text.textContent =
        answer.text;

      button.appendChild(text);

      button.addEventListener(
        "click",
        () => {
          submitAnswer(index);
        }
      );

      answersElement.appendChild(
        button
      );
    }
  );

  startTimer();
}


// =========================
// TIMER
// =========================

function startTimer() {

  clearTimer();

  timeLeft = 10;

  timerElement.textContent =
    timeLeft;

  timer = setInterval(() => {

    timeLeft--;

    timerElement.textContent =
      timeLeft;

    if (timeLeft <= 0) {

      clearTimer();

      submitAnswer(-1);
    }

  }, 1000);
}


function clearTimer() {

  if (timer !== null) {

    clearInterval(timer);

    timer = null;
  }
}


// =========================
// RÉPONSE
// =========================

function submitAnswer(index) {

  if (answerLocked) {
    return;
  }

  answerLocked = true;

  clearTimer();

  const question =
    questionsByPlayer
      [currentPlayerIndex]
      [currentQuestion];

  const buttons =
    answersElement.querySelectorAll(
      ".answer-btn"
    );

  buttons.forEach(
    (button, buttonIndex) => {

      button.disabled = true;

      if (
        buttonIndex ===
        question.correct
      ) {

        button.classList.add(
          "correct"
        );
      }

      if (
        buttonIndex === index &&
        index !== question.correct
      ) {

        button.classList.add(
          "wrong"
        );
      }
    }
  );

  if (
    index ===
    question.correct
  ) {

    scores[currentPlayerIndex]++;
  }

  setTimeout(() => {

    currentQuestion++;

    const playerQuestions =
      questionsByPlayer[
        currentPlayerIndex
      ];

    if (
      currentQuestion >=
      playerQuestions.length
    ) {

      finishPlayerTurn();

    } else {

      showQuestion();
    }

  }, 1200);
}


// =========================
// FIN DU TOUR
// =========================

function finishPlayerTurn() {

  clearTimer();

  currentPlayerIndex++;

  currentQuestion = 0;

  if (
    currentPlayerIndex >=
    players.length
  ) {

    showResults();

  } else {

    showTurnTransition();
  }
}


// =========================
// RÉSULTATS
// =========================

function showResults() {

  clearTimer();

  hideAllSections();

  resultsSection.classList.remove(
    "hidden"
  );

  const maxScore =
    Math.max(...scores);

  const winners =
    players.filter(
      (player, index) =>
        scores[index] === maxScore
    );

  const winnerElement =
    document.getElementById(
      "winner"
    );

  if (winners.length === 1) {

    winnerElement.textContent =
      `${winners[0]} gagne avec ${maxScore}/5 !`;

  } else {

    winnerElement.textContent =
      `Égalité entre ${winners.join(
        " et "
      )} avec ${maxScore}/5 !`;
  }

  const summary =
    document.getElementById(
      "score-summary"
    );

  summary.innerHTML = "";

  players.forEach(
    (player, index) => {

      const line =
        document.createElement("div");

      line.className =
        "score-line";

      line.textContent =
        `${player} : ${scores[index]} / 5`;

      summary.appendChild(line);
    }
  );
}


// =========================
// REJOUER
// =========================

function restartGame() {

  clearTimer();

  scores =
    new Array(players.length).fill(0);

  currentPlayerIndex = 0;

  currentQuestion = 0;

  answerLocked = false;

  hideAllSections();

  showTurnTransition();
}


// =========================
// RETOUR ACCUEIL
// =========================

function goHome() {

  clearTimer();

  players = [];

  scores = [];

  currentPlayerIndex = 0;

  currentQuestion = 0;

  answerLocked = false;

  hideAllSections();

  homeSection.classList.remove(
    "hidden"
  );

  createPlayerInputs();
}


// =========================
// CACHER LES ÉCRANS
// =========================

function hideAllSections() {

  homeSection.classList.add(
    "hidden"
  );

  transitionSection.classList.add(
    "hidden"
  );

  gameSection.classList.add(
    "hidden"
  );

  resultsSection.classList.add(
    "hidden"
  );
}


// =========================
// ÉVÉNEMENTS
// =========================

playerCountSelect.addEventListener(
  "change",
  createPlayerInputs
);

playButton.addEventListener(
  "click",
  launchQuiz
);

restartButton.addEventListener(
  "click",
  restartGame
);

homeButton.addEventListener(
  "click",
  goHome
);


// =========================
// INITIALISATION
// =========================

createPlayerInputs();
