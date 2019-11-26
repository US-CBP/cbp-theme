 const hamburger = document.querySelector('#main-content');
 const navBar = document.querySelector('.cbp-side-nav');
 const mainGrid = document.querySelector('.cbp-ds-grid');

 /* App mainmenu open/close START */
const mainHeader = document.querySelector('.cbp-header__main'); 
const hideBtn = document.querySelector('.hide-btn');

 if(hideBtn) {  
   hideBtn.addEventListener('click', (e) => {

    if(mainHeader.classList.contains('cbp-header__main--hidden')) {
      mainHeader.classList.remove('cbp-header__main--hidden');
    } else {
      mainHeader.classList.add('cbp-header__main--hidden');
    }

  });

  /* App mainmenu open/close END */

  /* App submenu open/close START */
  const subHeader = document.querySelector('.cbp-header__sub');
  const subBtn = document.querySelector('.sub-menu-btn');

  subBtn.addEventListener('click', (e) => {
    if(subHeader.classList.contains('cbp-header__sub--open')) {
      subHeader.classList.remove('cbp-header__sub--open');
    } else {
      subHeader.classList.add('cbp-header__sub--open');
    }
  });
}
 /* App submenu open/close END */

 /* Hamburger menu open/close code START */
 if (hamburger) {
 hamburger.addEventListener( 'click', function(e) {
   
  if(navBar.classList.contains('cbp-side-nav--hide')) {
    navBar.classList.remove('cbp-side-nav--hide');
    mainGrid.classList.add('cbp-ds-grid--margin-left');
  } else {
    navBar.classList.add('cbp-side-nav--hide');
    mainGrid.classList.remove('cbp-ds-grid--margin-left');
  }
 });
}
 /* Hamburger menu open/close code START */