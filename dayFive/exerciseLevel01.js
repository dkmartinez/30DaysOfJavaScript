// Declare an empty array;
const arr = Array();
console.log(Array)

const arr2 = []
console.log(arr2)
// Declare an array with more than 5 number of elements
const arrfive = ['azul', 'blanco', 'negro', 'amarillo', 'cafe']
console.log(arrfive)
// Find the length of your array
console.log(arrfive.length)
// Get the first item, the middle item and the last item of the array

let arrfive1 = arrfive[0]
let arrfiveMiddle = arrfive[2]
let arrfiveLast = arrfive[4]

console.log(`Your first item is ${arrfive1} your middle item is ${arrfiveMiddle} and your last one is ${arrfiveLast}`)

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['String', 'Number', 'Boolean', 'Double', 'Int', 'Char']
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies =[ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)
// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])
// Print out each company
let companies =  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies)
const companiesSplit = companies.split(',')
console.log(companiesSplit)
// Change each company name to uppercase one by one and print them out

console.log(companies.toUpperCase())
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const bigSentence = 'Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies'
console.log(bigSentence)
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

console.log(bigSentence.includes('Warcraft'))
console.log(bigSentence.includes('Microsoft'))
console.log(bigSentence.includes('Google'))
console.log(bigSentence.includes('Oracle'))
// Filter out companies which have more than one 'o' without the filter method
let withLetherO = bigSentence.indexOf('o')
// console.log(withLetherO)
withLetherO != -1 
?console.log(`You have words with 'o' ${itCompanies}`)
:console.log('Sin resultados')

// Sort the array using sort() method

console.log(itCompanies.sort())
// Reverse the array using reverse() method
console.log(itCompanies.reverse())
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(1,4))
// Slice out the last 3 companies from the array
console.log(itCompanies.splice(4))
// Slice out the middle IT company or companies from the array
console.log(itCompanies[3])
// Remove the first IT company from the array
let removeFirst = itCompanies.shift()
console.log(removeFirst)
// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(1,3,5,6))
// Remove the last IT company from the array
let lastItem = itCompanies.pop()
console.log(lastItem)
// Remove all IT companies
console.log(itCompanies.splice())
