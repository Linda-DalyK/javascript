// 1.je crée un array qui stocke des nombres
// 2.je dois retourner un array qui contiendra uniquement la 2ème plus petite valeur et 
// la 2ème plus grande valeur

// j'ordonne les caractères à l'intérieur de mon array


var arr = [];
function secondGreatLow(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
        return arr[1] + " " + arr[arr.length - 2]
    // console.log(arr[1], arr[arr.length - 2])
    // console.log(typeof arr[1])
}
// ne marche pas avec deux fois 7
console.log(secondGreatLow([7,7,98,106]))
console.log(secondGreatLow([1,42,42,180]))
console.log(secondGreatLow([4,90]))



// *************** Challeng process.argv A REFAIRE***********************
var arr = process.argv.slice(2);

function secondGreatLow(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
        return arr[1] + " " + arr[arr.length - 2]
}