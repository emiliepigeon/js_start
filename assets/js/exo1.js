// Demande à l'utilisateur d'entrer un nombre et le convertit en entier
let nombre = parseInt(prompt("Entrez un nombre :"));
// variable > nombre ATTRIBUTION 
// Vérifie si le nombre est pair ou impair
if (nombre % 2 === 0) {
    // Si le reste de la division par 2 est 0, le nombre est pair
    console.log("Pair");
} else {
    // Sinon, le nombre est impair
    console.log("Impair");
}