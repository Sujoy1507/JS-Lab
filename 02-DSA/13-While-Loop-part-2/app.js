let prompt = require("prompt-sync")();

let num = Number(prompt("Enter Fucking Number"));
let copyNum = num;

let digit = 0;
let totalDigits = 0;
let sum = 0;
let oddSum = 0;
let evenSum = 0;
let count = 0;
let counter = 0;
let counter13digits = 13;

while (copyNum > 0) {
    counter++;
    copyNum = Math.floor(copyNum / 10);
}

if (counter === 10) {
    totalDigits = 10;

    while (num > 0) {
        digit = num % 10;
        totalDigits--;
        sum += digit * totalDigits;
        num = Math.floor(num / 10);
    }
    if (sum % 11 === 0) console.log("This is a ISBN Number");
    else console.log("This is not a ISBN Number");
} else if (counter === 13) {
    totalDigits = 13;

    while (num > 0) {
        digit = num % 10;

        if (counter13digits % 2 === 0) {
            sum += digit * 3;
        } else {
            sum += digit * 1;
        }

        // sum = oddSum + evenSum;

        counter13digits--;
        num = Math.floor(num / 10);
    }
    if (sum % 10 === 0) console.log("This is a ISBN Number");
    else console.log("This is not a ISBN Number");
} else console.log("Fuck You");
