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
        console.log("'" + mot + "' est un palindrome.");
    } else {
        console.log("'" + mot + "' n'est pas un palindrome.");
    }
} else {
    // Message d'erreur si aucun mot n'a été entré
    console.log("Aucun mot n'a été entré.");
}
