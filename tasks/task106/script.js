function f(a, b, c) {
    console.log(a + b + c);
}

f(1, 2, 3);

function showSum(elem, x, y) {
    document.querySelector(elem).textContent = x + y + " " + "function 1 is working";
}


function showSum2(elem, x, y) {
    elem.textContent = x + y + " " + "function 2 is working";
}

function showSum3(x, y, elem = ".out-3") {
    console.log(arguments);
    document.querySelector(elem).textContent = x + y + " " + "function 3 is working";
}

showSum(".out-1", 5, 6);
showSum2(document.querySelector(".out-2"), 7, 10);
showSum3(5, 1);

function showSumAll() {
    console.log(arguments);
    // let sum = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }
    let sum = Array.from(arguments).reduce((accum, item) => accum += item);
    console.log(sum);
}

showSumAll(3, 5, 7, 8, 1);

function showSumAll2(...args) {
    console.log(args);
    let sum = args.reduce((accum, item) => accum += item);
    console.log(sum);
}

showSumAll2(3, 5, 7, 8, 1);

//функция, как аргумент
function showAll(res) {
    document.querySelector(".out-4").innerHTML = `<b>${res}</b>`;
}

function getSum(drawFun, ...num) {
    drawFun(num);
}

getSum(showAll, 45, 56);