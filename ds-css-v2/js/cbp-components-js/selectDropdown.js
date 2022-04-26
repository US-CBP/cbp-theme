const element = document.getElementById('custom-dropdown');
const menu = document.getElementById('custom-dropdown-menu');

const focusableElements = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';

const getFocusableEls = (elementId) => {
  const el = document.getElementById(elementId).nextElementSibling;
  const focusableEls = el.querySelectorAll(focusableElements);

  return focusableEls;
};

const customDropdown = getFocusableEls('custom-dropdown');

const firstFocus = customDropdown[0];
const lastFocus = customDropdown[customDropdown.length - 1];

const closeDropdownMenu = () => {
  element.classList.remove('cbp-dropdown--open');
}

element.addEventListener('click', e => {
  element.classList.toggle('cbp-dropdown--open');
})

element.addEventListener('keydown', e => {
  const isTabPressed = (e.key === 'Tab' || e.key === 'Tab');

  if (e.key === "Escape" || e.code === "Escape") {
    closeDropdownMenu();
  }


  if (!isTabPressed) { 
    return; 
  }

  if ( e.shiftKey ) /* shift + tab */ {
    if (document.activeElement === firstFocus) {
      lastFocus.focus();
      e.preventDefault();
    }
  } else /* tab */ {
    if (document.activeElement === lastFocus) {
      firstFocus.focus();
      e.preventDefault();
    }
  }
})

menu.addEventListener('keydown', function(e) {
  const isTabPressed = (e.key === 'Tab' || e.key === 'Tab');

  if (e.key === "Escape" || e.code === "Escape") {
    closeDropdownMenu();
  } 

  if (!isTabPressed) { 
    console.log("something");
    return; 
  }

  if ( e.shiftKey ) /* shift + tab */ {
    if (document.activeElement === firstFocus) {
      lastFocus.focus();
      e.preventDefault();
    }
  } else /* tab */ {
    if (document.activeElement === lastFocus) {
      firstFocus.focus();
      e.preventDefault();
    }
  }
});
