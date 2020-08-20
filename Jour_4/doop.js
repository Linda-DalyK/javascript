/* faire une fonction pour chaque opération*/
/* faire une fonction avec les 3 arguments)*/

function doop(param1, param2, param3) {

  var param1 = parsInt(process.argv[2]);
  var param2 = parsInt(process.argv[3]);
  var param3 = parsInt(process.argv[4]);


  //var grade = null;
  console.log(param2);
  switch (grade) {
    case '+':
      console.log(param1 + param3);    // Addition
      break;
    case '-':
      console.log(param1 - param3);  // Soustraction
      break;
    case '*':
      console.log(number1 * number3);  // Multplication
      break;
    case '/':
      console.log(number1 / number3);  // Division
    case (doop.length > 3):
      console.log("error");  // Si le nombre de paramètres est>3= error
      break;
    default:
      console.log("not rated");  // Instructions à exécuter lorsqu'aucune des valeurs ne correspond

  }
}