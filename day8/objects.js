// Create an empty object called dog
// const dog ={}
// // Print the the dog object on the console

// console.log(typeof dog)

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

const dog ={
name: 'inu',
legs: 4,
color: 'black',
age: '2',
bark: function(){
    return 'woof woof'
}

}

console.log(dog.bark())
console.log(dog)
console.log(`His name is ${dog.name} and He's ${dog.age} years old`)
//Set new properties the dog object
dog.personality='curious'
console.log(dog)
