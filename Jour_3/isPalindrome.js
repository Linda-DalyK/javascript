// créer une fonction qui prend une string et qui retourne TRUE si la string est un palindrome ou FALSE
// si ce n'est pas un palindrome
// si la phrase à l'endroit === la phrase à l'envers ===> TRUE
// il faut que la boucle lise chaque caractère l'un après l'autre à l'endroit et à l'envers

// 1ère boucle lit la string à l'endroit return: les caractères un à un à l'endroit
// 2è boucle lit la string à l'envers return: les caractères un à un à l'envers

// si return1 === return2 ===> TRUE
// sinon FALSE 


var str = 'never odd or even'
var strSplit = str.split('')
console.log(strSplit)


// console.log(str.split(''))



// var str = 'hello'
function isPalindrome(str) {

var strInverse = ("");

for (var i = 0; i < str.length; i++) {
    // str += 1;
    strInverse = str[i] + strInverse;
}
if (strInverse !== str) {

    return false;

} else {

    return true;

}
}

console.log(isPalindrome('kayak'))
// console.log(strInverse)
// console.log(str)


// --------------------------Terminé-------------------------------------------------------------------