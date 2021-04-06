//Exercise: Level 1
//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let dayTwo = '30 Days Of JavaScript';

//2. Print the string on the browser console using console.log()
console.log(dayTwo)

//3.Print the length of the string on the browser console using console.log()
console.log(dayTwo.length)

//4. Change all the string characters to capital letters using toUpperCase() method
console.log(dayTwo.toUpperCase())

//5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(dayTwo.toLowerCase())

//6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(dayTwo.substr(3,4))

// 7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(dayTwo.substring(3))

//8.Check if the string contains a word Script using includes() method

console.log(dayTwo.includes('Script'))
//9. Split the string into an array using split() method

console.log(dayTwo.split(' '))
// Split the string 30 Days Of JavaScript at the space using split() method
console.log(dayTwo.split(''))

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','))
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(dayTwo.replace('JavaScript', 'Python'))
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(dayTwo.charAt(15))
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(dayTwo.charCodeAt('J'))
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(dayTwo.indexOf('30 Days'))
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(dayTwo.lastIndexOf('JavaScript'))
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let exercise = 'You cannot end a sentence with because because because is a conjunction'

console.log(exercise.indexOf('You cannot'))
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(exercise.lastIndexOf('conjunction'))
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(exercise.search('cannot'))
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let withSpaces = ' 30 Days Of JavaScript ';
console.log(withSpaces.trim())
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(dayTwo.startsWith('30'))
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(dayTwo.endsWith('JavaScript'))
// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(dayTwo.match('a'))
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let incomplete = '30 Days of';
console.log(incomplete.concat(' JavaScript'))
// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(dayTwo.repeat(2))

