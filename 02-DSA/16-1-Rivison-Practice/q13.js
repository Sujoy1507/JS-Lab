// Using a for loop count how many numbers between 1 and 100 are even.

let i = 1 ;
let count = 0;

while(i<=100){
    if(i%2===0) count++;
    i++;
}
console.log(count)