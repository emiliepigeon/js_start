// Version sans interaction avec le DOM / sans fonction
// Demander à l'utilisateur d'entrer une liste de notes séparées par des virgules
// let input = prompt("Entrez une liste de notes séparées par des virgules :");
// // Vérifier si l'utilisateur a bien entré quelque chose
// if (input) {
//     // Convertir la chaîne d'entrée en un tableau de nombres
//     let liste_de_notes = input.split(',').map(Number);
//     // Initialiser la variable pour la somme des notes
//     let somme = 0;
//     // Initialiser le compteur pour le nombre de notes valides
//     let nombre_de_notes = 0;
//     // Parcourir chaque note dans la liste
//     for (let i = 0; i < liste_de_notes.length; i++) {
//         // Vérifier si la note est un nombre valide
//         if (!isNaN(liste_de_notes[i])) {
//             // Ajouter chaque note valide à la somme
//             somme += liste_de_notes[i];
//             // Incrémenter le compteur de notes valides
//             nombre_de_notes++;
//         }
//     }
//     // Vérifier s'il y a des notes valides pour éviter la division par zéro
//     if (nombre_de_notes > 0) {
//         // Calculer la moyenne en divisant la somme par le nombre de notes valides
//         let moyenne = somme / nombre_de_notes;
//         // Afficher le résultat dans la console
//         console.log("La moyenne est : " + moyenne.toFixed(2));
//     } else {
//         // Afficher un message si aucune note valide n'a été entrée
//         console.log("Aucune note valide n'a été entrée.");
//     }
// } else {
//     // Message d'erreur si aucune entrée n'a été fournie
//     console.log("Aucune note n'a été entrée.");
// }



// Version avec 1 ligne enternaire // Demander à l'utilisateur d'entrer une liste de notes séparées par des virgules
// let input = prompt("Entrez une liste de notes séparées par des virgules :");
// // Initialiser la somme et le compteur
// let somme = 0;
// let nombre_de_notes = 0;
// // Vérifier si l'utilisateur a bien entré quelque chose
// if (input) {
//     // Convertir la chaîne d'entrée en un tableau de nombres
//     let liste_de_notes = input.split(',');
//     // Parcourir chaque note dans la liste
//     for (let i = 0; i < liste_de_notes.length; i++) {
//         // Convertir la note en nombre
//         let note = Number(liste_de_notes[i]);        
//         // Ajouter à la somme si c'est un nombre valide
//         if (!isNaN(note)) {
//             somme += note;
//             nombre_de_notes++;
//         }
//     }
//     // Calculer la moyenne si des notes valides ont été entrées
//     let moyenne = (nombre_de_notes > 0) ? (somme / nombre_de_notes) : 0; // TERNAIRE
//     // Afficher le résultat dans la console
//     console.log("La moyenne est : " + moyenne);
// } else {
//     // Message d'erreur si aucune entrée n'a été fournie
//     console.log("Aucune note n'a été entrée.");
// }


// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour exécuter le script avec un léger délai
    setTimeout(function() {
        // Demander à l'utilisateur d'entrer une liste de notes
        let input = prompt("Entrez une liste de notes séparées par des virgules :");
        
        // Vérifier si l'utilisateur a entré quelque chose
        if (input) {
            // Convertir la chaîne d'entrée en un tableau de nombres
            let liste_de_notes = input.split(',').map(Number);
            
            // Initialiser la variable pour la somme des notes
            let somme = 0;
            
            // Parcourir chaque note dans la liste
            for (let i = 0; i < liste_de_notes.length; i++) {
                // Ajouter chaque note à la somme
                somme += liste_de_notes[i];
            }
            
            // Calculer la moyenne en divisant la somme par le nombre de notes
            let moyenne = somme / liste_de_notes.length;
            
            // Afficher le résultat dans la console
            console.log("La moyenne est : " + moyenne.toFixed(2));
            
            // Afficher le résultat sur la page (supposons qu'il y a un élément avec l'id 'result')
            let resultElement = document.getElementById('result');
            if (resultElement) {
                resultElement.textContent = "La moyenne est : " + moyenne.toFixed(2);
            }
        } else {
            // Afficher un message si aucune entrée n'a été fournie
            console.log("Aucune note n'a été entrée.");
            
            let resultElement = document.getElementById('result');
            if (resultElement) {
                resultElement.textContent = "Aucune note n'a été entrée.";
            }
        }
    }, 100); // Délai de 100 ms pour permettre le chargement de la page
});
