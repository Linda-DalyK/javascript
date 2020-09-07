// var date = ('')
// var now = new Date

// // function ageCalculator(date){


// var birthday = new Date ('1982-04-14');
// var now = new Date();

// result = now.getFullYear() - birthday.getFullYear() 


// // console.log(now.getFullYear());
// // console.log(birthday.getFullYear());
// // console.log(now.getFullYear() - birthday.getFullYear());

// console.log(result)


// ------------- avec MAth Floor-----------------------------------
// var now = new Date
// // function ageCalculator(date){
// var dateOfBirth = new Date("January 13, 1980 11:20:00");
// var now = new Date();
// result = now - dateOfBirth ;
// age = (now-dateOfBirth)/31536000000
// console.log(Math.floor(age))

// -------------------Terminé--------------------------------------------------
var now = new Date();
function ageCalculator(date) {
  var birthday = new Date(date);
  var age = 0;
    age = now.getFullYear() - birthday.getFullYear();
    // console.log(now.getFullYear());
    // console.log(dateOfBirth.getFullYear());
    // console.log(now.getFullYear() - dateOfBirth.getFullYear());
    // console.log(age);
  return age;
}
console.log(ageCalculator('April 14, 1982') + 'ans');
