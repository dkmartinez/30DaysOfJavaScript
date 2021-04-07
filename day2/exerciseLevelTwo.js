let quoteHolmes = 'There is no exercise better for the heart than reaching down and lifting people up.' 
console.log(quoteHolmes)

let motherTeresa = "Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(motherTeresa)

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let numberS = '10'
numberS = Number(numberS)
console.log(typeof numberS)

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let notInt = 9.8
console.log(Math.ceil(notInt))

// Check if 'on' is found in both python and jargon

let searching = ' python and jargon '
console.log(searching.search('on'))
// I hope this course is not full of jargon. Check if jargon is in the sentence.

let phrase = 'I hope this course is not full of jargon'
console.log(phrase.search('jargon'))
// Generate a random number between 0 and 100 inclusively.
let numberRand = Math.random()
let formRand = numberRand * 101
let arounRand = Math.floor(formRand)
console.log(arounRand)

// Generate a random number between 50 and 100 inclusively.

let num = Math.floor(Math.random ()* 51 ) +50 
console.log(num)

// creates random number between 0 and 10
console.log(Math.floor(Math.random() * 11))
// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 255))
// Access the 'JavaScript' string characters using a random number.
dayTwo = Math.random()
console.log(dayTwo)
// Use console.log() and escape characters to print the following pattern.
console.log('1\t1\t1\t1\t\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

// \n break
// \t Tab, means space

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substr(30,24))