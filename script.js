// -------------------------
// 🎯 VARIABLES GLOBALES
// -------------------------
let players = [];
let scores = [];
let currentPlayerIndex = 0;
let currentQuestion = 0;
let timeLeft = 10;
let timer;
let difficulty = "easy";
let jokerUsed = [];

// -------------------------
// 🎵 SONS
// -------------------------
const sounds = {
    correct: new Audio("https://freesound.org/data/previews/276/276020_5121236-lq.mp3"),
    wrong: new Audio("https://freesound.org/data/previews/331/331912_3248244-lq.mp3"),
    timeout: new Audio("https://freesound.org/data/previews/353/353579_5121236-lq.mp3"),
    click: new Audio("https://freesound.org/data/previews/331/331912_3248244-lq.mp3")
};

// -------------------------
// 🏆 QUESTIONS
// -------------------------
const questions = [
    {
        question: "Quel pays a remporté la Coupe du Monde 2018 ?",
        answers: [
            { img: "https://flagcdn.com/w320/br.png", text: "Brésil" },
            { img: "https://flagcdn.com/w320/fr.png", text: "France" },
            { img: "https://flagcdn.com/w320/de.png", text: "Allemagne" },
            { img: "https://flagcdn.com/w320/ar.png", text: "Argentine" }
        ],
        correct: 1
    },
    {
        question: "Quel club a remporté la Ligue des Champions 2021 ?",
        answers: [
            { img: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg", text: "Chelsea" },
            { img: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg", text: "Man City" },
            { img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", text: "Liverpool" },
            { img: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg", text: "PSG" }
        ],
        correct: 0
    },
    {
        question: "Quel joueur est surnommé 'CR7' ?",
        answers: [
            { img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg", text: "Ronaldo" },
            { img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Neymar_2018.jpg", text: "Neymar" },
            { img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Kylian_Mbappé_2019.jpg", text: "Mbappé" },
            { img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Luis_Suarez_2018.jpg", text: "Suarez" }
        ],
        correct: 0
    },
    {
        question: "Quel club a le plus de titres en Premier League ?",
        answers: [
            { img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", text: "Liverpool" },
            { img: "https://upload.wikimedia.org/wikipedia/en/a/a7/Arsenal_FC.svg", text: "Arsenal" },
            { img: "https://upload.wikimedia.org/wikipedia/en/7/7a/Chelsea_FC.svg", text: "Chelsea" },
            { img: "https://upload.wikimedia.org/wikipedia/en/7/7d/Manchester_United_FC_crest.svg", text: "Manchester United" }
        ],
        correct: 3
    },
    {
        question: "Quel pays a remporté l’Euro 2020 ?",
        answers: [
            { img: "https://flagcdn.com/w320/it.png", text: "Italie" },
            { img: "https://flagcdn.com/w320/eng.png", text: "Angleterre" },
            { img: "https://flagcdn.com/w320/fr.png", text: "France" },
            { img: "https://flagcdn.com/w320/esp.png", text: "Espagne" }
        ],
        correct: 0
    }
];

// -------------------------
// 🔹 GÉRER L'AFFICHAGE DES NOMS DE JOUEURS
// -------------------------
const playerCountSelect = document.getElementById("player-count");
const playerNamesDiv = document.getElementById("player-names");

playerCountSelect.addEventListener("change", () => {
    const count = parseInt(playerCountSelect.value);
    playerNamesDiv.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Nom Joueur ${i + 1}`;
        input.id = `player${i}`;
        playerNamesDiv.appendChild(input);
    }
});

// -------------------------
// 🔹 BOUTON LANCER LE JEU
// -------------------------
document.getElementById("play-btn").addEventListener("click", () => {
    const count = parseInt(playerCountSelect.value);
    players = [];
    scores = Array(count).fill(0);
    jokerUsed = Array(count).fill(false);
    difficulty = document.getElementById("difficulty").value;

    for (let i = 0; i < count; i++) {
        const name = document.getElementById(`player${i}`).value.trim() || `Joueur ${i + 1}`;
        players.push(name);
    }

    currentPlayerIndex = 0;
    currentQuestion = 0;

    document.getElementById("home").classList.add("hidden");
    showTurnTransition();
});

// -------------------------
// 🔹 TRANSITION JOUEUR
// -------------------------
function showTurnTransition() {
    document.getElementById("turn-transition").classList.remove("hidden");
    document.getElementById("game").classList.add("hidden");
    document.getElementById("results").classList.add("hidden");
    document.getElementById("next-player-text").textContent = `C’est au tour de ${players[currentPlayerIndex]} !`;

    setTimeout(() => {
        document.getElementById("turn-transition").classList.add("hidden");
        startGame();
    }, 1500);
}

// -------------------------
// 🔹 LANCER LE JEU
// -------------------------
function startGame() {
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("current-player").textContent = players[currentPlayerIndex];
    updateProgress();
    showQuestion();
    startTimer();
    updateJokerButton();
}

// -------------------------
// 🔹 AFFICHER QUESTION
// -------------------------
function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    // Mélanger réponses
    let shuffledAnswers = q.answers.map((a, i) => ({...a, index: i}));
    shuffledAnswers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(a => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.innerHTML = `<img src="${a.img}" alt="${a.text}"><span>${a.text}</span>`;
        btn.onclick = () => submitAnswer(a.index);
        answersDiv.appendChild(btn);
    });
}

// -------------------------
// 🔹 TIMER
// -------------------------
function startTimer() {
    clearInterval(timer);
    if (difficulty === "easy") timeLeft = 15;
    if (difficulty === "medium") timeLeft = 10;
    if (difficulty === "hard") timeLeft = 7 + Math.floor(Math.random() * 4); // aléatoire 7-10s

    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            sounds.timeout.play();
            submitAnswer(-1);
        }
    }, 1000);
}

// -------------------------
// 🔹 SUBMIT RÉPONSE
// -------------------------
function submitAnswer(index) {
    clearInterval(timer);

    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll("#answers button");

    buttons.forEach(b => b.disabled = true);

    buttons.forEach((btn, i) => {
        if (i === q.correct) btn.classList.add("correct");
        else if (i === index) btn.classList.add("wrong");
    });

    if (index === q.correct) {
        scores[currentPlayerIndex]++;
        sounds.correct.play();
    } else {
        if (index !== -1) sounds.wrong.play();
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion >= questions.length) {
            currentPlayerIndex++;
            currentQuestion = 0;

            if (currentPlayerIndex >= players.length) {
                showResults();
            } else {
                showTurnTransition();
            }
        } else {
            showQuestion();
            startTimer();
        }
    }, 1200);
}

// -------------------------
// 🔹 AFFICHER RÉSULTATS
// -------------------------
function showResults() {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");

    const maxScore = Math.max(...scores);
    const winners = players.filter((p, i) => scores[i] === maxScore);

    document.getElementById("winner").textContent = winners.join(" & ") + ` avec ${maxScore} pts !`;

    const summary = document.getElementById("score-summary");
    summary.innerHTML = "";
    players.forEach((p, i) => {
        const div = document.createElement("div");
        div.textContent = `${p} : ${scores[i]} pts`;
        summary.appendChild(div);
    });
}

// -------------------------
// 🔹 REVENIR À L'ACCUEIL
// -------------------------
document.getElementById("home-btn").addEventListener("click", () => {
    document.getElementById("results").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
});

// -------------------------
// 🔹 REJOUER
// -------------------------
document.getElementById("restart-btn").addEventListener("click", () => {
    currentPlayerIndex = 0;
    currentQuestion = 0;
    scores = Array(players.length).fill(0);
    jokerUsed = Array(players.length).fill(false);
    showTurnTransition();
});

// -------------------------
// 🔹 JOKER 50/50
// -------------------------
const jokerBtn = document.getElementById("joker-btn");
jokerBtn.addEventListener("click", () => {
    if (jokerUsed[currentPlayerIndex]) return;
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll("#answers button");

    let incorrectIndices = [];
    buttons.forEach((b, i) => {
        if (i !== q.correct) incorrectIndices.push(i);
    });

    // Supprimer 2 mauvaises réponses
    incorrectIndices.sort(() => 0.5 - Math.random());
    buttons[incorrectIndices[0]].style.visibility = "hidden";
    buttons[incorrectIndices[1]].style.visibility = "hidden";

    jokerUsed[currentPlayerIndex] = true;
    updateJokerButton();
});

function updateJokerButton() {
    if (jokerUsed[currentPlayerIndex]) {
        jokerBtn.classList.add("used");
    } else {
        jokerBtn.classList.remove("used");
    }
}

// -------------------------
// 🔹 PROGRESSION
// -------------------------
function updateProgress() {
    const progressPercent = ((currentQuestion) / questions.length) * 100;
    document.getElementById("progress-fill").style.width = `${progressPercent}%`;
}

// -------------------------
function goHome() {
    document.getElementById("results").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}
