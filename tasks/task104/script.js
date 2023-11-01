let btn = document.querySelector("#btn"); //refresh
let showModal = document.querySelector("#modal-show");
let hideModal = document.querySelector("#modal-hide");
let styleModal = document.querySelector("#modal-style");
let modal = document.querySelector(".modal"); //модальное окно
hide();


function show() {
    modal.hidden = false;
    modal.style.borderRadius = "10%";
    modal.style.border = "1px solid red";
}

function hide() {
    modal.hidden = true;
}

function changeStyle() {
    modal.style.borderRadius = "20px";
    modal.style.border = "5px solid red";
}

function reload() {
    location.reload();
}

showModal.onclick = show;
styleModal.onclick = changeStyle;
hideModal.onclick = hide;
btn.onclick = reload;