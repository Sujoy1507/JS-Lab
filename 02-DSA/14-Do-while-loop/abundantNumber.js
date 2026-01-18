let prompt = require("prompt-sync")();
let num = Number(prompt("Enter Your Fucking Number"));
let original = num;
let i = 1;
let sumOfDivisor = 0;

do {
    if(original%i===0){
        sumOfDivisor+=i
    }
    i++;
} while (i <= original / 2);

console.log(sumOfDivisor>num?'isAbundant':'Noo')