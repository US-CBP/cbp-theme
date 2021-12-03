const openMenus = []

const utilMenu = {

  ignoreUtilFocusChanges: false,

  // Returns the current menu that is open
  getCurrentMenu: function() {
    return openMenus[openMenus.length - 1];
  },

  /* Check menu for focusable elements */
  isFocusable: function (element) {
    if (element.tabIndex < 0) {
      return false;
    }

    if (element.disabled) {
      return false;
    }

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
    if (!utilMenu.isFocusable(element)) {
      return false;
    }

    utilMenu.ignoreUtilFocusChanges = true;

    try {
      element.focus();
    } catch (e) {}

    utilMenu.ignoreUtilFocusChanges = false;
    return document.activeElement === element;
  },

  // Focus on first child of the modal
  focusFirstChild: function (element) {
    for (let i = 0; i < element.childNodes.length; i++) {
      const child = element.childNodes[i];
      if (utilMenu.attemptFocus(child) || utilMenu.focusFirstChild(child)) {
        return true;
      }
    }
    return false;
  },

  focusLastChild: function (element) {
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
      const child = element.childNodes[i];
      if (utilMenu.attemptFocus(child) || utilMenu.focusLastChild(child)) {
        return true;
      }
    }
    return false;
  }
}

function OverflowMenu(menuId, focusAfterClosed) {
  this.menuNode = document.getElementById(menuId);

  openMenus.push(this);

  this.menuNode.classList.toggle('active')

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

  this.addListeners();
}

OverflowMenu.prototype.close = function () {
  openMenus.pop();
  this.removeListeners();
  this.menuNode.classList.toggle('active');
  this.focusAfterClosed.focus();
}

// Trap Focus method
OverflowMenu.prototype.trapFocus = function (event) {
  if (utilMenu.ignoreUtilFocusChanges) {
    return;
  }

  const currentMenu = utilMenu.getCurrentMenu();
  if (currentMenu.menuNode.contains(event.target)) {
    currentMenu.lastFocus = event.target;
  } else {
    utilMenu.focusFirstChild(currentMenu.menuNode);
    if (currentMenu.lastFocus == document.activeElement) {
      utilMenu.focusLastChild(currentMenu.menuNode);
    }
    currentMenu.lastFocus = document.activeElement;
  }
}

OverflowMenu.prototype.addListeners = function () {
  document.addEventListener('focus', this.trapFocus, true);
}

OverflowMenu.prototype.removeListeners = function () {
  document.removeEventListener('focus', this.trapFocus, true);
}

const radioBtns = document.querySelectorAll('input[name="position"]')

let selectedValue = "cbp-overflow-menu--top-left";

radioBtns.forEach(btn => {
  btn.onclick = function() {
    const menu = document.getElementById('menu1');

    menu.classList.remove(selectedValue)

    switch (btn.value) {
      case 'bl':
        selectedValue = 'cbp-overflow-menu--bottom-left';
        menu.classList.add('cbp-overflow-menu--bottom-left');
        break;
      case 'tr':
        selectedValue = 'cbp-overflow-menu--top-right';
        menu.classList.add('cbp-overflow-menu--top-right');
        break;
      case 'br':
        selectedValue = 'cbp-overflow-menu--bottom-right';
        menu.classList.add('cbp-overflow-menu--bottom-right');
        break;
      case 'tl':
        selectedValue = 'cbp-overflow-menu--top-left';
        menu.classList.add('cbp-overflow-menu--top-left');
        break;
      default:
        break;
    }
  }
})

window.openOverflowMenu = function (menuId, focusAfterClosed) {
  const overflowMenu = new OverflowMenu(menuId, focusAfterClosed);
};

window.closeOverflowMenu = function () {
  const currentMenu = utilMenu.getCurrentMenu();
  currentMenu.close();
}