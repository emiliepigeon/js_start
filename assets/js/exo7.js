// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer l'élément pour afficher le résultat
    const resultElement = document.getElementById('result');

    // Demander à l'utilisateur d'entrer le nombre de photocopies avec un délai minimal pour permettre l'affichage de la page
    setTimeout(function() {
        let nombre_photocopies = prompt("Entrez le nombre de photocopies :"); // Demander le nombre de photocopies à l'utilisateur

        if (nombre_photocopies) { // Si l'entrée n'est pas vide
            nombre_photocopies = Number(nombre_photocopies); // Convertir la chaîne en nombre
            let prix; // Déclarer la variable pour le prix

            // Calculer le prix en fonction du nombre de photocopies
            if (nombre_photocopies <= 10) { // Si le nombre de photocopies est inférieur ou égal à 10
                prix = nombre_photocopies * 0.20; // Prix pour les 10 premières photocopies
            } else if (nombre_photocopies <= 30) { // Si le nombre de photocopies est entre 11 et 30
                prix = 10 * 0.20 + (nombre_photocopies - 10) * 0.15; // Prix pour les photocopies supplémentaires
            } else { // Si le nombre de photocopies est supérieur à 30
                prix = 10 * 0.20 + 20 * 0.15 + (nombre_photocopies - 30) * 0.10; // Prix pour les photocopies au-delà de 30
            }

            // Afficher le résultat
            resultElement.textContent = "Le prix total est : " + prix.toFixed(2) + " €"; // Afficher le prix formaté avec deux décimales
            resultElement.style.color = "green"; // Changer la couleur du texte en vert 
        } else { // Si l'entrée est vide
            resultElement.textContent = "Aucun nombre n'a été entré."; // Afficher un message d'erreur
            resultElement.style.color = "orange"; // Changer la couleur du texte en orange
        }
    }, 100); // Délai minimal de 100 ms
});
