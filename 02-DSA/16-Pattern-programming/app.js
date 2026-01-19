let prompt = require("prompt-sync")();

let n = Number(prompt("enter fucking number"));
let original = n;
let digit = 0;
let sum = 0;
do {
    digit = n % 10;
    let i = digit;
    let fact = 1;
    do {
        fact *= i;
        i--;
    } while (i > 0);
    sum += fact;
    n = Math.floor(n / 10);
} while (n > 0);

console.log(original === sum ? "isStrong" : "noo");
