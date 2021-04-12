//Declare a function fullName and it print out your full name.

// function fullName(){
// firsName= 'Diana'
// lastName = 'Campos'
// console.log(firsName, lastName)
// }
// fullName()

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// function fullName2(firstName, lastName){
//     let name2 = firstName + ' ' +lastName
//     return name2;
// }

// console.log(fullName2('Diana', 'Campos'))
// console.log(fullName2('Juan', 'Campos'))

// Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(sum1, sum2){
    let sum = sum1 + sum2
    console.log(sum)
}

addNumbers(2,5)
addNumbers(4,5)

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width){
    let operation = length * width
    console.log(`The area of a rectangle is ${operation}`)
}

areaOfRectangle(10,5)