const accordionBtn = document.querySelectorAll('.cbp-accordion__title');

accordionBtn.forEach( btn => {
  btn.addEventListener('click', (e) => {
    /* Accordion Parent */
    let accordionParent = e.target.closest('.cbp-accordion__item');

    accordionParent.classList.toggle('active');
  })
})
