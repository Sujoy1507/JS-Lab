const fruits = ["apple", "banana", "mango", "orange", "grape"];
let count = 0;

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

    count++;
}

console.log(`The total length of this fruit array is ${count}`);

console.log("Q 2");

const numbers = [3, 7, 2, 9, 5, 8];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(`Numbers array Numbers = ${numbers}`);
console.log(`The total of all numbers in the numbers array is ${sum}`);

console.log("Q 3");

const numbersArr = [4, 9, 2, 7, 5, 1];

let large = 0;

for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] > large) large = numbersArr[i];
}

console.log(large);

console.log("Count how many scores are greater than or equal to 60.");

const scoresArr = [45, 67, 89, 34, 76, 90, 54];

let CountScore = 0;

for (let i = 0; i < scoresArr.length; i++) {
    if (scoresArr[i] >= 60) {
        CountScore++;
    }
}

console.log(CountScore);

console.log("Create a new array that contains only marks greater than 50.");

const marksArr = [12, 45, 67, 23, 89, 34, 90];

let marksGreaterThen50 = [];

for (let i = 0; i < marksArr.length; i++) {
    if (marksArr[i] > 50) marksGreaterThen50.push(marksArr[i]);
}
console.log(marksGreaterThen50);

console.log("Find the smallest number in the array using a loop.");

const priceArr = [120, 340, 560, 90, 30, 780];
let smallest = priceArr[0];

for (let i = 0; i < priceArr.length; i++) {
    if (priceArr[i] < smallest) smallest = priceArr[i];
}

console.log(smallest);

console.log("Create a new array where each name is in uppercase.");

const namesArr = ["rahul", "amit", "suman", "neha", "rohit"];
let newName = [];

for (let i = 0; i < namesArr.length; i++) {
    newName.push(namesArr[i].toUpperCase());
}

console.log(newName);

console.log(
    "Create two new arrays  One array with only numbers. One array with only strings.",
);

const mixedArr = [10, "hello", 20, "world", 30, "js"];
let nArray = [];
let sArray = [];

for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] === "number") nArray.push(mixedArr[i]);
    else sArray.push(mixedArr[i]);
}

console.log(`This is the String Array ${sArray}`);
console.log(`This is the Numbers Array ${nArray}`);

console.log(`Create a new array with no duplicate values.
Keep only the first occurrence of each number.`);

const dupArr = [2, 4, 5, 2, 3, 4, 6, 5, 7];

let resultDup = [];

for (let i = 0; i < dupArr.length; i++) {
    let count1 = 0;

    for(let j  = 0;j<resultDup.length;j++){
        if(dupArr[i]===resultDup[j]){
            count1++
        }
    }
    if(count1===0){
        resultDup.push(dupArr[i])
    }
    
}

console.log(resultDup);
