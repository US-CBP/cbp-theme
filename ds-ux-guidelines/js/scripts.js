 const hamburger = document.querySelector('#main-content');
 const navBar = document.querySelector('.cbp-side-nav');
 const mainGrid = document.querySelector('.cbp-ds-grid');

 /* Hamburger menu open/close code START */
 
 hamburger.addEventListener( 'click', function(e) {
   
  if(navBar.classList.contains('cbp-side-nav--hide')) {
    navBar.classList.remove('cbp-side-nav--hide');
    mainGrid.classList.add('cbp-ds-grid--margin-left');
  } else {
    navBar.classList.add('cbp-side-nav--hide');
    mainGrid.classList.remove('cbp-ds-grid--margin-left');
  }
 });
 /* Hamburger menu open/close code START */