// Negetive Number ko posetive karta hai and Posetive ko Posetive rahene deta hai
console.warn("This is Quesction 1 => This  is --> Math.abs");
console.log(Math.abs(-1));

// Ek Decimal Number ko ek Level upar le jata hai
console.warn("This is Quesction 2 =>  This  is --> Math.ceil");
console.log(Math.ceil(2.3));

// Ek Decial Numbe ko ek level Niche leke jata hai
console.warn("This is Quesction 3 =>  This  is --> Math.floor");
console.log(Math.floor(3.53));

// Round Figure me value ko dikhata hai
console.warn("This is Quesction 4 =>  This  is --> Math.round");
console.log(Math.round(4.3));
console.log(Math.round(4.9));

// Point ke bad ka sara value Remove kardeta hai
console.warn("This is Quesction 5 =>  This  is --> Math.trunc");
console.log(Math.trunc(5.334543));

// Kisivi value ka power check karne keliye use hota hai
console.warn("This is Quesction 5 =>  This  is --> Math.pow");
console.log(Math.pow(6, 3));
console.log(Math.pow(10, 3));

// Numbers ke bich se Max value nikal ke deta hai
console.warn("This is Quesction 5 =>  This  is --> Math.max");
console.log(Math.max(1, 2, 3, 4, 9, 6, 5, 7, 8));

// Numbers ke bich se Min value return karta hai
console.warn("This is Quesction 5 =>  This  is --> Math.min");
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));

// Random Number lane keliye use hota hai 0-1 ke bich ka koyivi number return karta hai
console.warn("This is Quesction 5 =>  This  is --> Math.random");
console.log("0-1");
console.log(Math.random());
console.log("1-10");
console.log(Math.random() * 10);
console.log("11-100");
console.log(Math.random() * 100);
console.log("101-1000");
console.log(Math.random() * 1000);

console.warn("This is Quesction 5 =>  This  is --> toFixed");
console.log((12.12325145).toFixed(1));

//
//
//Compound Interest = (P x R x T) / 100

let prompt = require ("prompt-sync")();

let p = prompt('Enter Principle')
let r= prompt('Enter rate of interest')
let t = prompt('Enter time')
console.log(p*Math.pow(1+(r/100),t)-p)


// OTP Genarator
console.log(Math.trunc((Math.random()*9000)+1000))
