const modalTarget = document.querySelectorAll("[data-modal-target]");
const modalClose = document.querySelectorAll("[data-modal-close]");

const trapFocus = (modal) => {
  const focusableElements = modal.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  document.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab' || e.code === 'Tab';
    let isEscPressed = e.key === 'Escape' || e.code === 'Escape';

    if (isEscPressed) {
      modal.style.display = "none";
    }
  
    if (!isTabPressed) {
      return;
    }
  
    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        e.preventDefault();
        lastFocusableElement.focus(); // add focus for the last focusable element
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        e.preventDefault();
        firstFocusableElement.focus(); // add focus for the first focusable element
      }
    }
  });

  firstFocusableElement.focus();
}

// Open Modal
modalTarget.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const modal = document.querySelector(`#${e.target.dataset.modalTarget}`);
    modal.style.display = "block";

    trapFocus(modal)
  });
});

// Close Modal
modalClose.forEach((close) => {
  close.addEventListener("click", (e) => {
    const closestModal = e.target.closest(".cbp-modal");
    closestModal.style.display = "none";
  });
});

// Close Modal from Overlay
window.onclick = (e) => {
  if (e.target.classList.contains("cbp-modal")) {
    e.target.style.display = "none";
  }
};