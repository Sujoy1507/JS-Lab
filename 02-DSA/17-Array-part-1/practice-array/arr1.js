// Goal
// Create a new array with no duplicates.
// Keep only the first time each number appears.

const numbers = [2, 4, 5, 2, 3, 4, 6, 5, 7];
let result = [];

for (let i = 0; i < numbers.length; i++) {
    let isPresent = false;

    for (let j = 0; j < result.length; j++) {
        if (numbers[i] === result[j]) isPresent = true;
    }

    if(!isPresent) result.push(numbers[i])
}

console.log(result)
