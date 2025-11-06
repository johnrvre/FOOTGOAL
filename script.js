// -------------------------
// ⚽ QUESTIONS DU QUIZ
// -------------------------
const questions = [
    { question: "Quel pays a remporté la Coupe du Monde 2018 ?", answers: ["Brésil", "France", "Allemagne", "Argentine"], correct: 1 },
    { question: "Qui est le meilleur buteur de l'histoire de la Ligue des Champions ?", answers: ["Cristiano Ronaldo", "Messi", "Lewandowski", "Benzema"], correct: 0 },
    { question: "Quel club a le plus de titres en Premier League ?", answers: ["Chelsea", "Liverpool", "Arsenal", "Manchester United"], correct: 3 },
    { question: "Quel joueur a gagné le Ballon d’Or 2023 ?", answers: ["Mbappé", "Messi", "Haaland", "Modric"], correct: 1 },
    { question: "Quel pays a organisé la Coupe du Monde 2022 ?", answers: ["Qatar", "Russie", "États-Unis", "France"], correct: 0 },
    { question: "Quel club est surnommé 'Les Gunners' ?", answers: ["Arsenal", "Chelsea", "Tottenham", "Manchester City"], correct: 0 },
    { question: "Quel joueur est connu sous le surnom 'CR7' ?", answers: ["Cristiano Ronaldo", "Neymar", "Mbappé", "Suarez"], correct: 0 },
    { question: "Quelle équipe a remporté la Ligue des Champions 2021 ?", answers: ["Chelsea", "Manchester City", "Liverpool", "PSG"], correct: 0 },
    { question: "Combien de joueurs composent une équipe de football ?", answers: ["9", "10", "11", "12"], correct: 2 },
    { question: "Quel club français est surnommé 'Les Phocéens' ?", answers: ["PSG", "Lyon", "Marseille", "Nice"], correct: 2 }
];

// -------------------------
// VARIABLES GLOBALES
// -------------------------
let currentQuestion = 0;
let timer;
let timeLeft = 10;
let players = [];
let scores = [0, 0];
let currentPlayerIndex = 0;

// -------------------------
// ÉCRAN D’ACCUEIL
// -------------------------
document.getElementById("play-btn").addEventListener("click", () => {
    const p1 = document.getElementById("player1").value.trim() || "Joueur 1";
    const p2 = document.getElementById("player2").value.trim() || "Joueur 2";
    players = [p1, p2];
    scores = [0, 0];
    currentPlayerIndex = 0;
    currentQuestion = 0;

    document.getElementById("home").classList.add("hidden");
    showTurnTransition();
});

// -------------------------
// ÉCRAN DE TRANSITION ENTRE JOUEURS
// -------------------------
function showTurnTransition() {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("results").classList.add("hidden");

    const transition = document.getElementById("turn-transition");
    const nextPlayerText = document.getElementById("next-player-text");

    nextPlayerText.textContent = `C’est au tour de ${players[currentPlayerIndex]} ⚽`;
    transition.classList.remove("hidden");

    setTimeout(() => {
        transition.classList.add("hidden");
        startGame();
    }, 1500);
}

// -------------------------
// DÉMARRER LE JEU
// -------------------------
function startGame() {
    document.getElementById("game").classList.remove("hidden");
    showQuestion();
    startTimer();
}

// -------------------------
// AFFICHER QUESTION
// -------------------------
function showQuestion() {
    clearInterval(timer);
    const q = questions[currentQuestion];
    const questionText = document.getElementById("question");
    const answersDiv = document.getElementById("answers");

    questionText.textContent = `(${players[currentPlayerIndex]}) ${q.question}`;
    answersDiv.innerHTML = '';

    updateProgress();

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => submitAnswer(index);
        answersDiv.appendChild(btn);
    });

    startTimer();
}

// -------------------------
// TIMER
// -------------------------
function startTimer() {
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextTurn(false);
        }
    }, 1000);
}

// -------------------------
// VALIDATION DE LA RÉPONSE
// -------------------------
function submitAnswer(index) {
    clearInterval(timer);
    const correctIndex = questions[currentQuestion].correct;
    const buttons = document.querySelectorAll("#answers button");
    buttons.forEach(b => b.disabled = true);

    buttons.forEach((btn, i) => {
        if (i === correctIndex) btn.classList.add("correct");
        else if (i === index) btn.classList.add("wrong");
    });

    const isCorrect = index === correctIndex;
    nextTurn(isCorrect);
}

// -------------------------
// TOUR SUIVANT
// -------------------------
function nextTurn(isCorrect) {
    if (isCorrect) scores[currentPlayerIndex]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        currentPlayerIndex = (currentPlayerIndex + 1) % 2;
        setTimeout(showTurnTransition, 1000);
    } else {
        setTimeout(showResults, 1000);
    }
}

// -------------------------
// RÉSULTATS
// -------------------------
function showResults() {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");

    document.getElementById("score1").textContent = `${players[0]} : ${scores[0]} pts`;
    document.getElementById("score2").textContent = `${players[1]} : ${scores[1]} pts`;

    let winnerText;
    if (scores[0] > scores[1]) winnerText = `${players[0]} 🏆 remporte le quiz !`;
    else if (scores[1] > scores[0]) winnerText = `${players[1]} 🏆 remporte le quiz !`;
    else winnerText = "Égalité parfaite ! ⚖️";

    document.getElementById("winner").textContent = winnerText;
}

// -------------------------
// PROGRESSION
// -------------------------
function updateProgress() {
    const total = questions.length;
    const current = currentQuestion + 1;
    const percent = Math.round((current / total) * 100);
    document.querySelector(".progress-bar").style.setProperty("--progress", percent + "%");
    document.getElementById("progress-text").textContent = `Question ${current} / ${total}`;
}

// -------------------------
// RETOUR À L’ACCUEIL
// -------------------------
function goHome() {
    clearInterval(timer);
    document.getElementById("results").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}
