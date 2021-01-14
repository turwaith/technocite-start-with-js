/**
 *  Exercice 1:
 *  Avec un tableau donné, ajouter dans un autre tableau toutes les 
 *  valeurs du premier tableau  qui sont plus grande que 12
 */

 var minDouze = [],
     values = [16, 4, 4, 14, 12, 13, 6, 28];

minDouze = values.filter(item => item > 12);

console.log(minDouze.join(" - "));

/**
 *  Exercice 2:
 *  Deux tableaux sont donnés, un tableau qui contient des prix, et *  un autre qui contient des produits.
 *  Demander à l'utilisateur un prix qu'il peut mettre et lui
 *  proposer tout les produits qui peut s'acheter avec le prix qu'il
 *  peut mettre.
 *  Exemple :
 *  L'utilisateur donne 50
 *  Vous pouvez acheter: "Nerf", "Téléphone", "Vinyle", "Ordinateur",
 *  "Voiture"
 */ 

var prices = [10, 20, 35, 48, 55, 17, 120],
    products = ["Nerf", "Téléphone", "Vinyle", "Ordinateur", "Montre", "Voiture", "Chips"],
    userProducts = [];

var userPrice = Number(prompt("Entrez un prix s'il vous plait: "));

for(var i = 0, size = prices.length; i < size; i++)
    if(prices[i] <= userPrice)
        userProducts.push(products[i]);

console.log("Objets disponnibles pour le prix donné: ");
console.log(userProducts.join(" - "));

/*
prices.forEach((item, index) => item <= userPrice ? console.log(products[index]) : null);
*/