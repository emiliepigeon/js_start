// EXO 2 en version simple

// Demande à l'utilisateur d'entrer un mot
let mot = prompt("Entrez un mot :");

// Chaîne contenant toutes les voyelles à rechercher
let voyelles = "aeiouy";

// Initialisation du compteur de voyelles
let compteur_voyelles = 0;

// Vérification si l'utilisateur a bien entré un mot
if (mot) {
    // Boucle pour parcourir chaque lettre du mot
    for (let i = 0; i < mot.length; i++) {
        // Récupération de la lettre courante et conversion en minuscule
        let lettre = mot[i].toLowerCase();
        
        // Vérification si la lettre est une voyelle
        if (voyelles.includes(lettre)) {
            // Incrémentation du compteur si c'est une voyelle
            compteur_voyelles++;
        }
    }

    // Affichage du résultat dans la console
    console.log("Le mot '" + mot + "' contient " + compteur_voyelles + " voyelle(s).");
} else {
    // Message d'erreur si aucun mot n'a été entré
    console.log("Aucun mot n'a été entré.");
}

