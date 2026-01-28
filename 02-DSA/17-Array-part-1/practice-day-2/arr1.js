console.log("Reverse the array using a loop.");

const numsArr = [1, 2, 3, 4, 5];

let revNum = [];

for (let i = 0; i < numsArr.length; i++) {
    revNum.unshift(numsArr[i]);
}

console.log(revNum);

console.log("Find the second largest number in the array.");

const nums2Arr = [10, 5, 20, 8, 15];
let largestNum = nums2Arr[0];
let secLarg = nums2Arr[0];

for (let i = 1; i < nums2Arr.length; i++) {
    if (nums2Arr[i] > largestNum) {
        secLarg = largestNum;
        largestNum = nums2Arr[i];
    } else if (nums2Arr[i] < largestNum && nums2Arr[i] > secLarg) {
        secLarg = nums2Arr[i];
    }
}

console.log(largestNum);
console.log(secLarg);

console.log("Create a new array where each number is squared.");

const nums3Arr = [1, 2, 3, 4, 5, 6];
let squireNumArr = [];

for (let i = 1; i < nums3Arr.length; i++) {
    squireNumArr.push(nums3Arr[i] * nums3Arr[i]);
}
console.log(squireNumArr);

console.log(`Create a new array called even.
Store only the even numbers using a loop.`);

const nums = [3, 6, 9, 12, 15, 18];

let even = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) even.push(nums[i]);
}

console.log(even);

console.log();

console.log(`Calculate the sum of only odd numbers.`);
const data = [1, 2, 3, 4, 5, 6];

let sumOfOdd = 0;

for (let i = 0; i < data.length; i++) {
    sumOfOdd += data[i];
}
console.log(sumOfOdd);

console.log();

console.log(`Create a new array with no duplicate values.
Keep only the first occurrence.`);

const items = ["pen", "book", "pen", "pencil", "book"];
let itemdup = [];

for (let i = 0; i < items.length; i++) {
    let count = 0;
    for (let j = 0 ; j<itemdup.length;j++){
        if(items[i]===itemdup[j]) count++
    }

    if(count===0) itemdup.push(items[i])
}
console.log(itemdup)

console.log();

