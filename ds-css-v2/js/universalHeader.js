// JS for dropdowns

// Close the dropdown if the user clicks outside of the menu
// window.onclick = function (event) {
//   if (
//     (window.innerWidth ||
//       document.documentElement.clientWidth ||
//       document.body.clientWidth) >= 768
//   ) {
//     if (!event.target.matches(".cbp-header-dropdown")) {
//       closeDropdown();
//     }
//   }
// };

// When the user clicks on the button,
// toggle between hiding and showing the dropdown content
function showDropdown(a) {
  a.parentNode
    .getElementsByClassName("dropdown-content")[0]
    .classList.toggle("show");
  a.parentNode.classList.toggle("dropdown-item-active");
}

function closeDropdown() {
  //the 'cbp-header-dropdown' class is used on the parent of the class 'dropdown-content'.
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains("show")) {
      openDropdown.classList.remove("show");
    }
  }
}
