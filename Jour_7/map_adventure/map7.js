var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]

// var arr2 = arr.map(function(elem){

//     var fullName = Object.assign(firstName,surname)
//     return fullName
    
// })
// console.log(fullName)


var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]
var arr2 = arr.map( function (objets) {
    var result= {fullname: objets.firstName + " "+ objets.surname};
    return result;
}
)
console.log(arr2);