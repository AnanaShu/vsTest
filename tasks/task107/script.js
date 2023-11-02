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
function t4() {
    console.log(1);
    console.log(2);
    console.log(3);
}
t4();
//прерывание функции
//эмулирование indexOf

function indexOfEmul(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

let result = indexOfEmul([22, 33, 44, 55], 44);
console.log(result);

//Пользователь вводит количество лет
document.querySelector(".b-4").addEventListener("click", function () {
    let year = +document.querySelector(".i-4").value;
    if (isNaN(year)) return;
    if (year <= 0 || year > 140) return;
    document.querySelector(".out-4").innerHTML = 2023 - year;
});

//ex 5 сумма
console.group("example 5");
const arr5 = [[2, 3, 4, 5], [6, 7, 8]];
function t5() {
    let s = 0;
    //цикл для перебора внешнего массива
    for (let i = 0; i < arr5.length; i++) {
        s += sum(arr5[i]);
    }
    return s;;
}

//цикл для суммирования внутреннего массива
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(t5());
console.groupEnd();

//ex 6 Return
console.group("example 6");

function t6() {
    let a = 88;
    return (
        a); //с return переносить можно только со скобками 
}



console.log(t6());


console.groupEnd();

//ex 7 Return
console.group("example 7");
const arr7 = [[3, 4, 5], [6, 7, 9], [7, 7, 1], [2, 2]];
const evenArr7 = arr7.filter(function (item) {
    return (sum(item) % 2 === 0);
});
// function t7() {

// }
console.log(evenArr7);


console.groupEnd();

//ex 8 return функции
function t8() {
    return sum;
}

let s = t8();
console.log(s([10, 20, 30]));