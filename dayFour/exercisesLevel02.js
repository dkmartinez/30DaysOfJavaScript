/**Write a code which can give grades to students according to theirs scores:
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F 

let score = prompt('Put your score: ')
if(score >= 90){

console.log('You have an A')
}

else if (score >= 70)
console.log('You have a B')

else if(score >= 60)
console.log('You have a C')

else if(score >= 50)
console.log('You have a D')

else { 
console.log('You have a F, you need to study more')

}

*/

/**Check if the season is Autumn, Winter, Spring or Summer. 

 * If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer 


let season = prompt('Insert the month')
let convertSeason = season.toLowerCase()

switch(convertSeason){
    case 'september':
        console.log('The season is Autumn')
        break;
    case 'october':
        console.log('The season is Autumn')
        break;
    case 'november':
        console.log('The season is Autumn')
        break;
    case 'march' :
        console.log('The season is Spring')
        break;
    case 'april':
        console.log('The season is Spring')
        break;
    case 'may':
        console.log('The season is Spring')
        break;
    case 'december': 
    console.log('The season is Winter')
    break;
    case 'january':
        console.log('The season is Winter')
        break;
    case 'february':
        console.log('The season is Winter')
        break;
    case 'june': 
    console.log('The season is Summer')
    break;
    case 'july':
        console.log('The season is Summer')
        break
    case 'august' : 
    console.log('The season is Summer')
    break
        default: 
        console.log('Is not a season')
}



let checkDay = prompt('What day is today?')
let checkDay2 = checkDay.toLowerCase();

switch(checkDay2){
    case 'monday': 
    console.log(`${checkDay} is a Working Day`)
    break;
    case 'tuesday': 
    console.log(`${checkDay} is a Working Day`)
    break;
    case 'wednesday': 
    console.log(`${checkDay} is a Working Day`)
    break;
    case 'thursday': 
    console.log(`${checkDay} is a Working Day`)
    break;
    case 'friday': 
    console.log(`${checkDay} is a Working Day`)
    break;
    case 'saturday': 
    console.log(`${checkDay} is a weekend`)
    break;
    case 'sunday': 
    console.log(`${checkDay} is a weekend`)
    break;
    default: 
    console.log('Is not a day')
}

*/