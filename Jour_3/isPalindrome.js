// créer une fonction qui prend une string et qui retourne TRUE si la string est un palindrome ou FALSE
// si ce n'est pas un palindrome
// si la phrase à l'endroit === la phrase à l'envers ===> TRUE
// il faut que la boucle lise chaque caractère l'un après l'autre à l'endroit et à l'envers

// 1ère boucle lit la string à l'endroit return: les caractères un à un à l'endroit
// 2è boucle lit la string à l'envers return: les caractères un à un à l'envers

// si return1 === return2 ===> TRUE
// sinon FALSE 



//  function isPalindrome(str) {

// var s = 'never odd or even';
// var rev = s.split('');
// console.log(rev);

// var arr = [];
// for (var i = 0; i < 10; i++) {
//   arr.push(i);
// }

//  var str = 'hello'

// var i = 0


// for (var i = 0; i <= str.length-1 ;i++) {
//    str.length[i]

// }
// console.log (str.length[i])



// for (var i = 1; i < str.length ; i++); {
//   result = 

//     }

// }

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