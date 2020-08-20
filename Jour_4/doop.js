/* faire une fonction pour chaque opération*/
/* faire une fonction avec les 3 arguments)*/

function doop(param1, param2, param3) {

  
  var param1 = parsInt(process.argv[2]);
  var param2 = parsInt(process.argv[3]);
  var param3 = parsInt(process.argv[4]);


  
  console.log();
  switch (param2) {
    case '+':
      console.log(doop(param1,param2,param3));    // Addition
      
    case '-':
      console.log(doop(param1,param2,param3));  // Soustraction
     
    case '*':
      console.log(doop(param1,param2,param3));  // Multplication
     
    case '/':
      console.log(doop(param1,param2,param3));  // Division

    case (doop.length > 3):
      console.log("error");  // Si le nombre de paramètres est>3= error
      
    default:
      console.log("not rated");  // Instructions à exécuter lorsqu'aucune des valeurs ne correspond

  }
  return 
}

console.log(doop())

//var myArgs = process.argv.slice(2);
//console.log('myArgs: ', myArgs);

