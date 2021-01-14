/**
 *  Exercice 1:
 *  Créer un tableau d'objets de personnes (3) se composant des
 *  attributs suivant:
 *  name, firstName, tel, mail,
 *  creditCardNumber, creditCardPass, creditCardCrypto
 */

var tabPeople = [
    {
    name: "Wailly",
    firstName: "Nicolas",
    tel: 000112233,
    creditCardNumber: 00112233445566,
    creditCardPass: "seriously",
    creditCardCrypto: "#srly"
    },
    {
    name: "Doe",
    firstName: "Jane",
    tel: 9911558877,
    creditCardNumber: 566487215,
    creditCardPass: "damned",
    creditCardCrypto: "#pwnd"
    },
    {
    name: "Dupont",
    firstName: "Jean",
    tel: 54689621,
    creditCardNumber: 14587523695,
    creditCardPass: "what the fuck bro",
    creditCardCrypto: "#wtf"
    }
];

/**
 *  Exercice 2:
 *  Afficher pour chaque contact le message suivant:
 *  "Je suis {firstName} {name}, j'aime me faire hacker.
 *  Voici le code de ma carte de crédit: {creditCardPass}"
 */

function displayWithRecursive(tab, index=0){
    if(index > tab.length-1) return null;
    console.log(`Je suis ${tab[index].firstName} ${tab[index].name},
j'aime me faire hacker.
Voici le code de ma carte de crédit "${tab[index].creditCardPass}"`);
    displayWithRecursive(tab,++index);
}

displayWithRecursive(tabPeople);