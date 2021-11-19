const openModals = [];

// Utility class for modals
const util = {
  modalOpenClass: "has-modal",

  // when util functions move focus around, set this to true so the focus listener can ignore events
  ignoreUtilFocusChanges: false,

  // Gets current modal that is open
  getCurrentModal: function () {
    if (openModals && openModals.length) {
      return openModals[openModals.length - 1];
    }
  },

  // Gets the current open modal and closes it
  closeCurrentModal: function () {
    const currentModal = util.getCurrentModal();
    if (currentModal) {
      currentModal.close();
      return true;
    }

    return false;
  },

  // Handle Esc key
  handleEscape: function (e) {
    const key = e.key === "Escape" || e.code === "Escape";

    if (key && util.closeCurrentModal()) {
      e.stopPropagation();
    }
  },

  // Handle click on backdrop to close modal
  handleBackdrop: function (e) {
    const currentModal = util.getCurrentModal();
    if (e.target.classList.contains('cbp-modal__backdrop')) {
      currentModal.close();
      e.stopPropagation();
    }
  },

  // Check if element is focusable
  isFocusable: function (element) {
    if (element.tabIndex < 0) {
      return false;
    }

    if (element.disabled) {
      return false;
    }

    // Check modal for all focusable elements
    switch (element.nodeName) {
      case "A":
        return !!element.href && element.rel != "ignore";
      case "INPUT":
        return element.type != "hidden";
      case "BUTTON":
      case "SELECT":
      case "TEXTAREA":
        return true;
      default:
        return false;
    }
  },

  // Set attempt to set focus on current node.
  attemptFocus: function (element) {
    if (!util.isFocusable(element)) {
      return false;
    }

    util.ignoreUtilFocusChanges = true;

    try {
      element.focus();
    } catch (e) {}

    util.ignoreUtilFocusChanges = false;
    return document.activeElement === element;
  },

  // Focus on first child of the modal
  focusFirstChild: function (element) {
    for (let i = 0; i < element.childNodes.length; i++) {
      const child = element.childNodes[i];
      if (util.attemptFocus(child) || util.focusFirstChild(child)) {
        return true;
      }
    }
    return false;
  },

  focusLastChild: function (element) {
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
      const child = element.childNodes[i];
      if (util.attemptFocus(child) || util.focusLastChild(child)) {
        return true;
      }
    }
    return false;
  }
};

// Attach key up event listener for ESC key to DOM
document.addEventListener("keyup", util.handleEscape);

// Attach click event listener for modal backdrop to DOM
document.addEventListener('click', util.handleBackdrop);

// Constructor function for modals
function Modal(modalId, focusAfterClosed, focusFirst) {
  // Select target modal
  this.modalNode = document.getElementById(modalId);

  // Throw error if no modal parameter is provided in the openModal method
  if (this.modalNode === null) {
    throw new Error("You must provide a modal in the DOM.");
  }

  // Add current open modal to the list of open modals
  openModals.push(this);

  // Modal backdrop class
  const backdropClass = "cbp-modal__backdrop";

  if (this.modalNode.parentNode.classList.contains(backdropClass)) {
    this.backdropNode = this.modalNode.parentNode;
  } else {
    // Create backdrop element and wrap current open modal
    this.backdropNode = document.createElement("div");
    this.backdropNode.className = backdropClass;
    this.modalNode.parentNode.insertBefore(this.backdropNode, this.modalNode);
    this.backdropNode.appendChild(this.modalNode);
  }

  // Open modal backdrop
  this.backdropNode.classList.add("active");

  // Disable scroll on body element
  document.body.classList.add(util.modalOpenClass);

  // Check that parameter focusAfterClosed is provided in function call
  if (typeof focusAfterClosed === "string") {
    this.focusAfterClosed = document.getElementById(focusAfterClosed);
  } else if (typeof focusAfterClosed === "object") {
    this.focusAfterClosed = focusAfterClosed;
  } else {
    throw new Error(
      "The focusAfterClosed parameter is requried for the Modal constructor."
    );
  }

  // Optional: focusFirst may be provided if there is a specific element to focus first
  if (typeof focusFirst === "string") {
    this.focusFirst = document.getElementById(focusFirst);
  } else if (typeof focusFirst === "object") {
    this.focusFirst = focusFirst;
  } else {
    this.focusFirst = null;
  }

  // Bracket the modal with 2 focusable div's so that focus does not go out of the document
  const preDiv = document.createElement("div");
  const postDiv = document.createElement("div");

  this.preNode = this.modalNode.parentNode.insertBefore(preDiv, this.modalNode);
  this.postNode = this.modalNode.parentNode.insertBefore(postDiv, this.modalNode.nextSibling);

  this.preNode.tabIndex = 0;
  this.postNode.tabIndex = 0;

  this.addListeners();

  // Make modal visible
  this.modalNode.className = "default_dialog";

  // if focusStart parameter is given, focus on that else focus on first element
  if (this.focusFirst) {
    this.focusFirst.focus();
  }

  this.lastFocus = document.activeElement;
}

// Close the current modal
Modal.prototype.close = function () {
  openModals.pop();
  this.removeListeners();
  this.preNode.remove();
  this.postNode.remove();
  this.modalNode.className = "cbp-hidden";
  this.backdropNode.classList.remove("active");
  this.focusAfterClosed.focus();

  if (openModals > 0) {
    aria.getCurrentModal().addListeners();
  } else {
    document.body.classList.remove(util.modalOpenClass);
  }
};

// Trap Focus method
Modal.prototype.trapFocus = function (event) {
  if (util.ignoreUtilFocusChanges) {
    return;
  }

  const currentModal = util.getCurrentModal();
  if (currentModal.modalNode.contains(event.target)) {
    currentModal.lastFocus = event.target;
  } else {
    // Currently places focus on last element
    util.focusFirstChild(currentModal.modalNode);
    if (currentModal.lastFocus == document.activeElement) {
      util.focusLastChild(currentModal.modalNode);
    }
    currentModal.lastFocus = document.activeElement;
  }
}

Modal.prototype.addListeners = function () {
  document.addEventListener('focus', this.trapFocus, true);
}

Modal.prototype.removeListeners = function () {
  document.removeEventListener('focus', this.trapFocus, true);
}

window.openModal = function (modalId, focusAfterClosed, focusFirst) {
  // Instantiate a modal
  const modal = new Modal(modalId, focusAfterClosed, focusFirst);
};

window.closeModal = function (closeBtn) {
  const currentModal = util.getCurrentModal();
  if (currentModal.modalNode.contains(closeBtn)) {
    currentModal.close();
  }
};
