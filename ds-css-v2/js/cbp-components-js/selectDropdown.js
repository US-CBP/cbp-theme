const dropdowns = document.querySelectorAll('[data-toggle="dropdown"]')

class FocusTrap {
  static goToFirst(menuNode) {
    const firstItem = menuNode.item(0);
    firstItem.focus();
  };
  static goToLast(menuNode) {
    const lastItem = menuNode.item(menuNode.length - 1);
    lastItem.focus();
  };
}

const KEY_EVENTS = new Set([
  "Enter",
  "Escape",
  "ArrowUp",
  "ArrowDown"
])
class Dropdown {
  constructor(domNode) {
    this.dropdownNode = domNode;
    this.dropdownMenuNode = this.dropdownNode.nextElementSibling;
    this.menuItems = this.dropdownMenuNode.children;

    this.dropdownNode.addEventListener('click', () => {
      this.toggle()
    });
    
    this.dropdownNode.addEventListener('keydown', e => this.onKeydown(e, this.menuItems));

    this.addListeners(this.menuItems);
  }

  toggle() {
    this.dropdownNode.classList.toggle("cbp-dropdown--open");
  }

  isOpen() {
    return this.dropdownNode.classList.contains('cbp-dropdown--open')
  }

  close() {
    if (this.isOpen()) {
      this.dropdownNode.classList.remove('cbp-dropdown--open');
    }
  }

  onKeydown(event, menuItems) {
    if (event.key === "Enter" && KEY_EVENTS.has(event.key)) {
      event.preventDefault();
      this.toggle();
    }

    if (event.key === "Escape" && KEY_EVENTS.has(event.key)) {
      event.preventDefault();
      this.handleEscape(event);
    }

    if (event.key === "ArrowUp" && KEY_EVENTS.has(event.key)) {
      event.preventDefault();
      FocusTrap.goToLast(menuItems);
    }

    if (event.key === "ArrowDown" && KEY_EVENTS.has(event.key)) {
      event.preventDefault();
      FocusTrap.goToFirst(menuItems);
    }
  }

  handleEscape(e) {
    const key = e.key === "Escape" || e.code === "Escape";

    if (key && this.close()) {
      e.stopPropagation();
    }
  }

  addListeners(menuItems) {
    for (const item of menuItems) {
      item.addEventListener('keydown', e => {
        console.log(e.key);
      })
    }
  }

  trapFocus(event, menuItems) {
    FocusTrap.goToFirst(menuItems);
  }
}

const addOrInstantiate = (Klass, node) => {
  return new Klass(node)
}

dropdowns.forEach(dropdown => {
  addOrInstantiate(Dropdown, dropdown)
})
