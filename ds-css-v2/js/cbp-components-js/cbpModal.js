const modal = document.querySelector(".cbp-modal");

const openModal = () => {
  modal.style.display = "block";
}

const closeModal = () => {
  modal.style.display = "none";
}

window.onclick = (e) => {
  if (e.target == modal) {
    closeModal()
  }
}

// For demo purposes only

const dangerBtn = document.querySelector(".header-danger");
const simpleBtn = document.querySelector(".simple-modal")
const modalHeader = document.querySelector(".cbp-modal__header");
const btns = document.querySelectorAll(".cbp-btn");

dangerBtn.addEventListener('click', (e) => {
  modalHeader.classList.toggle('cbp-modal__header--danger');
  btns[btns.length - 1].classList.toggle('cbp-btn--danger')
})

simpleBtn.addEventListener('click', (e) => {
  const hr = document.querySelector(".cbp-modal__content hr");
  if (modalHeader.style.display === "none") {
    modalHeader.style.display = "flex"
    hr.style.display = "block"
  } else {
    modalHeader.style.display = "none"
    hr.style.display = "none"
  }
})