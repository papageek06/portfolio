// Sélection des éléments DOM
const choices = document.querySelectorAll(".choice");
const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");

// Variables pour le score
let playerScore = 0;
let computerScore = 0;

// Options possibles
const options = ["rock", "paper", "scissors"];

// Fonction pour obtenir le choix aléatoire de l'ordinateur
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Fonction pour déterminer le gagnant
function getWinner(player, computer) {
    if (player === computer) {
        return "égalité";
    }
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "joueur";
    }
    return "ordinateur";
}

// Fonction principale : gérer le jeu
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    // Mettre à jour les icônes affichées
    playerResult.innerHTML = `<i class="fas fa-hand-${playerChoice}"></i>`;
    computerResult.innerHTML = `<i class="fas fa-hand-${computerChoice}"></i>`;

    // Déterminer le résultat
    const winner = getWinner(playerChoice, computerChoice);

    // Mettre à jour le message
    if (winner === "égalité") {
        message.textContent = "C'est une égalité ! 🤝";
    } else if (winner === "joueur") {
        message.textContent = "Tu gagnes ! 🎉";
        playerScore++;
    } else {
        message.textContent = "L'ordinateur gagne ! 💻";
        computerScore++;
    }

    // Mettre à jour le score
    scoreDisplay.textContent = `Score : Joueur ${playerScore} - ${computerScore} Ordinateur`;
}

// Écoute des choix du joueur
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.getAttribute("data-choice");
        playGame(playerChoice);
    });
});
