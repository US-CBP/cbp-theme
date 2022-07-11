const KEY_EVENTS = new Set(["Enter", "Escape", "ArrowUp", "ArrowDown"]);

const util = {
  openDropdowns: [],
  getCurrentMenu: () => {
    return util.openDropdowns[util.openDropdowns.length - 1];
  },
  focusFirst: (menuItems) => {
    for (let i = 0; i < menuItems.length; i++) {
      const element = menuItems[i];
      element.focus();
      return true;
    }
    return false;
  },
  focusLast: (menuItems) => {
    for (let i = menuItems.length - 1; i >= 0; i--) {
      const element = menuItems[i];
      element.focus();
      return true;
    }
    return false;
  }
};
class SelectorEngine {
  static findAll(selector) {
    return document.querySelectorAll(selector);
  }
}

class Dropdown {
  constructor(domNode) {
    this.dropdownNode = domNode;
    this.dropdownMenuNode = this.dropdownNode.nextElementSibling;
    this.menuItems = this.dropdownMenuNode.children;
    this.chips = [];
    this.placeHolder = this.dropdownNode.querySelector('.cbp-dropdown__placeholder');

    this.dropdownNode.addEventListener("click", (e) => {
      this.handleClick(e, this);
    });

    this.dropdownNode.addEventListener("keydown", (e) => {
      this.handleKeydown(e, this);
    });

    this.handleMenuItems(this.menuItems, this);
  }

  isOpen() {
    const { getCurrentMenu } = util
    return typeof getCurrentMenu() != "undefined" && getCurrentMenu().dropdownNode.classList.contains('cbp-dropdown--open')
  }

  close() {
    if (this.isOpen()) {
      util.getCurrentMenu().dropdownNode.classList.remove("cbp-dropdown--open");
      util.openDropdowns.pop();
      this.dropdownNode.focus();
      window.removeEventListener('click', this.handleOutsideClick, true)
    }
  }

  handleOutsideClick(e) {
    const isMultiChoice = e.target.classList.contains('cbp-dropdown__item--multiselect') || e.target.type === 'checkbox';
    const insideClick = e.target.classList.contains('cbp-dropdown__custom') || e.target.classList.contains('cbp-dropdown__item');
    if (insideClick || isMultiChoice) {
      return;
    } else {
      util.getCurrentMenu().close();
    }
  }

  toggle(dropdown) {
    if (typeof util.getCurrentMenu() === "undefined") {
      util.openDropdowns.push(dropdown);
      util.getCurrentMenu().dropdownNode.classList.add("cbp-dropdown--open");
      window.addEventListener('click', this.handleOutsideClick, true)
    } else if (dropdown.dropdownNode != util.getCurrentMenu().dropdownNode) {
      util.getCurrentMenu().close();
      util.openDropdowns.pop();
      util.openDropdowns.push(dropdown);
      util.getCurrentMenu().dropdownNode.classList.add("cbp-dropdown--open");
      window.addEventListener('click', this.handleOutsideClick, true)
    } else {
      util.getCurrentMenu().close();
      util.openDropdowns.pop();
    }
  }

  handleClick(e, dropdown) {
    const target = e.target;
    e.preventDefault();
    if (e.target != this.dropdownNode) {
      this.handleChips(e);
    } else {
      this.toggle(dropdown)
    }
  }

  handleKeydown(e, dropdown) {
    const { menuItems } = dropdown;
    if (e.key === "Escape" && KEY_EVENTS.has(e.key)) {
      e.preventDefault();
      this.close();
    }

    if (e.key === "Enter" && KEY_EVENTS.has(e.key)) {
      e.preventDefault();
      this.toggle(dropdown)
    }

    if (e.key === "ArrowUp" && KEY_EVENTS.has(e.key)) {
      e.preventDefault();
      util.focusLast(menuItems);
    }

    if (e.key === "ArrowDown" && KEY_EVENTS.has(e.key)) {
      e.preventDefault();
      util.focusFirst(menuItems);
    }
  }

  handleMenuItems(items, dropdown) {
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      element.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && KEY_EVENTS.has(e.key)) {
          e.preventDefault();
          this.close();
        }

        if (e.key === "Enter" && KEY_EVENTS.has(e.key)) {
          e.preventDefault();
          this.toggle(dropdown)
        }

        if (e.key === "ArrowUp" && KEY_EVENTS.has(e.key)) {
          e.preventDefault();
          const prevEl = items[i - 1];
          if (typeof prevEl === 'undefined') {
            return;
          }
          prevEl.focus();
        }
    
        if (e.key === "ArrowDown" && KEY_EVENTS.has(e.key)) {
          e.preventDefault();
          const nextEl = items[i + 1];
          if (typeof nextEl === 'undefined') {
            return;
          }
          nextEl.focus();
        }
      })
    }

    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      element.addEventListener('click', (e) => {
        if (e.target.nodeName === 'A') {
          util.getCurrentMenu().close();
        }
      })
    }

    for (let i = 0; i < items.length; i++) {
      const element = items[i];

      element.addEventListener('change', (e) => {
        const selectedIndex = i + 1;
        if (element.firstElementChild.checked) {
          this.chips.push(element.firstElementChild.value);
          this.updateChips(this.chips);
        } else {
          this.chips = this.chips.filter(val => val != element.firstElementChild.value);
          this.updateChips(this.chips);
        }
      })
    }
  }

  createChip(val) {
    const chip = document.createElement('div');
    const text = document.createElement('span');
    const iconWrapper = document.createElement('div');
    const icon = document.createElement('i');
    chip.className = 'cbp-chips margin-right-1';
    iconWrapper.className = 'plus-border';
    icon.className = 'fas fa-times';

    chip.appendChild(text);
    chip.appendChild(iconWrapper);
    iconWrapper.appendChild(icon);
    text.innerHTML = val;

    return chip;
  }

  updateChips(allChips) {
    this.dropdownNode.innerHTML = '';
    allChips.forEach(val => {
      const chip = this.createChip(val);
      this.dropdownNode.appendChild(chip);
    })

    if (allChips.length == 0) {
      this.dropdownNode.appendChild(this.placeHolder);
    }
  }
}

const addOrInstantiate = (Klass, node) => {
  return new Klass(node);
};

SelectorEngine.findAll('[data-toggle="dropdown"]').forEach((dropdown) => {
  addOrInstantiate(Dropdown, dropdown);
});
