/**
 *  afficher liste de 1 à 100 en affichant pour chaque nombre s'il
 *  pair ou impair
 *  Ex:
 *      1 est impair
 *      2 est pair
 *      3 est impair
 */


/**
 *  Une ligne, boucle for, 1 conditions, 2 process
 *  !!! premier tour de boucle non pris en compte !!!
 */
for(var i = 0;
    i < 100;
    i++, i%2==0 ?console.log(`${i} est pair`):console.log(`${i} est impair`));

console.log("------")

// conventionnel
for(var i = 1; i < 101; i++)
{
    if(i%2==0)
        console.log(`${i} est pair`);
    else
        console.log(`${i} est impair`);
}
