function OverflowMenu() {
  console.log(this);
}

window.openOverflowMenu = function (menuId) {
  const overflowMenu = new OverflowMenu();
}