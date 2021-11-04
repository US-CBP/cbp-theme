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