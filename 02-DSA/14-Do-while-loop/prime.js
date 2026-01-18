let prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number"));

let divisorCount = 0;

let i = 1;

do {
    if (num % i === 0) {
        divisorCount++;
    }
    i++;
} while (i <= num / 2);


if(divisorCount+1===2){console.log('isPrime')}
else console.log('Nooo')