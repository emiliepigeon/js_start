// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer l'élément pour afficher le résultat
    const resultElement = document.getElementById('result');

    // Définir une liste avec des doublons
    let liste = [1, 2, 3, 1, 2, 4, 5, 3, 6]; // Exemple de liste avec des doublons
    let nouvelle_liste = []; // Initialiser une nouvelle liste vide

    // Pour chaque élément dans la liste d'origine
    for (let element of liste) {
        // Si l'élément n'est pas déjà dans la nouvelle liste
        if (!nouvelle_liste.includes(element)) {
            nouvelle_liste.push(element); // Ajouter l'élément à la nouvelle liste
        }
    }

    // Afficher le résultat
    resultElement.textContent = "Liste sans doublons : " + nouvelle_liste.join(', '); // Afficher la nouvelle liste
    resultElement.style.color = "green"; // Changer la couleur du texte en vert 
});
