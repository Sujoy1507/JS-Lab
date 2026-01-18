let propt = require("prompt-sync")();

let num = Number(propt("Enter a Numbre "));

let i = 2;
let isPrime = false;

if (num === 2) isPrime = true;
else if (num <= 1) isPrime = false;
else {
    do {
        if (num % i === 0) {
            isPrime=true
        }
        i++;
    } while (i * i <= num);
}

console.log(isPrime);