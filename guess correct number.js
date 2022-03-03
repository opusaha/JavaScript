
// Number input deowr por correct or incorrect oita bole debe 
// eai loop 5 bar cholbe.


var numberOfWon = 0;
var numberOfLose = 0;
for (let i = 0; i < 5; i++) {
var yourNumber = parseInt(prompt("Enter a number between 1 to 5"));
var newNumber = Math.floor(Math.random() *5)+1;
if (yourNumber == newNumber) {
console.log("You are a Winner");
numberOfWon++
} else {
console.log("Sorry, The random number was "+ newNumber);
numberOfLose++
}
}
console.log("Your total won = " + numberOfWon);
console.log("Your total lose = " + numberOfLose);