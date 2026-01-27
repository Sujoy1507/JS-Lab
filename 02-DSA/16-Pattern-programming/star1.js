let prompt = require('prompt-sync')()

let n = Number(prompt('Enter Aumber: '))

for (let i = 1;i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write('* ')
    }
    console.log()
}

for (let i=1;i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write('+ ')
    }
    console.log();
}

for (let i=1;i<=n;i++){
    for(let j=n;j>=i;j--){
        process.stdout.write('+ ')
    }
    console.log();
}

for (let i=1;i<=n;i++){
    for(let j=n;j>=i;j--){
        process.stdout.write(j.toString())
        process.stdout.write(' ')
    }
    console.log();
}


for (let i=1;i<=n;i++){
    for(let j=n;j>=i;j--){
        process.stdout.write(
            String.fromCharCode(97+j-1)
        )
        process.stdout.write(' ')
    }
    console.log();
}