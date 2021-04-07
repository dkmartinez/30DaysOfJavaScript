// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

/*alert('Let to calculate the triangle area')
let base = prompt('Enter base')
let height= prompt('Enter height')
let area = 0.5 * base * height;

console.log(`The arear of the triangle is ${area}`) */

//Write a script to calculate the perimeter of triangle 

/*
console.log('Let to calculate the perimeter of triangle')
let side1 = prompt('Enter side a:')
let side2 = prompt('Enter side b:')
let side3 = prompt('Enter side c:')


let perimeter = Number(side1) + Number(side2) + Number(side3)
console.log(`The perimeter of the triangle is ${perimeter}`)
*/

//Write a script to calculate the area of rectangle 

/*
let lenghtRectangle = prompt('Insert the lenght')
let widthRectangle = prompt('Insert the width')

let areaRectangle = lenghtRectangle * widthRectangle

console.log(`The rectangle area is ${areaRectangle}`)*/

// alert('Let to calculate the circumference and area of circle')
// let circlePi = 3.14 
// let radius = prompt('Write the radio of the circle')
// let formulaCircle = circlePi * (radius * radius)

// console.log(` The area is ${formulaCircle}`)

// let formulaCircunference = circlePi * 2 * radius
// console.log( ` The circunference is ${formulaCircunference}`)

// alert('Calculate the value of Y')

// let x = prompt('Insert the valoe of X')

// let formula = x**x + (6*x  + 9)
// console.log(`The value of Y is ${formula}`)

/*

Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hrs = prompt('Insert your time worked:')
let salary = prompt('Insert your salary per hour')
let earning = hrs * salary

console.log(`Your weekly earning is ${earning}`)

*/

// If the length of your name is greater than 7 say, your name is long else say your name is short.

let myName = 'Dianaaaaaaa'
// console.log(myName)

myName.length > 7 
? console.log('Your name is long')
: console.log('Your name is short')

//Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

firstName.length === lastName.length 
? console.log(`Your first name,  ${firstName} is longer than your family name, ${lastName}`)
: console.log(`Your first name,  ${firstName} is shorter than your family name, ${lastName}`)

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
let comparinAges = myAge - yourAge

console.log(`I am ${comparinAges} years older than you.`)

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// let yearBirth = prompt('Enter birth year')
//  let date = new Date()
// let yearActual = date.getFullYear()
// let areYouLegal = yearActual - yearBirth;

// areYouLegal > 18 

// ? console.log(`You are ${areYouLegal}. You are old enough to drive. `)
// : console.log(`You are ${areYouLegal}. You will be allowed to drive soon.`)

// let myAge2 = prompt('Enter number of yours you live')
// let seconds = date.getTime()
// let calculate = myAge2 * seconds

// console.log( ` You lived ${calculate} seconds`)


/*

Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm

*/

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${year}/${month} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)