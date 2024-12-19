// VERSION SIMPLE

// Demande à l'utilisateur d'entrer un nombre et le convertit en entier
// let nombre = parseInt(prompt("Entrez un nombre :"));
// variable > nombre ATTRIBUTION 
// Vérifie si le nombre est pair ou impair
// if (nombre % 2 === 0) {
    // Si le reste de la division par 2 est 0, le nombre est pair
    // console.log("Pair");
// } else {
    // Sinon, le nombre est impair
    // console.log("Impair");
// }


// Avec interaction avec le DOM => bouton de lancement => pop up de saisie utilisateur
// => bouton de validation => affichage du résultat dans le DOM 
// et bouton de relance du script pour laisser l'utilisateur saisir un nouveau nombre.
// Écouteur d'événements qui attend que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupère le bouton pour démarrer le script par son ID
    const startButton = document.getElementById('startButton');
    // Récupère le bouton pour recharger la page par son ID
    const reloadButton = document.getElementById('reloadButton');
    // Récupère l'élément où le résultat sera affiché par son ID
    const resultElement = document.getElementById('result');

    // Ajoute un écouteur d'événements au bouton de démarrage
    startButton.addEventListener('click', function() {
        // Demande à l'utilisateur d'entrer un nombre via une boîte de dialogue
        let nombre = parseInt(prompt("Entrez un nombre :"));

        // Vérifie si l'entrée est un nombre valide
        if (isNaN(nombre)) {
            // Affiche un message d'erreur si l'entrée n'est pas un nombre
            resultElement.textContent = "Veuillez entrer un nombre valide.";
        } else if (nombre % 2 === 0) {
            // Vérifie si le nombre est pair et affiche "Pair"
            resultElement.textContent = "Pair";
            resultElement.style.color = "blue"; // Changer la couleur du texte en bleu
        } else {
            // Si le nombre est impair, affiche "Impair"
            resultElement.textContent = "Impair";
            resultElement.style.color = "red"; // Changer la couleur du texte en orange pour indiquer une erreur
        }
    });

    // Ajoute un écouteur d'événements au bouton de rechargement
    reloadButton.addEventListener('click', function() {
        // Recharge la page actuelle, réinitialisant ainsi l'état
        location.reload();
    });
});
