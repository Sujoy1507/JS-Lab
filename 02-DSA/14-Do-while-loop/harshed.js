let prompt = require("prompt-sync")();

let num = Number(prompt("Enter a Number"));
let original = num;

let digit = 0;
let sum = 0;
do {
    digit = num % 10;
    sum += digit;

    num = Math.floor(num / 10);
} while (num > 0);

console.log((original%sum)===0?'isHarshed':'Nooo')