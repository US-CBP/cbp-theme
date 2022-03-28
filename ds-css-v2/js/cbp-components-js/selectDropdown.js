class Dropdown {
  constructor(dropdownId) {
    this.selectNode = document.getElementById(dropdownId);
    this.dropdownNode = this.selectNode.nextElementSibling;
    this.options = this.dropdownNode.children;
    this.isOpen = false;

    this.toggleDropdown();
  }

  /**
   * Opens and closes the custom dropdown component
   */
  toggleDropdown() {
    this.selectNode.classList.toggle("cbp-dropdown--open");
  }
}

window.openDropdown = (dropdownId) => {
  const dropdown = new Dropdown(dropdownId);
}

const thing = document.getElementById("custom-dropdown");

thing.addEventListener('keydown', e => {
  // Enter Key
  if (e.code === "Enter" && e.key === "Enter") {
    console.log("Enter has been pressed!");
  }

  // ArrowDown
  if (e.code === "ArrowDown" && e.key === "ArrowDown") {
    console.log("ArrowDown has been pressed!");
  }
  // ArrowUp
  if (e.code === "ArrowUp" && e.key === "ArrowUp") {
    console.log("ArrowUp has been pressed!");
  }

  // Tab
  if (e.code === "Tab" && e.key === "Tab") {
    console.log("Tab has been pressed!");
  }
})

