/* To complete the game follow the steps outlined below:
1.Begin your application by creating a variable called coinFlip
 and set it equal to a random number. 
 You will have to use a Math method to get this number:
let randomNum = Math.round(Math.random())
2.Prompt the user to select “Heads or Tails” and 
set the result to a new variable called choice.
3.Use a conditional to check the result of the coin flip. 
If it’s less than a certain number, it will be heads. 
If it’s greater than a certain number, it will be tails.
4.If the result is heads and the user selects heads, 
display the following message within an alert:
"The flip was heads and you chose heads...you win!"
5.If the result is heads and the user selects tails, 
display the following message within an alert:
"The flip was heads but you chose tails...you lose!"
6.If the result is tails and the user selects heads, 
display the following message within an alert:
"The flip was tails but you chose heads...you lose!
7.If the result is tails and the user selects tails, 
display the following message within an alert:
"The flip was tails and you chose tails...you win!"
*/
var coinFlip = Math.round(Math.random());
console.log(typeof coinFlip);
console.log(coinFlip);
let choice = prompt('Select Head or Tail :').toLowerCase();
console.log(choice);
if (coinFlip >= 5) {
    if (choice == head) {
        document.write(`The flip was heads and you chose heads...you win!`);
    }
    else if (choice == tail) {
        document.write(`The flip was heads but you chose tails...you lose!`);
    }
} else if (coinFlip < 5) {
    if (choice == head) {
        document.write(`The flip was tails but you chose heads...you lose!`);
    }
    else if (choice == tail) {
        document.write(`The flip was tails and you chose tails...you win!`);
    }

}


