// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer l'élément pour afficher le résultat
    const resultElement = document.getElementById('result');

    // Demander le mot avec un délai minimal pour permettre l'affichage de la page
    setTimeout(function() {
        let mot = prompt("Entrez un mot :");
        let voyelles = "aeiouy";
        let compteur_voyelles = 0;

        if (mot) {
            for (let i = 0; i < mot.length; i++) {
                let lettre = mot[i].toLowerCase();
                if (voyelles.includes(lettre)) {
                    compteur_voyelles++;
                }
            }
            resultElement.textContent = "Le mot '" + mot + "' contient " + compteur_voyelles + " voyelle(s).";
        } else {
            resultElement.textContent = "Aucun mot n'a été entré.";
        }
    }, 100); // Délai minimal de 100 ms
});
