// ****************************1er challenge : sans Regex*******************************************

// je splite ma string en tableau 
// je transforme chaque charAt(0) en upperCase





// console.log(toUpperCase)
// console.log(arr[0])







// var test = "hello paris";
// test.substr(0, 1);
// console.log(test.substr(0,1))

// ****************************1er challenge : avec Regex*******************************************


// je parcours la string avec search pour trouver les 1ères lettres de chaque mot
// je remplace chaque 1er caractère par une majuscule
// je concatène le 1ère lettre avec le reste du mot


// var firstLetter = str.substr(0,1)
// var arrSentence = str.split(" ")
// var capitalize = firstLetter.toUpperCase()
// var str = "what a wonderful world";

// Mon code
// function letterCapitalizeRegex (str){

//     var word = str.match(/\b[a-z]/g)

//     return word
// }


// console.log(letterCapitalizeRegex("what a wonderful world"))
// }

// var result = letterCapitalizeRegex("what a wonderful world")

// console.log(result)
    // return word

// }

// console.log(firstLetter)
// console.log(letterCapitalizeRegex("what a wonderful world"))
// console.log(capitalize)
// console.log(arrSentence)
// ***************************************************************************************

function letterCapRegex() {
    var str = "what a wonderful world";
    //   console.log(word);
    var word = str.match(/\b[a-z]/g);
  return word;
}
var newWord = letterCapRegex()
console.log(newWord)