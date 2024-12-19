// Version 1 sans fonction ni interaction avec le DOM 
// Demander à l'utilisateur d'entrer un mot
// let mot = prompt("Entrez un mot :");
// // Initialiser une variable pour stocker le mot inversé
// let mot_inverse = "";
// // Vérifier si l'utilisateur a bien entré un mot
// if (mot) {
//     // Convertir le mot en minuscules pour ignorer la casse
//     mot = mot.toLowerCase();
//     // Boucle pour inverser le mot
//     for (let i = mot.length - 1; i >= 0; i--) {
//         // Ajouter chaque caractère à la variable mot_inverse
//         mot_inverse += mot[i];
//     }
//     // Vérifier si le mot est un palindrome
//     if (mot === mot_inverse) {
//         // Afficher que c'est un palindrome
//         console.log("'" + mot + "' est un palindrome.");
//     } else {
//         // Afficher que ce n'est pas un palindrome
//         console.log("'" + mot + "' n'est pas un palindrome.");
//     }
// } else {
//     // Afficher un message d'erreur si aucun mot n'a été entré
//     console.log("Aucun mot n'a été entré.");
// }


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
            // Convertir le mot en minuscules pour ignorer la casse lors des comparaisons
            // Boucle pour inverser le mot
                // Boucle pour parcourir le mot à l'envers, en commençant par le dernier caractère
                    // 'mot.length - 1' donne l'index du dernier caractère du mot
                    // La boucle continue tant que 'i' est supérieur ou égal à 0, ce qui permet d'inclure le premier caractère
                    // 'i--' décrémente 'i' à chaque itération, ce qui permet de passer au caractère précédent
            for (let i = mot.length - 1; i >= 0; i--) {  // Instructions à l'intérieur de la boucle
                mot_inverse += mot[i]; // Ajouter chaque caractère à la variable mot_inverse
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
