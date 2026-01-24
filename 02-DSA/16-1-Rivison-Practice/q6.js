// Take a number.
// If it is even print Even number otherwise print Odd number.
// Use conditional assignment if possible.

let prompt = require('prompt-sync')()

let isOdd = true;
let n = Number(prompt('enter number'))
if(n%2===0) isOdd=true;
else isOdd = false;

let num = (isOdd)?'Odd':'even'

console.log(num)
