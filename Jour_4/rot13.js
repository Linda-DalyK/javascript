// ********Fonctionne sans fonction***************************
// var str = 'abc'

// for (var i = 0; i <= str.length - 1; i++) {


// console.log(String.fromCharCode(str.charCodeAt(i) + 13))
// *************************************************************
// si i est une majuscule, ça doit retourner une majuscule
// si i est une minuscule, ça doit retourner une minuscule
// si la boucle arrive à z/Z, elle doit repartir de zéro depuis a/A


function rot13(str) {

    var result = ''
    // var i = charCodeAt(i)
    // var start = 65
    // var end = 90

    // console.log(String.fromCharCode(65))
    for (var i = 0; i <= str.length - 1; i++) {

        console.log("======= new letter =========")
        console.log(str.charAt(i)
        ) // lettre
        // console.log(str.charCodeAt(i)) // son code ASCII
        console.log(String.fromCharCode(str.charCodeAt(i) + 13))
        // result += String.fromCharCode(str.charCodeAt(i))
        result += String.fromCharCode(str.charCodeAt(i) + 13)


    }
    console.log('====== my result ======')
    return result

}

// console.log(rot13('ABCabc'))
console.log(rot13('z'))


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

