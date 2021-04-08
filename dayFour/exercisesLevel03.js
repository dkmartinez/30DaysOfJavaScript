//Write a program which tells the number of days in a month.

let getDaysInMonth = 
    function(month,year){
        return new Date(year, month,0).getDate();
    }
let january = (getDaysInMonth(1, 2021))
let february = (getDaysInMonth(2, 2021))
let march = (getDaysInMonth(3, 2021))
let april = (getDaysInMonth(4, 2021))
let may = (getDaysInMonth(5, 2021))
let june = (getDaysInMonth(6, 2021))
let july = (getDaysInMonth(7, 2021))s
let august = (getDaysInMonth(8, 2021))
let september = (getDaysInMonth(9, 2021))
let octuber = (getDaysInMonth(10, 2021))
let november = (getDaysInMonth(11, 2021))
let december = (getDaysInMonth(12, 2021))

console.log(`January have a ${january} days`)
console.log(`February have a ${february} days`)
console.log(`March have a ${march} days`)
console.log(`April have a ${april} days`)
console.log(`May have a ${may} days`)
console.log(`June have a ${june} days`)
console.log(`July have a ${july} days`)
console.log(`August have a ${august} days`)
console.log(`September have a ${september} days`)
console.log(`Octuber have a ${january} days`)
console.log(`November have a ${november} days`)
console.log(`December have a ${december} days`)
