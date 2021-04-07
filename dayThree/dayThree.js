let truValue = 4 > 5
console.log(truValue)

// Truthy values
// All numbers(positive and negative) are truthy except zero
// All strings are truthy
// The boolean true


// Falsy values
// 0
// 0n
// null
// undefined
// NaN
// the boolean false
// '', "", ``, empty string

//assigmentOperators
console.log(typeof NaN)  

//Ternary Operators
let isRaining = false
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

 let isMidnight = false
 ? console.log('You need to go to sleep')
 :console.log('You can wath more tv')

 let number = 5
    number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)

//   prompt('text', ('something'))

// let number2 = prompt('Enter number', 'number goes here')
// console.log(number2)

// let yourName = prompt('Write your name')
// console.log(`Bienvenido al sitio ${yourName}`)

// //The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
// const agree = confirm('Do you want to go out?')
// console.log(agree)

/** DATE OBJECT
 * . getFullYear(), 
 * getMonths(), 
 * getDate(), 
 * getDay(), 
 * getHours(), 
 * getMinutes, 
 * getSeconds(), 
 * getMilliseconds(), 
 * getTime(),
 * 
 *  getDay()
 */

 const now = new Date() //variable para conseguir los dias/horas/meses etc y se agregan los metodos que se requieran
 console.log(now.getFullYear()) // 2021
 console.log(now.getTime())

 const monthly = new Date()
 console.log(monthly.getMonth())

 const now2 = new Date()
 let month = now2.getMonth()
 let year = now2.getFullYear()
 let date = now2.getDate()
 let hours = now2.getHours()
 let minutes = now2.getMinutes()

 console.log(`${month}/${date}/${year} ${hours}:${minutes}`)