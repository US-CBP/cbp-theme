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