const expandComponent = document.querySelectorAll('.cbp-expand__title')

expandComponent.forEach( component => {
  component.addEventListener('click', (item) => {
    const expandParent = item.target.closest('.cbp-expand');
    expandParent.classList.toggle('active')
  })
})