// ---------------------
// ⚽ Données du quiz
// ---------------------
const questions = [
    {
        question: "Quel pays a remporté la Coupe du Monde 2018 ?",
        answers: ["Brésil", "France", "Allemagne", "Argentine"],
        correct: 1
    },
    {
        question: "Qui est le meilleur buteur de l'histoire de la Ligue des Champions ?",
        answers: ["Cristiano Ronaldo", "Messi", "Lewandowski", "Benzema"],
        correct: 0
    },
    {
        question: "Quel club a le plus de titres en Premier League ?",
        answers: ["Chelsea", "Liverpool", "Arsenal", "Manchester United"],
        correct: 3
    }
];

// ---------------------
// 🔧 Variables globales
// ---------------------
let currentQuestion = 0;
let timer;
let timeLeft = 10;
let players = [];
let currentPlayerIndex = 0; // Permet de savoir qui joue
let scores = [0, 0];

// ---------------------
// 🏠 Lancer depuis l'accueil
// ---------------------
document.getElementById("play-btn").addEventListener("click", () => {
    const p1 = document.getElementById("player1").value.trim() || "Joueur 1";
    const p2 = document.getElementById("player2").value.trim() || "Joueur 2";
    players = [p1, p2];
    scores = [0, 0];
    currentPlayerIndex = 0;

    document.getElementById("home").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    startGame();
});

// ---------------------
// ▶️ Démarrage du jeu
// ---------------------
function startGame() {
    document.getElementById("results").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    currentQuestion = 0;
    showQuestion();
    startTimer();
}

// ---------------------
// ❓ Afficher une question
// ---------------------
function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = '';

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => submitAnswer(index);
        answersDiv.appendChild(btn);
    });
}

// ---------------------
// ⏱️ Timer de la question
// ---------------------
function startTimer() {
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showResults("Temps écoulé !");
        }
    }, 1000);
}

// ---------------------
// ✅ Validation de la réponse
// ---------------------
function submitAnswer(index) {
    clearInterval(timer);

    const correctIndex = questions[currentQuestion].correct;
    const buttons = document.querySelectorAll("#answers button");

    // Désactiver les clics
    buttons.forEach(b => b.disabled = true);

    // Ajouter classes correct / wrong avec animation
    buttons.forEach((btn, i) => {
        if (i === correctIndex) btn.classList.add("correct");
        else if (i === index) btn.classList.add("wrong");
    });

    // Vérifier la réponse
    if (index === correctIndex) {
        scores[currentPlayerIndex]++;
    }

    // Attendre avant d'afficher le résultat
    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            // Passer à la question suivante
            showQuestion();
            startTimer();
        } else {
            // Fin du quiz
            showResults();
        }
    }, 1200);
}

// ---------------------
// 🏁 Afficher les résultats
// ---------------------
function showResults(message = null) {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");

    let winnerText;

    if (scores[0] > scores[1]) {
        winnerText = `${players[0]} 🏆 (${scores[0]} pts)`;
    } else if (scores[1] > scores[0]) {
        winnerText = `${players[1]} 🏆 (${scores[1]} pts)`;
    } else {
        winnerText = `Égalité ! ${scores[0]} - ${scores[1]}`;
    }

    document.getElementById("winner").textContent = message || winnerText;
}

// ---------------------
// 🔁 Retour à l'accueil
// ---------------------
function goHome() {
    clearInterval(timer);
    document.getElementById("results").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}
