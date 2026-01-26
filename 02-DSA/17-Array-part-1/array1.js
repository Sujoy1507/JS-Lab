let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(7); // Insert From Last
console.log(arr);
arr.pop(); // Delete From Last
console.log(arr);
arr.shift(); // Delete From First
console.log(arr);
arr.unshift(1); // Insert From First
console.log(arr);

// how to get eact element from an array

let arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

let arr3 = new Array(3).fill(true);
console.log(arr3);
arr3[7] = 7;
arr3[6] = 6;
arr3[5] = 5;
arr3[4] = 4;
arr3[3] = 3;
arr3[2] = 2;
arr3[1] = 1;
arr3[0] = 0;
console.log(arr3);
console.log(arr3.length);

let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a Number to set Size of arr4 :- "));
let arr4 = new Array(n);

for (let i = 0; i < arr4.length; i++) {
    arr4[i] = Number(prompt(`Enter value for index ${i} :- `));
}

console.log(arr4);

// Sum of array's Element

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (let i = 0; i < arr5.length; i++) {
    sum += arr5[i];
}
console.log(sum);

// Max Element From an array

let arr6 = [1, 2, 3, 4, 5, 6, 7];

let maxElem = 0;

for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] > maxElem) maxElem = arr6[i];
}

console.log(maxElem);

// Find Second Max from an array

let arr7 = [112, 32, 63, 24, 85, 456, 877, 8768, 9];

let max = arr7[0];
let secMax = arr[0];

for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] > max) {
        secMax = max;
        max = arr7[i];
    }
}

console.log(secMax);
console.log(max);

// Reverse an array

let arr8 = [1, 2, 3, 4, 5, 6];

let temp = [];

for (let i = 0; i < arr8.length; i++) {
    temp.unshift(arr8[i]);
}

console.log(temp);

let arr9 = [1, 2, 3, 4, 5, 6];

let temp9 = new Array(arr9.length);

let i = arr9.length - 1;

for (let j = 0; j < temp.length; j++) {
    temp9[j] = arr9[i];
    i--;
}

console.log(arr9);
console.log(temp9);

let a10 = [1, 2, 3, 4, 5, 6, 7];

let a = 0,
    j = a10.length - 1;

while (a < j) {
    let t10 = a10[a];
    a10[a] = a10[j];
    a10[j] = a10[t10];
    a++;
    j--;
}

console.log(a10);

// Zero left other right

let a11 = [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0];

let i11 = 0,
    j11 = 0;

while (i11 < a11.length) {
    if (a11[i11] === 0) {
        let temp = a11[i11];
        a11[i11] = a11[j11];
        a11[j11] = temp;
        j11++;
    }

    i11++;
}

console.log(a11);

// Move all the negative to left

let a12 = [-1, 3, -2, 4, -3, -5, 6, 7, 8, -6];

let s = 0,
    d = 0;

while (s < a12.length) {
    if (a12[s] < 0) {
        let t = a12[s];
        a12[s] = a12[d];
        a12[d] = t;
        d++;
    }

    s++;
}

console.log(a12)