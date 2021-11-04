const modalTarget = document.querySelectorAll('[data-modal-target]');
const modalClose = document.querySelectorAll('[data-modal-close]');

// Open Modal
modalTarget.forEach(modal => {
  modal.addEventListener('click', (e) => {
    const modal = document.querySelector(`#${e.target.dataset.modalTarget}`);
    modal.style.display = "block";
  })
})

// Close Modal
modalClose.forEach(close => {
  close.addEventListener('click', (e) => {
    const closestModal = e.target.closest(".cbp-modal");
    closestModal.style.display = "none";
  })
})

// Close Modal from Overlay
window.onclick = (e) => {
  if (e.target.classList.contains('cbp-modal')) {
    e.target.style.display = "none";
  }
}

// For demo purposes only

const dangerBtn = document.querySelectorAll(".header-danger");
const simpleBtn = document.querySelectorAll(".simple-modal");
const modalHeader = document.querySelector(".cbp-modal__header");
const modalFooter = document.querySelector(".cbp-modal__footer");

dangerBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    modalHeader.classList.toggle('cbp-modal__header--danger');
    modalFooter.children[modalFooter.children.length - 1].classList.toggle('cbp-btn--danger')
  })
})

simpleBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    const hr = document.querySelector(".cbp-modal__content hr");
    if (modalHeader.style.display === "none") {
      modalHeader.style.display = "flex"
      hr.style.display = "block"
    } else {
      modalHeader.style.display = "none"
      hr.style.display = "none"
    }
  })
})