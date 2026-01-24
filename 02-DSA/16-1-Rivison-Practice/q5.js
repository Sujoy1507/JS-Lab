// Using a loop from 1 to 20.
// Skip numbers divisible by 3 using continue.
// Stop the loop completely when number becomes 17 using break

for(let i = 1 ; i<=20;i++){
    if(i%3===0) continue;
    else if (i===17) break
    console.log(i)
}