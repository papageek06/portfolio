// Récupérer les éléments nécessaires
const montantHTInput = document.getElementById("montantHT");
const montantTTCInput = document.getElementById("montantTTC");
const tauxTVAInput = document.getElementById("tauxTVA");
const montantTVAInput = document.getElementById("montantTVA");
const buttonTVA = document.querySelectorAll('input[name="appliqueTauxTVA"]');

// Variable pour stocker le taux de TVA sélectionné
let tauxTVA = parseFloat(tauxTVAInput.value) / 100;

// Gestion des clics sur les boutons de taux de TVA
buttonTVA.forEach(button => {
    button.addEventListener("click", () => {
        // Récupérer le taux cliqué et le mettre à jour
        tauxTVA = parseFloat(button.value) / 100;
        tauxTVAInput.value = button.value; // Mettre à jour visuellement le champ

        console.log("Taux TVA sélectionné : " + tauxTVA * 100 + "%");

        // Recalcul immédiat si un montant HT est déjà saisi
        if (montantHTInput.value) {
            calculTVA();
        }
    });
});

// Fonction de calcul de la TVA
function calculTVA() {
    const montantHT = parseFloat(montantHTInput.value); // Récupérer le montant HT
    if (!isNaN(montantHT) && !isNaN(tauxTVA)) {
        // Calculer la TVA et le montant TTC
        const montantTVA = montantHT * tauxTVA;
        const montantTTC = montantHT + montantTVA;

        // Afficher les résultats
        montantTVAInput.value = montantTVA.toFixed(2); // TVA arrondie à 2 décimales
        montantTTCInput.value = montantTTC.toFixed(2); // TTC arrondi à 2 décimales

        console.log(`Montant TVA : ${montantTVA}, Montant TTC : ${montantTTC}`);
    } else {
        // Effacer les résultats si les entrées sont invalides
        montantTVAInput.value = "";
        montantTTCInput.value = "";
    }
}

function calculHT() {
    const montantTTC = parseFloat(montantTTCInput.value); // Récupérer le montant TTC
    if (!isNaN(montantTTC) && !isNaN(tauxTVA)) {
        // Calculer la TVA et le montant HT
        const montantHT = montantTTC / (1+tauxTVA);
        const montantTVA =    montantTTC - montantHT;

        // Afficher les résultats
        montantTVAInput.value = montantTVA.toFixed(2); // TVA arrondie à 2 décimales
        montantHTInput.value = montantHT.toFixed(2); // TTC arrondi à 2 décimales

        console.log(`Montant TVA : ${montantTVA}, Montant HT : ${montantHT}`);
    } else {
        // Effacer les résultats si les entrées sont invalides
        montantTVAInput.value = "";
        montantHTInput.value = "";
    }
}


// Ajouter un événement pour détecter la saisie dans le champ montant HT
montantHTInput.addEventListener("keyup", calculTVA);
montantTTCInput.addEventListener("keyup" , calculHT);


buttonTVA.forEach(button => {
    button.addEventListener("click" , () =>{
    tauxTVA = parseFloat(button.value) /100 ;
    inputTauxTVA.value = button.value;
    })
})
