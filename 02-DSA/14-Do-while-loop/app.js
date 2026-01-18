//  Satsta Calculator

let prompt = require("prompt-sync")();
let n;

do {
    console.log("Type 1 for addition");
    console.log("Type 2 for Subtraction");
    console.log("Type 3 for Multiplication");
    console.log("Type 4 for Division");
    n = Number(prompt("What You Want to Perform :-> "));

    let a = Number(prompt("Enter First Number"));
    let b = Number(prompt("Enter Second Number"));

    switch (n) {
        case 1:
            {
                console.log(a + b);
            }
            break;
        case 2:
            {
                console.log(a - b);
            }
            break;
        case 3:
            {
                console.log(a * b);
            }
            break;
        case 4:
            {
                console.log(a / b);
            }
            break;
        default:
            console.log("invalid number");
    }

    console.log("If You Want to perform the action again then type 10 ");
    n = Number(prompt("What You Want to Perform :-> "));
} while (n === 10);
