// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer l'élément pour afficher le résultat
    const resultElement = document.getElementById('result');

    // Demander à l'utilisateur d'entrer un nombre avec un délai minimal pour permettre l'affichage de la page
    setTimeout(function() {
        let nombre = prompt("Entrez un nombre :"); // Demander le nombre à l'utilisateur

        if (nombre) { // Si le nombre n'est pas vide
            nombre = Number(nombre); // Convertir la chaîne en nombre

            let resultat = ""; // Initialiser une chaîne pour stocker les résultats

            // Boucle pour multiplier le nombre par i allant de 1 à 10
            for (let i = 1; i <= 10; i++) {
                resultat += nombre + " x " + i + " = " + (nombre * i) + "<br>"; // Calculer et formater le résultat
            }

            resultElement.innerHTML = resultat; // Afficher tous les résultats dans l'élément HTML
            resultElement.style.color = "green"; // Changer la couleur du texte en vert 
        } else { // Si le nombre est vide
            resultElement.textContent = "Aucun nombre n'a été entré."; // Afficher un message d'erreur
            resultElement.style.color = "orange"; // Changer la couleur du texte en orange
        }
    }, 100); // Délai minimal de 100 ms
});
