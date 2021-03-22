let cardBtn = document.querySelectorAll('.cbp-text-button');

cardBtn.forEach( btn => {
  btn.addEventListener( 'click', (e) => {
    let cardBtn = e.currentTarget

    cardBtn.previousElementSibling.classList.toggle('cbp-tags--hidden');
    console.log(cardBtn.innerHTML.toLowerCase().indexOf('more'))
    if(cardBtn.innerHTML.toLowerCase().indexOf('more') !== -1 ) {
      
      cardBtn.innerHTML = '<i class=\"fas fa-chevron-up\"></i>' + 'LESS';
    } else {
      cardBtn.innerHTML = '<i class=\"fas fa-chevron-down\"></i>' + 'MORE';
    }

  })
});