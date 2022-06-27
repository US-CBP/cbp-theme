const KEY_EVENTS = new Set([
  "Enter",
  "Escape",
  "ArrowUp",
  "ArrowDown"
])

class DropdownUtil {
  static openMenus = [];
}
class FocusTrap {

  /* Return currently open menu */
  static getCurrentMenu(openMenus) {
    return openMenus[openMenus.length - 1];
  }

  /* Check menu for focusable elements */
  static isFocusable(element) {
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
  }

  static goToFirst(menuNode) {
    const firstItem = menuNode.item(0);
    firstItem.focus();
  };

  static goToLast(menuNode) {
    const lastItem = menuNode.item(menuNode.length - 1);
    lastItem.focus();
  };
}

const focusTrap = openMenu => {
  return true;
}

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

class SelectorEngine {
  static findAll(selector) {
    return document.querySelectorAll(selector);
  }
}

SelectorEngine.findAll('[data-toggle="dropdown"]').forEach(dropdown => {
  addOrInstantiate(Dropdown, dropdown)
})
