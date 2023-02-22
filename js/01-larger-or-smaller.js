/* Usage: Use simple conditional statements

 Then, display only the larger of the two 
within the browser window.
Don’t forget to handle the fact that the two could be equal.*/
let number1 = prompt('Enter the first integer: ');
let number2 = prompt('Enter the second integer: ');
if (number1 > number2) {
    document.write(`The first integer is larger number.`);   
} else if (number1 < number2) {
    document.write(`The second integer is larger number.`);
} else {
    document.write(`Both the numbers are equal`);
}
