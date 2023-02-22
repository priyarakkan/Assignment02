
var coinFlip = Math.round(Math.random());
console.log(typeof coinFlip);
console.log(coinFlip);
var choice = window.prompt('Select Head or Tail :').toLowerCase();
console.log(choice);
if (choice == 'head') {
    if (coinFlip >= 5) {
        document.write(`The flip was heads and you chose heads...you win!`);
    }
    else if (coinFlip < 5) {
        document.write(`The flip was heads but you chose tails...you lose!`);
    }
}
 else if (choice == 'tail') {
    if (coinFlip >= 5) {
        document.write(`The flip was tails but you chose heads...you lose!`);
    }
    else if (coinFlip < 5) {
        document.write(`The flip was tails and you chose tails...you win!`);
    }

}


