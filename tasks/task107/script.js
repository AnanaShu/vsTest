function f1(x, y) {
    return x + y;
}

function randInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let r = randInt(222, 333);
console.log(r);

console.log(f1(100, 200));
//document.querySelector(".out-1").textContent = f1(25, 25);
document.querySelector(".out-1").style.background = "rgb(23,156,201)";
document.querySelector(".out-1").style.background =
    `rgb(${randInt(0, 255)},${randInt(0, 255)}, ${randInt(0, 255)})`;

//вывод данных, введенных пользователем
document.querySelector(".b-3").addEventListener("click",
    function () {
        const s = document.querySelector(".i-3").value;
        document.querySelector(".out-2").innerHTML = "Hello, " + clearText(s) + "!";
        console.log("Hello, " + clearText(s) + "!");
    });

function clearText(data) {
    return data.trim().toLowerCase();
}
