
// 1. je parcours la string avec "match" pour récupérer les premiers caractères de chaque mot grace au pattern
// 2. je tranforme chaque premier caractère isolé en majuscule grâce à UpperToCase  
// 3. je recrée chaque mot de la string grâce à "join" ou à la concaténation

// OU

// 1. je parcours la string avec "replace" pour remplacer tous les premiers caractères par leur majuscule




// function letterCapitalizeRegex(str) {
//     // var str = "what a wonderful world";
//     //   console.log(word);
//     var word = str.match(/\b[a-z]/g)

//     return word

// }

// console.log(letterCapitalizeRegex("what a wonderful world"))


// function letterCapitalizeRegex(str) {
//     // var str = "what a wonderful world";
//     //   console.log(word);
//     var word = str.replace(/\b[a-z]/g, function(param){
//       var capitalize = param.toLocaleUpperCase();
//         return capitalize;
//     });
// }
//   console.log(letterCapitalizeRegex("what a wonderful world"))

// function letterCapitalizeRegex(str) {
//     // var str = "what a wonderful world";
  
//     var word = str.replace(/\b[a-z]/g, function(param){
//       var capitalize = param.toLocaleUpperCase();
//         return capitalize;
//     });
// }
//   ​  console.log(letterCapitalizeRegex("what a wonderful world"))


var str = "what a wonderful world";
  //   console.log(word);
  var word = str.replace(/\b[a-z]/g, function(param){
    var capitalize = param.toLocaleUpperCase();
      return capitalize;
  });
console.log(word)

