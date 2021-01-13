var apples = parseInt(prompt("Combien de pommes avez-vous récolté"));

if(apples >= 70)
    console.log("Tu as bien bossé");
else if(apples > 35)
    console.log("Tu peux mieux faire");
else
    console.log("Tu es viré");

console.log(Number.isNaN(apples));