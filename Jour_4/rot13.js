// ********Fonctionne sans fonction***************************
// var str = 'abc'

// for (var i = 0; i <= str.length - 1; i++) {


// console.log(String.fromCharCode(str.charCodeAt(i) + 13))
// *************************************************************
// si i est une majuscule, ça doit retourner une majuscule
// si i est une minuscule, ça doit retourner une minuscule
// si la boucle arrive à z/Z, elle doit repartir de zéro depuis a/A

// *******************************Me début*****************************************************
// function rot13(str) {

//     var result = ''
//     // var i = charCodeAt(i)
//     // var start = 65
//     // var end = 90

//     // console.log(String.fromCharCode(65))
//     for (var i = 0; i <= str.length - 1; i++) {

//         console.log("======= new letter =========")
//         console.log(str.charAt(i)
//         ) // lettre
//         // console.log(str.charCodeAt(i)) // son code ASCII
//         console.log(String.fromCharCode(str.charCodeAt(i) + 13))
//         // result += String.fromCharCode(str.charCodeAt(i))
//         result += String.fromCharCode(str.charCodeAt(i) + 13)


//     }
//     console.log('====== my result ======')
//     return result

// }

// // console.log(rot13('ABCabc'))
// console.log(rot13('z'))

// *********************************Me Fin*********************************************
// ******************************RAKY début******************************************
// function rot13(str)

// var min = 65;
// var max = 90;
// // var str = "AbcZ";
// var arr = str.split('')
// for (var i = 0; i < arr.length; i++) {
//     if (result = (str.charCodeAt(i) + 13) > max || (str.charCodeAt(i) + 13) > min) {
//         result = String.fromCharCode(str.charCodeAt(i) + 13)
//     }
//     // console.log(result);
// }

// console.log("AbcZ")

// ****************************RAKY fin *****************************************************
// *******************************Lilia début***************************************************
// 'use strict'
// var str = 'abc';
// function rot13(str) {
//     // var result = ''
//     // for (var i = 0; i < str.length; i++) {
//     //     // console.log(str[i]);
//     //     result += String.fromCharCode(str.charCodeAt(i) + 13)
//     // }
//     var result = ''
//     // var comptmin = 65
//     // var comptemax = 90
//     for (var i = 0; i < str.length; i++) {
//         if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//             result1 += String.fromCharCode(str.charCodeAt(i) + 13)
//             console.log(result1)
//         } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
//             console.log((String.fromCharCode(str.charCodeAt(i) + 13))
//         } else if ((String.fromCharCode(str.charCodeAt(i) + 13)) > 90 && (String.fromCharCode(str.charCodeAt(i) + 13)) > 122){
//             //             result += String.fromCharCode(str.charCodeAt(i) + 13)-26

//         }



//         }




//         (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
//             result2 += String.fromCharCode(str.charCodeAt(i) + 13)
//         } else  ((String.fromCharCode(str.charCodeAt(i) + 13)) > 90 && (String.fromCharCode(str.charCodeAt(i) + 13)) > 122){
//             result += String.fromCharCode(str.charCodeAt(i) + 13)-26
//         }
//     return result
//     }
// }
// console.log(rot13('AbcZ'))
// String.fromCharCode( str.charCodeAt(i) + 13 )
// *********************************************************************************************
// console.log(rot13('abc'))



// console.log(strSplit)
// console.log(str.charCodeAt(i))
// console.log(str.charCodeAt(i)+13)
// console.log(String.fromCharCode(str.charCodeAt(i)+13))



// console.log(string.charCodeAt())
// console.log(str.charCodeAt(strSplit))

// console.log(str.charCodeAt(i))
// console.log(strSplit.charCodeAt[i])

// for (var i = 0; i <= str.length - 1; i++) {

// console.log(str.split.charCodeAt(''))



//     }
// }

// 1. convertir chaque caractère de la string en ASCII
// 2. retourner chaque caractère ASCII +13


// ---------------------------------------- A FINIR   ------------------------------------------------------



switch (charAt(i)) {
  case '+':
    console.log('param1', 'param2', 'param3');    // Addition
    break;
  case '-':
    console.log(param1, param2, param3);  // Soustraction
    break;
  case '*':
    console.log(param1, param2, param3);  // Multplication
    break;
  case '/':
    console.log(param1, param2, param3);  // Division
    break;
  case (doop.length !== 3):
    console.log("error");  // Si le nombre de paramètres différent de 3= error
    break;
  default:
    console.log("not rated");  // Instructions à exécuter lorsqu'aucune des valeurs ne correspond
}