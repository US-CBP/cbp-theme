window.onresize = checkScreenSize;

function checkScreenSize() {
  if (window.innerWidth > 1024) {
    document.getElementById('userMenuMobile').style.display = null;
    document.getElementById('applicationHeaderMobile').style.display = null;
  }
}

function hideAppDrawer() {
  document.getElementById('userMenuMobile').style.display = null;
  document.getElementById('applicationHeaderMobile').style.display = 'none';
}

function hideUserDrawer() {
  document.getElementById('applicationHeaderMobile').style.display = null;
  document.getElementById('userMenuMobile').style.display = 'none';
}
