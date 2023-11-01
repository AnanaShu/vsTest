//переменные
let showModal = document.querySelector("#modal-show");
let hideModal = document.querySelector("#modal-hide");
let modal = document.querySelector(".modal");

//показать окно
function show() {
    modal.style.display = "block";
    modal.style.backgroundColor = "pink";
    modal.style.borderRadius = "20px";
    modal.style.borderWidth = "5px";
}

//скрыть окно
function hide() {
    modal.style.display = "none";
}

//события
showModal.onclick = show;
hideModal.onclick = hide;