//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firsName = 'Diana'
let lastName = 'Campos'
let country = 'Mexico'
let age= 25
let sMarried = true
let time = new Date()
let year2 = time.getFullYear()

console.log(typeof firsName, typeof lastName, typeof country, typeof age, typeof sMarried, typeof year2)

let python = 'Python'
console.log(python.length)
console.log(python.length === 'blanco'.length)

//DATES
let day = new Date()
// What is the year today?
let year3 = day.getFullYear()
console.log(year3)
// What is the month today as a number?
let month2 = day.getMonth()
console.log (month2)

// What is the date today?
let date2 = day.getDate()
console.log(date2)
// What is the day today as a number?
console.log(day.getDay())
// What is the hours now?
console.log(day.getHours())
// What is the minutes now?
console.log(day.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.

let seconds2 = day.getTime()
console.log(seconds2)