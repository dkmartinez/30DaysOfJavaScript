// Using square brackets([])

const arra = []

// Using Array constructor

const arr = Array() //or 
let arr2 = new Array()

//Creating an array using split 

let js = 'Javascript'
const jsSplit = js.split('')
console.log(jsSplit)

let companies = 'Ms, Oracle, Intel, IBM, Amazon'
console.log(companies)
const companiesSplit = companies.split(',')
console.log(companiesSplit)

let txt =   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words= txt.split(' ')
console.log(words)


/*
Methods to manipulate array
There are different methods to manipulate an array. These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

*/

const arr34 = Array(8) //Methodo array
console.log(arr34)


const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const three1values = Array(3).fill(1)
console.log(three1values) 

//concat:To concatenate two arrays.


const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) 

// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

//lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

//Array.isArray:To check if the data type is an array

//toString:Converts array to string



/**join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
 * 
 */
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']


console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] // List of web technologies

  
  console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
  console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"


//   Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.


const numbers = [1,2,3,4,5]

  console.log(numbers.slice()) // -> it copies all  item
  console.log(numbers.slice(0)) // -> it copies all  item
  console.log(numbers.slice(0, numbers.length)) // it copies all  item
  console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

  //Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

//   Push: adding item in the end. To add item to the end of an existing array we use the push method.

// pop: Removing item in the end.

// shift: Removing one array element in the beginning of the array.

// unshift: Adding array element in the beginning of the array.

// reverse: reverse the order of an array.

// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.





