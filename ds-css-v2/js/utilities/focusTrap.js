class FocusTrapUtility {
  static ignoreUtilFocusChanges = false;

  /* Retrieve current menu */
  static getCurrentMenu(openMenus) {
    return openMenus[openMenus.length - 1];
  }

  /* Check menu for focusable elements */
  static isFocusable(element) {
    if (element.tabIndex < 0) {
      return false;
    }

    if (element.disabled) {
      return false;
    }

    switch (element.nodeName) {
      case "A":
        return !!element.href && element.rel != "ignore";
      case "INPUT":
        return element.type != "hidden";
      case "BUTTON":
      case "SELECT":
      case "TEXTAREA":
        return true;
      default:
        return false;
    }
  }

  /* Set attempt to set focus on current node */
  static attemptFocus(element) {
    if (!FocusTrapUtility.isFocusable(element)) {
      return false;
    }

    FocusTrapUtility.ignoreUtilFocusChanges = true;

    try {
      element.focus();
    } catch (e) {}

    FocusTrapUtility.ignoreUtilFocusChanges = false;
    return document.activeElement === element;
  }

  /* Focus on first child of the menu */
  static focusFirstChild(element) {
    for (let i = 0; i < element.childNodes.length; i++) {
      const child = element.childNodes[i];
      if (FocusTrapUtility.attemptFocus(child) || FocusTrapUtility.focusFirstChild(child)) {
        return true;
      }
    }
    return false;
  }

  /* Focus on last child of menu */
  static focusLastChild(element) {
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
      const child = element.childNodes[i];
      if (FocusTrapUtility.attemptFocus(child) || FocusTrapUtility.focusLastChild(child)) {
        return true;
      }
    }
    return false;
  }
}