// Sans "use strict"

// 1. Utilisation de variables non déclarées
function nonStrictVarTest() {
    nonDeclaree = "Je n'ai pas été déclarée !";  // Pas d'erreur sans mode strict
    console.log(nonDeclaree);
}
nonStrictVarTest();

// 2. Suppression d'une propriété non supprimable
var obj = {};
Object.defineProperty(obj, "nonSupprimable", {
    value: 10,
    writable: true,
    configurable: false
});
delete obj.nonSupprimable;  // Ne fait rien, mais aucune erreur sans mode strict
console.log(obj.nonSupprimable);  // Affiche 10

// 3. Paramètres en doublon dans les fonctions
function doublonParams(x, x) {
    console.log(x);  // Dernier paramètre écrase les autres
}
doublonParams(1, 2);  // Affiche 2
