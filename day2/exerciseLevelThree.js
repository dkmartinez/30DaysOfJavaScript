// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
//console.log(love.match('Love'))
console.log(love.match(/love/gi))

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.match(/because/gi))
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let regEx = '%'

//console.log(sentence2.match(regEx))
console.log(sentence2.replace(regEx,''))


// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let salary = 5000 + 10000 + 15000
console.log(salary)