// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
const oldPointStructure= {
1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
2: ['D', 'G'],
3: ['B', 'C', 'M', 'P'],
4: ['F', 'H', 'V', 'W', 'Y'],
5: ['K'],
8: ['J', 'X'],
10: ['Q', 'Z']
};

let newPointStructure = {};
function transform(obj) {
for (let x in obj) {
for (let i = 0; i < obj[x].length; i++) {
newPointStructure [(obj[x][i]).toLowerCase()] = parseInt (x);
}
newPointStructure[' '] = 0; 
}}
transform(oldPointStructure);
///

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
const input = require ("readline-sync");
let question = input.question(`Welcome to the Scrabble score calculator. 
Which scoring algorithm would you like to use?
0 - Scrabble: The traditional scoring algorithm.
1 - Simple Score: Each letter is worth 1 point.
2 - Bonus Vowels: Vowels are 3 pts, consonants are 1pt
Enter 0,1,2:`);
return question;
}

let simpleScore;

let vowelBonusScore;

let scrabbleScore;

let scoringAlgorithms =
[
{
name:"Scrabblescore",
description: "The traditional scoring algorithm",
scoreFunction:
function scrabbleScore(word) {
let total=0;
for (let i = 0; i < word.length; i++){

total += Number (newPointStructure[word[i]]);
};
return total;
}
}, 
{
name: "simpleScore",
description: "Each letter is worth 1 point",
scoreFunction:
function simpleScore (word){
let total=0;
for (let i = 0; i < word.length; i++) {
total = word[i]===' '? total : total+1;
}
return total;
}},
{
name: "vowelBonusScore",
description: "Vowels are 3 pts. consonants are 1 pts.",
scoreFunction:
function vowelBonusScore(word){
let total=0;
let vowels=['a','e','i','o','u'];
for (let i = 0; i < word.length; i++) {
if(vowels.includes(word[i])) {
total += 3 }
else if(word[i]===' '){
}
else {total += 1}}
return total;
}
}
];

function scorerPrompt() {
const input = require('readline-sync');
let word = input.question("Enter a word to play:");
return word.toLowerCase();
}

function runProgram() {
let score = initialPrompt();
console.log(typeof score, score);
let newWord = scorerPrompt();
if (score === '2' || score === '1'){

console.log(`Using Algorithm : ${scoringAlgorithms[score].name}`);
console.log(`Score for the word ${newWord} is: ${scoringAlgorithms[score].scoreFunction(newWord)}`);

}  else {

console.log(`Using Algorithm : ${scoringAlgorithms[0].name}`);
console.log(`Score for the word ${newWord} is: ${scoringAlgorithms[0].scoreFunction(newWord)}`)}
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //

module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
 