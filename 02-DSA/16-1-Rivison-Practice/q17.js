// Create a simple calculator using switch case.
// Take two numbers and an operator like + - * /.
// Print the result based on the operator.

let prompt = require("prompt-sync")();

console.log("1 = Addition");
console.log("2 = Substraction");
console.log("3 = Divison");
console.log("4 = Multiplicationn");

let n = Number(prompt("What is your Number:- "));

console.log(
    n === 1
        ? `${n} so Addition will perform`
        : n === 2
          ? `${n} so Subtraction will perform`
          : n === 3
            ? `${n} so Division will perform`
            : n === 4
              ? `${n} so Multiplication will perform`
              : "Invalid choice",
);

let num1 = Number(prompt('First NUmber'))
let num2 = Number(prompt('Second Number'))


switch(n){
    case 1 : console.log(num1+num2)
    break;
    case 2 : console.log(num1-num2)
    break;
    case 3 : console.log(num1/num2)
    break;
    case 4 : console.log(num1*num2)
    break;
    default : console.log('Thank You')
}
