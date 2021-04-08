/*1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

let yourAge = prompt('Enter your age: ')
let notAge = 18 - yourAge

yourAge >= 18
? console.log('You are old enough to drive.')
: console.log(`You are left with ${notAge} years to drive.`) 

*/

/*2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let yourAge = prompt('Enter your age: ')
let calculateAge = 30 - yourAge;
let lessAge = yourAge -30;


if(yourAge > 30){
    console.log(`You are ${lessAge} years older than me.`)
} else {
    console.log( `You are ${calculateAge} years younger than me`)
}

*/

/**3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else


let a = 4
let b =3 

if(a>b){
    console.log('a is greater than b')
}else {
    console.log('a is less than b')

}

// ternary operator.
a > b
? console.log('a is greater than b')
: console.log('a is less than b')

  */

/*Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?



let insertNumber = prompt('Enter a number')

if(insertNumber % 2 == 0){
    console.log(`${insertNumber} is an even number`)
} else {
    console.log(`${insertNumber} is an odd number`)
}

*/