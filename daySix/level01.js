// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//   //Iterate 0 to 10 using for loop, do the same using while and do while loop
//   for(j=0; j <= 10; j++) {
//       console.log(j)

//   }

// let i=0;
//   while(i <= 10){
//     console.log(`Usando ciclo while ${i}`)
//     i++
//   }


// k= 0
//   do{
//       console.log(`Usando ciclo do while ${k}`)
//       k++
//   }while(k <= 10)

//   //Iterate 10 to 0 using for loop, do the same using while and do while loop

//   for(i=10; i>-1; i--){
//       console.log(i)
//   }

// i=10
//   while(i>-1){
//       console.log(`Usando while ${i}`)
//       i--;
//   }
  
//   l=10
//   do{ console.log(`usando do while ${l}`)
//       l--}
//     while(l>-1)

// //Iterate 0 to n using for loop

// // Write a loop that makes the following pattern using console.log():
// // let letter = '#'

// // for(const prinT of letter){
// //     console.log(letter+letter)
// // }

// Write a loop that makes the following pattern using console.log():

for(i=0; i<8; i++)
{
  for (j=1; j<=i; j++)
{
  document.write("#")
 }
 document.write("</br>")
}
  
for(i=0; i<4; i++){
  for(j=1; j<=i; j++){
    console.log('#')
  }
  console.log('\n')
}


// Use loop to print the following pattern:

// for(k=0; k<=10; k++){
//   console.log(`${k} * ${k} = ${k*k}`)
// }

// for(k=0; k<=10; k++){
//   console.log(`${k} * ${k} ^2 = ${k*k} ^3 = ${k*k*k}`)
// }


// Use for loop to iterate from 0 to 100 and print only even numbers


for(i=0; i<=100; i++){
  if(i % 2 ==0){
    console.log(`Even numbers ${i}`)
  }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers

for(i=0; i<=100; i++){
  if(i % 2 != 0){
    console.log(`Odd number ${i}`)
  }
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.


// for(i=0; i<=100; i++){
//   console.log()
// }