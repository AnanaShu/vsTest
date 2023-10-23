//кнопка показать окно
let modalShow = document.querySelector("#modalShow");
//кнопка скрыть окно
let modalHide = document.querySelector("#modalHide");
let modal = document.querySelector(".modal");

//события
modalShow.onclick = show;
modalHide.onclick = hide;

function show() {
    modal.style.display = "block";
    modal.style.borderRadius = "20px";
    modal.style.borderWidth = "50px";
}

function hide() {
    modal.style.display = "none"
}

