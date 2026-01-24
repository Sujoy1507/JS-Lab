// Using a loop from 1 to 30.
// Skip numbers divisible by 4.
// Stop the loop when number becomes 25.

let i = 1;

do {
    if (i % 4 === 0) {
        i++;
        continue;
    }
    if (i === 25) break;
    console.log(i);
    i++;
} while (i <= 30);
