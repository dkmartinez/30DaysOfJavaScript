// 9 Ways to Remove Elements From A JavaScript Array 
//source https://love2dev.com/blog/javascript-remove-from-array/#:~:text=Instead%20of%20a%20delete%20method,from%20the%20middle%20using%20splice.

/*

**Remove the Last element, using pop()
Remove elements from the end of an array using pop, 

***beginning element shift()
From the beginning using shift, 

****middle element splice()
From the middle using splice.

***filter - allows you to programatically remove elements from an Array
The JavaScript Array filter method to create a new array with desired items, 
a more advanced way to remove unwanted elements.

*/

let numbers = [3,4,5,6,7,8]
console.log(numbers.length)

let popNumber = numbers.pop() //remove the last element, returns 8 
console.log(numbers)

numbers.shift()
console.log(numbers) //remove the firs element of the array 


// shift shift shift splice splice splice splice pop pop pop

var arr = [0,1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// The first argument specifies the location at which to begin adding or removing elements. 
// The second argument specifies the number of elements to remove. 
console.log(arr.length)
var removed = arr.splice(5,1);

console.log(removed)
console.log(arr)

//(zero based index)
const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
let removeWendsday = days.splice(2,1)

console.log(days)

var arr2 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];
    
    for( var i = 0; i < arr2.length; i++){ 
                                   
        if ( arr2[i] === 5) { 
            arr2.splice(i, 1); 
            i--; 
        }
    }

    console.log(arr2)