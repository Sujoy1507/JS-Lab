let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a Number To check Which Day the number fals - "));

switch (n) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednusday");
        break;
    case 5:
        console.log("Thrusday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saterday");
        break;
    default:
        console.log("invalid number");
}
