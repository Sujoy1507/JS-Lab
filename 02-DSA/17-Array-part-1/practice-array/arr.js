// Create a new array that contains only the numbers which appear more than once.
// Each number should appear only once in the result.
// Maintain the order of first appearanc

const numbers = [2, 4, 5, 2, 3, 4, 6, 5, 7];

let fressArr = [];

for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            count++;
        }
    }

    let isPresent = false;
    for (let k = 0; k < fressArr.length; k++) {
        if (fressArr[k] === numbers[i]) isPresent = true;
    }

    if (count > 1 && !isPresent) {
        fressArr.push(numbers[i])
    }
}

console.log(fressArr);
