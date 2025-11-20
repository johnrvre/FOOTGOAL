// -------------------------
// QUESTIONS AVEC IMAGES
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
    }
    // Tu peux ajouter d'autres questions ici
];

// -------------------------
// VARIABLES GLOBALES
// -------------------------
let players = [];
let scores = [];
let currentPlayerIndex = 0;
let currentQuestion = 0;
let timer;
let timeLeft = 10;

// -------------------------
// GÉRER L'AFFICHAGE DES NOMS DE JOUEURS
// -------------------------
const playerCountSelect = document.getElementById("player-count");
const playerNamesDiv = document.getElementById("player-names");

// Fonction pour créer les champs noms des joueurs
function createPlayerInputs() {
    const count = parseInt(playerCountSelect.value);
    playerNamesDiv.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Nom Joueur ${i + 1}`;
        input.id = `player${i}`;
        playerNamesDiv.appendChild(input);
    }
}

// Générer les inputs au chargement
createPlayerInputs();

// Générer les inputs quand le nombre de joueurs change
playerCountSelect.addEventListener("change", createPlayerInputs);

// -------------------------
// BOUTON LANCER LE JEU
// -------------------------
document.getElementById("play-btn").addEventListener("click", () => {
    const count = parseInt(playerCountSelect.value);
    players = [];
    scores = Array(count).fill(0);
    for (let i = 0; i < count; i++) {
        const input = document.getElementById(`player${i}`);
        const name = input ? input.value.trim() : `Joueur ${i + 1}`;
        players.push(name || `Joueur ${i + 1}`);
    }
    currentPlayerIndex = 0;
    currentQuestion = 0;
    document.getElementById("home").classList.add("hidden");
    showTurnTransition();
});

// -------------------------
// AFFICHER TRANSITION JOUEUR
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
// LANCER LE JEU
// -------------------------
function startGame() {
    document.getElementById("game").classList.remove("hidden");
    showQuestion();
    startTimer();
}

// -------------------------
// AFFICHER LA QUESTION
// -------------------------
function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    document.getElementById("progress-text").textContent = `Question ${currentQuestion + 1} / ${questions.length}`;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    q.answers.forEach((a, index) => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.innerHTML = `<img src="${a.img}" alt="${a.text}"><span>${a.text}</span>`;
        btn.onclick = () => submitAnswer(index);
        answersDiv.appendChild(btn);
    });
}

// -------------------------
// TIMER
// -------------------------
function startTimer() {
    timeLeft = 10;
    document.getElementById("time").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitAnswer(-1); // pas de réponse
        }
    }, 1000);
}

// -------------------------
// SUBMIT RÉPONSE
// -------------------------
function submitAnswer(index) {
    clearInterval(timer);
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll("#answers button");
    buttons.forEach(b => b.disabled = true);

    // Marquer correct/wrong
    buttons.forEach((btn, i) => {
        if (i === q.correct) btn.classList.add("correct");
        else if (i === index) btn.classList.add("wrong");
    });

    // Mise à jour score
    if (index === q.correct) scores[currentPlayerIndex]++;

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion >= questions.length) {
            // Prochain joueur ou fin
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
// AFFICHER RÉSULTATS
// -------------------------
function showResults() {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");

    // Déterminer gagnant(s)
    const maxScore = Math.max(...scores);
    const winners = players.filter((p, i) => scores[i] === maxScore);
    document.getElementById("winner").textContent = winners.join(" & ") + ` avec ${maxScore} points !`;

    // Afficher résumé
    const summary = document.getElementById("score-summary");
    summary.innerHTML = "";
    players.forEach((p, i) => {
        const div = document.createElement("div");
        div.textContent = `${p} : ${scores[i]} pts`;
        summary.appendChild(div);
    });
}

// -------------------------
// REVENIR À L'ACCUEIL
// -------------------------
function goHome() {
    document.getElementById("results").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
    createPlayerInputs(); // réinitialiser les inputs
}
