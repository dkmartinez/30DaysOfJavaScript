// A function is a reusable block of code or programming statements designed to perform a certain task. 
// A parentheses can take a parameter.
// If a function take a parameter it will be called with argument.

/**
 * 
 * Function makes code:
clean and easy to read
reusable
easy to test 

A function can be declared or created in couple of ways:

Declaration function
Expression function
Anonymous function
Arrow function

*/

// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
  square() // 4  // a function has to be called by its name to be executed 

//   Function returning value
function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())


/**
 * 
 * Function with a parameter
In a function we can pass different data types
(number, string, boolean, object, function) as a parameter.
 */

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10)) // should be called with one argument
  
  //Function with two parameters

  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
  }
  sumTwoNumbers(10, 20) // calling functions
  // If a function doesn't return it doesn't store data, so it should return
  

  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  console.log(sumTwoNumbers(10, 20))


  //Function with many parameters
console.log('Function with many parameters')
  // this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));


  // function declaration
​
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


// function declaration
​
const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// Anonymous function or without name

const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}


/**
 * Expression Function
Expression functions are anonymous functions. 
After we create a function without a name and we assign it to a variable. 
To return a value from the function we should call the variable. 
Look at the example below.
 */

// Function expression
const square = function(n) {
    return n * n
  }
  
  console.log(square(2)) // -> 4

//   Arrow Function

// Arrow function is an alternative to write a function, 
// however function declaration and arrow function have some minor differences.

const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries))
  
  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

  const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName('Asabeneh', 'Yetayeh'))

//   Function with default parameters
function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))
