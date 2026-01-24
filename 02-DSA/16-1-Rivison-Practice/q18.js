    // Using a for loop print all prime numbers between 1 and 50.

    let isPrime = false;
    let counter = 0;
    for (let i = 1; i <= 50; i++) {
        let p = i;
        let prime = 0

        for(let j = 1 ;j<=p;j++){
            if (p%j===0){
                counter++;
                counter===2?prime=j:prime=0
            }
        }

        console.log(prime)

    }
