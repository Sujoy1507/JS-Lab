//var let const

const num1 = 12;
console.log(num1);

let num2 = 13;
console.log(num2);

var num3 = 14;
console.log(num3);

//String + String = String (Concatination)
let firstName = "Sujoy";
let lastName = "Saha";

console.log(firstName + lastName);

let name = "Sujoy";
let age = 21;

console.log(`${name}'s is ${age} Year old boy`);

// Q1 How to check Type
// ==> to check type use typeof before that value you want to check type
// ex =>

console.log(typeof name);
console.log(typeof age);

// int + int = int (arthimatic)

let n1 = 1;
let n2 = 2;
console.log(n1 + n2);

// string + int = string (Concatination)

let temp = 15;
let city = "Nadia";

console.log(`Now in ` + city + " has " + temp + " degree celcious");

//using prompt via node

let prompt = require("prompt-sync")();

let roll = prompt("What is your roll number");
let whatName = prompt("Tell me your name");

console.log(`Your name is ${whatName} and your roll number is ${roll}`);

//Swap Variable value
//1st method
let sonu = "bada Watermelon";
let monu = "choto Watermelon";

let extraPerson = sonu;

sonu = monu;
monu = extraPerson;

console.log(`sonu has ${sonu}`);
console.log(`monu has ${monu}`);

//2nd method

let raja = 20;
let praja = 30;
console.log(raja, praja);

raja = raja + praja;
praja = raja - praja;
raja = raja - praja;
console.log(raja, praja);


//3rd method

let k = 30;
let l = 40;
console.log(k,l);

[k,l]=[l,k];
console.log(k,l)