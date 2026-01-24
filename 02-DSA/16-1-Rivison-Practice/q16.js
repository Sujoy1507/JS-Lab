// Take three numbers.
// Find and print the largest number using if else.
// Do not use Math methods.

let prompt = require("prompt-sync")();

let num1 = Number(prompt("First Number"));
let num2 = Number(prompt("Second Number"));

if (num1 > num2) console.log(`${num1} is bigger Than ${num2}`);
else console.log(`${num2} is bigger Than ${num1}`);
