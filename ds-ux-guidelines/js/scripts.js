 const hamburger = document.querySelector('#main-content');
 const navBar = document.querySelector('.cbp-side-nav');
 const mainGrid = document.querySelector('.cbp-ds-grid');

 var tabType;
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

 var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});

//Tab functionality on the component pages.
//Currently have Code and Design Guidelines
//@TODO: Swap if-else into switch statement if additional sections are added
function moveTab(type){
  let currentTab;
  document.getElementById('code').classList.remove('is-active', 'tab--active');
  document.getElementById('design').classList.remove('is-active', 'tab--active');

  if(type === 'code'){
    currentTab = document.getElementById('code');
    currentTab.classList.add('is-active', 'tab--active');
    tabType = 'code';
  }
  else{
    currentTab = document.getElementById('design');
    currentTab.classList.add('is-active', 'tab--active')
    tabType = 'design';
  }

  return;
}

