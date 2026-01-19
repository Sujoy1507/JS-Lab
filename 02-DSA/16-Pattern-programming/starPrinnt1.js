let prompt = require("prompt-sync")();

let n = Number(
    prompt("Enter How meny  times do you want to print those * -:-"),
);

for (let i = 1; i <= n; i++) {
    for (let i = 1; i <= n; i++) {
        process.stdout.write(`*`);
    }
}
