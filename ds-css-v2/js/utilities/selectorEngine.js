export class SelectorEngine {
  static findAll(selector) {
    return document.querySelectorAll(selector);
  }
}