const accordionBtn = document.querySelectorAll('.cbp-accordion__title');

class Accordion {
  constructor(domNode) {
    this.accordionNode = domNode;

    this.accordionNode.addEventListener('click', this.toggle)
  }

  toggle(event) {
    const wrapper = event.target.closest('.cbp-accordion__item');
    wrapper.classList.toggle('active');
  }
}

accordionBtn.forEach(btn => {
  new Accordion(btn);
})