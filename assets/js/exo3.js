// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer l'élément pour afficher le résultat
    const resultElement = document.getElementById('result');

    // Fonction pour exécuter le script avec un léger délai
    setTimeout(function() {
        // Demande à l'utilisateur d'entrer un mot
        let mot = prompt("Entrez un mot :");

        // Initialisation de la variable pour stocker le mot inversé
        let mot_inverse = "";

        // Vérification si l'utilisateur a bien entré un mot
        if (mot) {
            // Conversion du mot en minuscules pour ignorer la casse
            mot = mot.toLowerCase();

            // Boucle pour inverser le mot
            for (let i = mot.length - 1; i >= 0; i--) {
                mot_inverse += mot[i];
            }

            // Vérification si le mot est un palindrome
            if (mot === mot_inverse) {
                // Affichage du résultat sur la page si c'est un palindrome
                resultElement.textContent = "'" + mot + "' est un palindrome.";
                resultElement.style.color = "green"; // Changer la couleur du texte en vert
            } else {
                // Affichage du résultat sur la page si ce n'est pas un palindrome
                resultElement.textContent = "'" + mot + "' n'est pas un palindrome.";
                resultElement.style.color = "red"; // Changer la couleur du texte en rouge
            }
        } else {
            // Message d'erreur si aucun mot n'a été entré
            resultElement.textContent = "Aucun mot n'a été entré.";
            resultElement.style.color = "orange"; // Changer la couleur du texte en orange pour indiquer une erreur
        }
    }, 100); // Délai de 100 ms pour permettre le chargement de la page
});
