// Take a character input.
// If it is a vowel print Vowel.
// Otherwise print Consonant using switch case.

let prompt = require("prompt-sync")();

let char = prompt("What is Your Character");

if ("aeiou".includes(char)) console.log("Your char is a Vowel");
else console.log("No its consonent");


