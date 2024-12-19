// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer l'élément pour afficher le résultat
    const resultElement = document.getElementById('result');

    // Données de base
    let type_vehicule = "Voiture";      // Peut être "Voiture", "Moto" ou "Camion"
    let age_vehicule = 6;               // Âge du véhicule en années
    let kilometrage_annuel = 25000;     // Kilométrage annuel
    let prime = 0;                      // Initialisation de la prime de base

    // Définition de la prime de base selon le type de véhicule
    if (type_vehicule === "Voiture") {
        prime = 500; // Prime pour une voiture
    } else if (type_vehicule === "Moto") {
        prime = 300; // Prime pour une moto
    } else if (type_vehicule === "Camion") {
        prime = 1000; // Prime pour un camion
    }

    // Majoration pour l'âge du véhicule
    if (age_vehicule > 5) {
        prime *= 1.10; // Majoration de 10% si le véhicule a plus de 5 ans
    }

    // Majoration pour le kilométrage annuel
    if (kilometrage_annuel > 30000) {
        prime *= 1.15; // Majoration de 15% si le kilométrage annuel est supérieur à 30,000 km
    } else if (kilometrage_annuel > 20000) {
        prime *= 1.05; // Majoration de 5% si le kilométrage annuel est supérieur à 20,000 km mais inférieur ou égal à 30,000 km
    }

    // Afficher le résultat
    resultElement.textContent = "Prime d'assurance : " + prime.toFixed(2) + " €"; // Afficher la prime formatée avec deux décimales
    resultElement.style.color = "green"; // Changer la couleur du texte en vert 
});
