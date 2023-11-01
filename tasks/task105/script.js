function unixTime() {
    let time = Math.floor(new Date().getTime());
    console.log(time);
}

unixTime();

function randomInt() {
    console.log(getRandomInt(100, 200));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomInt();

function count() {
    let c = 9;
    c++;
    console.log(c);
}

count();

document.querySelector(".out-1").addEventListener("mousemove", blockWidth);

let w = 100;

function blockWidth() {
    w++;
    document.querySelector(".out-1").style.width = w + "px";
}