const input = document.querySelector("input");

function debounce(fnc, delay) {
    let timer;
    return function (...agrs) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...agrs);
        }, delay);
    };
}

input.addEventListener(
    "input",
    debounce(function () {
        console.log("clicked");
    }, 1000)
);
