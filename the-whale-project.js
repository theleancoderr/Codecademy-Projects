// Practice for loops and Array
const input = 'turpentine and turtles';
const vowels = ['a' ,'e', 'i', 'o', 'u'];
let resultArray = [];

for(let i = 0; i < input.length; i++){
  if(input[i] === 'e' || input[i] === 'o'){
      resultArray.push(input[i]);
  }
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(vowels[j]);
    }
  }
}
console.log(resultArray.join('').toUpperCase());
