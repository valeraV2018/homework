const loginbutton = document.querySelector(".button");
const modal = document.querySelector(".modal");
const modalclosebutton = document.querySelector(".modal-close-button");

function openModal() {
    modal.classList.add("modal-active");
}

function closeModal() {
    modal.classList.remove("modal-active");
}

loginbutton.addEventListener("click", openModal);

modalclosebutton.addEventListener("click", closeModal);

//закрытие на Esc
function handleExcapeDown(event) {
    if (event.key === 'Escape') {
        closeModal(event);
    }
}

document.addEventListener('keydown', handleExcapeDown);