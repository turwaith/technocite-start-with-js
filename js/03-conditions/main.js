var age = 18;
var str1 = "18";
var input;

if(age == 18){
    console.log(`Vous avez ${age} ans`);
}

if(str1 == 18){
    console.log(`Vous avez ${str1} ans`);
}

input = prompt("Quel âge avez-vous ?");

console.log(`Vous avez entré ${input}`);

if(Number(input) >= 18)
    console.log("Vous êtes majeur");
else    
    console.log("Vous êtes mineur");

console.log(input == "15");