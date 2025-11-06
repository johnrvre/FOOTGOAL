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

let currentQuestion = 0;
let timer;
let timeLeft = 10;
let players = [];
let responses = [];

// 🎮 Lancement depuis l'écran d'accueil
document.getElementById("play-btn").addEventListener("click", () => {
    const p1 = document.getElementById("player1").value.trim() || "Joueur 1";
    const p2 = document.getElementById("player2").value.trim() || "Joueur 2";
    players = [p1, p2];

    // cacher l'accueil et afficher le jeu
    document.getElementById("home").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    startGame();
});

function startGame() {
    document.getElementById("results").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    currentQuestion = 0;
    responses = [];
    showQuestion();
    startTimer();
}

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

function startTimer() {
    timeLeft = 10;
    document.getElementById("time").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

function submitAnswer(index) {
    clearInterval(timer);
    const correctIndex = questions[currentQuestion].correct;
    const winnerName = index === correctIndex ? players[0] : players[1];
    document.getElementById("winner").textContent = winnerName;
    document.getElementById("game").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");
}

