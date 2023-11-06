//контекст = область видимости + переменная this
//this - это ссылка на объект, кот вызывает код в данный момент
let count = 0;

function f1() {
    console.log(count);
    console.log(this);
    this.textContent = count;
    count++;
}

//document.querySelector(".b-1").addEventListener("click", f1);


//arrow не имеют this
// const f2 = () => {
//     console.log(count);
//     console.log(this);
//     this.textContent = count;//!!!
//     count++;
// }

// document.querySelector(".b-2").addEventListener("click", f2);

//call
// f1.call(document.querySelector(".b-1"));
// f1.call(document.querySelector(".b-1"));
// f1.call(document.querySelector(".b-2"));

document.querySelector(".b-1").addEventListener("click", () => {
    f1.call(document.querySelector(".b-2"));
});

function f3(count) {
    console.log(count);
    console.log(this);
    this.textContent = count;
}
