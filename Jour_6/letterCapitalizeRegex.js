// ****************************1er challenge : sans Regex*******************************************

// je splite ma string en tableau 
// je transforme chaque charAt(0) en upperCase





// console.log(toUpperCase)
// console.log(arr[0])

// function letterCapitalizeRegex(str) {
//     var arrSentence = str.split(' ');
//     var result = [];
//     var fisrtLetter = '';
//     var restOfWord = ''; 

//     for (i = 0; i < arrSentence.length; i++) {

//         firstLetter= arrSentence[i].substr(0,1).toUpperCase();
//         restOfWord = arrSentence[i].substr(1,arrSentence[i].length);

//         result.push (firstLetter + restOfWord);


//     }
//     return result.join(' ');
// }
// console.log(letterCapitalizeRegex('what a wonderful world'))
// console.log(firstLetter)





// var test = "hello paris";
// test.substr(0, 1);
// console.log(test.substr(0,1))

// ****************************1er challenge : avec Regex*******************************************


// je parcours la string avec search pour trouver les 1ères lettres de chaque mot
// je remplace chaque 1er caractère par une majuscule
// je concatène le 1ère lettre avec le reste du mot

var str = "what a wonderful world"

var letterTable = String.fromCharCode (str.charCodeAt())

console.log(letterTable)