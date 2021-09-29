const accordionBtn = document.querySelectorAll('.cbp-accordion__title');

accordionBtn.forEach( btn => {
  btn.addEventListener('click', (item) => {
    /* Accordion Parent */
    let accordionParent = item.target.closest('.cbp-accordion__item');
    let accordionContent = item.target.nextElementSibling;
    let compStyles = window.getComputedStyle(accordionContent);

    if(compStyles.getPropertyValue('display') === 'none') {
      // Show Content
      accordionParent.classList.toggle('active');
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
    } else {
      // Hide Content
      accordionParent.classList.toggle('active');
      accordionContent.style.maxHeight = null;
    }

  } )
})