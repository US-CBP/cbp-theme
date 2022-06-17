class Toggle {
  constructor(node) {
    this.node = node; // Toggle wrapper
    this.checkbox = node.querySelector('input[type="checkbox"]'); // Toggle checkbox
    this.slider = this.checkbox.nextElementSibling; // Slider (span) element should always be adjacent to checkbox input
    this.firstIcon = this.slider.firstElementChild;
    this.lastIcon = this.slider.lastElementChild;

    this.node.addEventListener("change", (e) => {
      this.toggleIcons(e);
    });
  }

  isChecked(event = null) {
    if (event) {
      return event.target.checked;
    } else {
      return this.checkbox.checked;
    }
  }

  isCheckbox(event) {
    return event.target.type === "checkbox";
  }

  containsIcons() {
    return this.slider.children.length > 0;
  }

  toggleIcons(event) {
    if (!this.containsIcons()) {
      return;
    } else {
      if (this.isChecked(event)) {
        this.firstIcon.style.display = "inline-block";
        this.lastIcon.style.display = "none";
      } else {
        this.firstIcon.style.display = "none";
        this.lastIcon.style.display = "inline-block";
      }
    }
  }
}

class SelectorEngine2 {
  static getNodes(selector) {
    return document.querySelectorAll(selector);
  }
}

window.addEventListener("load", () => {
  const allToggles = SelectorEngine2.getNodes('[data-component="cbp-toggle"]');

  allToggles.forEach((toggle) => {
    new Toggle(toggle);
  });
});
