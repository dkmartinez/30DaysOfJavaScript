//An array is a list of data values in a square bracket

//Non-primitive data types cannot be compared by value

//In JavaScript the Math Object provides a lots of methods to work with numbers.

const PI = Math.PI

console.log(PI)                            

console.log(Math.round(PI)) //to round values to the nearest number

let numWithDecimal = 12.67

console.log(Math.floor(PI))               // 3 rounding down
console.log(Math.ceil(numWithDecimal))  // rounding up 

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 15

const randNumber = (Math.floor(Math.random() *16 ) )
console.log(randNumber)

// Now, let us see how we can use random() method to generate a random number between 0 and 10:

let num = Math.random();
let operationNum = num * 11;

let numFloor = Math.floor(operationNum)
console.log(numFloor)
// Escape Sequences in Strings
// In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:
/*
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")

*/

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


//methods 

//substr(): It takes two arguments, the starting index and number of characters to slice.

let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land

//substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

let string2 = 'JavaScript'

console.log(string2.substring(0,4))     // Java
console.log(string2.substring(4,1))    // Script
console.log(string2.substring(4))       // Script

let string3 = '  30 Days Of JavaScript'

//split(): The split method splits a string at a specified place.

console.log(string3.split()) 
console.log(string3.split(' ')) 
console.log(string3.split('')) 
console.log(string3.split(',')) 
console.log(string3.split(', ')) 

//trim(): Removes trailing space in the beginning or the end of a string.

string4 = ' Diana is learning JavaScript    '
console.log(string4.trim(' '))
console.log(string4.trim())

/*
includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false
*/

let myData = 'Diana es menor de edad'

console.log(myData.replace('menor', 'mayor'))

//charAt(): Takes index and it returns the value at that index

// charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index

let myName = 'Diana'

console.log(myName.charCodeAt(0))

// indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

console.log(myName.indexOf('D'))

// lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1


//concat(): it takes many substrings and joins them.

console.log(myName.concat(' Campos ', 'from ', 'Mexico   '))

//startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

//endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).

// search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.

console.log(myName.search('D'))

//match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.


//repeat(): it takes a number as argument and it returns the repeated version of the string.

console.log(myName.repeat(2))


/*
String to Int
We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

parseInt()
Number()
Plus sign(+)
*/

let myNumber = '140'
console.log(typeof parseInt(myNumber))
console.log(typeof Number(myNumber))
console.log(typeof +myNumber)

console.log(typeof myNumber)

/*We can convert float numbers to integers. We use the following method to convert float to int:

parseInt() */

