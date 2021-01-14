var names = ["nicolas", "alexandra", "celeste", "no name"];

var tabSize = names.length;

console.log(`Le nom en 2eme position dans le tableau est ${names[1]}`);

console.log("Liste des valeurs de [names]");

for(var i = 0, size = names.length; i < size; i++)
    console.log(names[i]);

names.push("turwaith"); // ajoute à la fin
names.unshift("marie"); // ajoute au début

console.log(names);

names.shift() // retire au début
names.pop(); // retire à la fin


console.log(names);