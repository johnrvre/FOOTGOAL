// -------------------------
// ⚽ QUESTIONS AVEC IMAGES
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
    },
    {
        question: "Quel joueur a remporté le Ballon d'Or 2021 ?",
        answers: [
            { img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Neymar_2018.jpg", text: "Neymar" },
            { img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Kylian_Mbappé_2019.jpg", text: "Mbappé" },
            { img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg", text: "Ronaldo" },
            { img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Lionel_Messi_2018.jpg", text: "Messi" }
        ],
        correct: 3
    },
    {
        question: "Quel club est surnommé 'Les Blaugranas' ?",
        answers: [
            { img: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg", text: "FC Barcelone" },
            { img: "https://upload.wikimedia.org/wikipedia/en/0/01/Real_Madrid_CF.svg", text: "Real Madrid" },
            { img: "https://upload.wikimedia.org/wikipedia/en/f/fc/Bayern_Munich_logo.svg", text: "Bayern Munich" },
            { img: "https://upload.wikimedia.org/wikipedia/en/c/c2/Juventus_FC_2017_logo.svg", text: "Juventus" }
        ],
        correct: 0
    },
    {
        question: "Quel club est basé à Manchester et joue en bleu ?",
        answers: [
            { img: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg", text: "Man City" },
            { img: "https://upload.wikimedia.org/wikipedia/en/7/7d/Manchester_United_FC_crest.svg", text: "Man United" },
            { img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", text: "Liverpool" },
            { img: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg", text: "PSG" }
        ],
        correct: 0
    },
    {
        question: "Quel joueur est surnommé 'La Pulga' ?",
        answers: [
            { img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Lionel_Messi_2018.jpg", text: "Messi" },
            { img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg", text: "Ronaldo" },
            { img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Neymar_2018.jpg", text: "Neymar" },
            { img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Kylian_Mbappé_2019.jpg", text: "Mbappé" }
        ],
        correct: 0
    },
    {
        question: "Quel pays a remporté la Coupe du Monde 2014 ?",
        answers: [
            { img: "https://flagcdn.com/w320/de.png", text: "Allemagne" },
            { img: "https://flagcdn.com/w320/ar.png", text: "Argentine" },
            { img: "https://flagcdn.com/w320/br.png", text: "Brésil" },
            { img: "https://flagcdn.com/w320/fr.png", text: "France" }
        ],
        correct: 0
    }
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
// BOUTON LANCER LE JEU
// -------------------------
document.getElementById("play-btn").addEventListener("click", () => {
    const count = parseInt(playerCountSelect.value);
    players = [];
    scores = Array(count).fill(0);
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
    document.getElementById("home
