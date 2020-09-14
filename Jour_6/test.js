// Challenge 1 --------------------------------------------------
// Creez un object 'voiture' qui à 3 attributs
// Ces attributs sont :
// - marque => string
// - modele => Objet => 2 attributs 'a' et 'b' qui ont pour valeur des strings
// - annee => Date => 2015-08-08 || number
// Afficher l'objet voiture, puis afficher juste la marque de la voiture
// Bonus: Utilisez les deux syntaxes possible
// Challenge 2 --------------------------------------------------
// Prenez le même objet que precedemment 
// et ajouter à l'attribut modèle un elèment 'c' qui est une string
// Afficher l'objet voiture, puis afficher la valeur 'c' qui se trouve dans le modèle
//  *********************************challenge 1*************************************************
// var voiture = {
//     marque : '',
//     modele : { 'a':'',
//                 'b':''},
//     annee : 2015-08-08
// };
// console.log(voiture)
// console.log(voiture.marque)
// console.log(voiture[marque])
// ********************************challenge 2****************************************************
// var voiture = {
//     marque: 'Mercedes',
//     modele: {
//         a: 'v-8',
//         b: 'Class A',
//         c: 'trop cher'},
//     annee: new Date('2015-08-08')
// }
// console.log(voiture.modele.c)
// ****************************Challenge 3 ***************************************************
// Challenge 3 --------------------------------------------------
// Prenez le même objet que precedemment 
// Ajouter un attribut à voiture qui s'appelle 'pneu'. C'est un array avec 4 chiffres dedans
// Pour chaque chiffre de l'array 'pneu' ajouter 2 à sa valeur avec la fonction map

var voiture = {
    marque: 'Mercedes',
    modele: {
        a: 'v-8',
        b: 'Class A',
        c: 'trop cher'},
    annee: new Date('2015-08-08'),
    pneu : [ 1,2,3,4],
}

var arr2 = arr.map(function(elem){

    return elem.pneu + 1;
    
});

console.log(arr2)
// console.log(voiture.modele.c)
// ******************************************Challenge 4 --------------------------------------------------
// Prenez le challenge 3 et afficher les valeurs de l'attribut 
// 'pneu' de l'obj 'voiture' une par une avec une boucle for

var voiture = {
    marque: 'Mercedes',
    modele: {
        a: 'v-8',
        b: 'Class A',
        c: 'trop cher'},
    annee: new Date('2015-08-08'),
    pneu : [ 1,2,3,4],
}

var arr2 = arr.map(function(elem){

    return elem.pneu + 1;
    
});

console.log(arr2)