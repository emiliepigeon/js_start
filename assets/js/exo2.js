// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer l'élément pour afficher le résultat
    const resultElement = document.getElementById('result');

    // Demander le mot avec un délai minimal pour permettre l'affichage de la page
    setTimeout(function() {
        let mot = prompt("Entrez un mot :"); // Demander le mot à l'utilisateur
        let voyelles = "aeiouy"; // Liste des voyelles
        let compteur_voyelles = 0; // compteur commence à 0

        if (mot) { // Si le mot n'est pas vide
            for (let i = 0; i < mot.length; i++) { // Boucle sur chaque caractère du mot
                let lettre = mot[i].toLowerCase(); // Convertir la lettre en minuscule
                if (voyelles.includes(lettre)) { // Si la lettre est une voyelle
                    compteur_voyelles++; // Incrémente le compteur
                }
            }
            resultElement.textContent = "Le mot '" + mot + "' contient " + compteur_voyelles + " voyelle(s).";
            resultElement.style.color = "green"; // Changer la couleur du texte en vert 
            // Afficher le résultat
        } else { // Si le mot est vide
            resultElement.textContent = "Aucun mot n'a été entré.";
            // Afficher un message d'erreur
            resultElement.style.color = "orange"; 
            // Changer la couleur du texte en orange
        }
    }, 100); // Délai minimal de 100 ms
});
