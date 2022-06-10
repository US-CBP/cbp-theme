const dropdowns = document.querySelectorAll('[data-toggle="dropdown"]')
const ENTER_KEY = "Enter";
const ESCAPE_KEY = "Escape";
const KEY_UP = "ArrowUp";
const KEY_DOWN = "ArrowDown";

const events = new Set([
  'click',
  'keydown',
])

/** Class representing Event Handler */
class EventHandler {
  static on(type, func) {
    this.addHandler(type, func);
  }

  /**
   * @param {string} type 
   * @returns element with attached event handler
   */
  static addHandler(type, func = {}) {
    if (!events.has(type)) {
      throw new Error('Event handler type does not exist')
    }
  }
}

class SelectorEngine {
  static findAll (selector) {
    return document.querySelectorAll(selector);
  }
}

/** Class representing a dropdown menu. */
class Dropdown {
  /**
   * Create a dropdown menu and toggle.
   * @constructor
   * @param {string} dropdownId
   */
  constructor(dropdownId) {
    this.selection = [];
    this.dropdownNode = document.getElementById(dropdownId);
    this.dropdownMenuNode = this.dropdownNode.nextElementSibling;
    this.menuItems = this.dropdownMenuNode.children;
  }

  /**
   * Open/close dropdown menu
   */
  toggle() {
    this.dropdownNode.classList.toggle("cbp-dropdown--open");
  }

  close() {
    if (this.isOpen()) {
      this.dropdownNode.classList.remove('cbp-dropdown--open');
    }
  }

  isOpen() {
    return this.dropdownNode.classList.contains('cbp-dropdown--open')
  }
}

// On click instantiate a dropdown
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', () => {
    const drp = new Dropdown(dropdown.id);
    drp.toggle();
  })
})

// On Enter instantiate a dropdown
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      const drp = new Dropdown(dropdown.id);
      drp.toggle();
    }
  })
})

// On Key Up instantiate a dropdown
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === KEY_UP) {
      const drp = new Dropdown(dropdown.id);
      drp.toggle();
    }
  })
})

// On Key Down instantiate a dropdown
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === KEY_DOWN) {
      const drp = new Dropdown(dropdown.id);
      drp.toggle();
    }
  })
})

// On Escape close dropdown
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === ESCAPE_KEY) {
      const drp = new Dropdown(dropdown.id);
      drp.close();
    }
  })
})


dropdowns.forEach(dropdown => {
  console.log("instance created!");
  return new Dropdown(dropdown.id);
})

EventHandler.on('click');
