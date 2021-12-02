const openMenus = []

const utilMenu = {
  // Returns the current menu that is open
  getCurrentMenu: function() {
    return openMenus[openMenus.length - 1];
  }
}

function OverflowMenu(menuId) {
  this.menuNode = document.getElementById(menuId);

  openMenus.push(this);

  this.menuNode.classList.toggle('active')
}

OverflowMenu.prototype.close = function () {
  this.menuNode.classList.toggle('active');
}

const radioBtns = document.querySelectorAll('input[name="position"]')

radioBtns.forEach(btn => {
  btn.onclick = function() {
    const menu = document.getElementById('menu1');
    
    menu.classList.remove(menu.className.split(' ')[1])

    switch (btn.value) {
      case 'bl':
        menu.classList.add('cbp-overflow-menu--bottom-left');
        break;
      case 'tr':
        menu.classList.add('cbp-overflow-menu--top-right');
        break;
      case 'br':
        menu.classList.add('cbp-overflow-menu--bottom-right');
        break;
      case 'tl':
        menu.classList.add('cbp-overflow-menu--top-left');
        break;
      default:
        break;
    }
  }
})

window.openOverflowMenu = function (menuId) {
  const overflowMenu = new OverflowMenu(menuId);
};

window.closeOverflowMenu = function () {
  const currentMenu = utilMenu.getCurrentMenu();
  currentMenu.close();
}