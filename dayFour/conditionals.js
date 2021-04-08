// // let myNumber = 18;

// // if (myNumber = 18){
// //     console.log(`Your number is ${myNumber}`)
// // }

// // //condition if else 

// // let campoUser = prompt('Please insert a number')
// // if(campoUser > 0){
// //     console.log(`You have a positive number`)
// // } 
// // else if(campoUser < 0){
// //     console.log(`You have a negative number`)
// // }
// // else if(campoUser == 0){
// //     console.log('You have 0 posibilities to win')
// // }
// // else{
// //     console.log( `${campoUser} is not a number`)
// // }

// //Switch case 

let dayToday = prompt('What day is today?')
let result = dayToday.toLowerCase()

switch(result){
    case 'monday':
    console.log('Today is monday')
    break;
    case 'tuesday':
    console.log('Is Tuesday, almost wednesday')
    break;
    case 'wednesday':
    console.log('The weekend almost finish is Wednesday')
    break;
    case 'thursday':
    console.log('Almost friday , go thursday')
    break;
    case 'friday':
    console.log('today is friday')
    break
    default:
    console.log ('Its not a day')
}
// Examples to use conditions in the cases

let num = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}