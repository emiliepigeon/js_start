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
