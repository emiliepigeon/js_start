// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer l'élément pour afficher le résultat
    const resultElement = document.getElementById('result');

    // Définir un tableau de nombres
    let liste = [3, 5, 2, 3, 8, 5, 3, 1, 2, 5]; // Exemple de tableau prédéfini
    // TODO: "Remplacer par du code pour générer le tableau de nombres avec des random"
    let compteur = {}; // Créer un dictionnaire pour compter les occurrences

    // Pour chaque nombre dans la liste
    for (let nombre of liste) {
        // Vérifier si le nombre existe déjà dans le compteur
        if (compteur[nombre]) { // Si le nombre existe déjà
            compteur[nombre] += 1; // Incrémenter le compteur
        } else { // Si le nombre n'existe pas
            compteur[nombre] = 1; // Initialiser à 1 si c'est la première occurrence
        }
    }

    // Trouver le nombre avec la plus grande valeur dans le compteur
    let plus_repete = Object.keys(compteur).reduce((a, b) => compteur[a] > compteur[b] ? a : b);

    // Afficher le résultat
    resultElement.textContent = "Le nombre le plus répété est : " + plus_repete;
    resultElement.style.color = "green"; // Changer la couleur du texte en vert 
});

