const accordionBtn = document.querySelectorAll(".cbp-accordion__title");

class Accordion {
  constructor(domNode) {
    this.button = domNode;
    this.item = this.button.closest(".cbp-accordion__item");
    this.content = this.item.querySelector(".cbp-accordion__content");
    this.ariaExpanded = this.button.getAttribute("aria-expanded");
    this.ariaControls = this.button.getAttribute("aria-controls");

    this.button.addEventListener("click", (e) => {
      this.toggle(e, this.item);
    });
  }

  toggle(event, item) {
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      this.button.setAttribute("aria-expanded", true);
    } else {
      this.button.setAttribute("aria-expanded", false);
    }
  }
}

accordionBtn.forEach((btn) => {
  return new Accordion(btn);
});
