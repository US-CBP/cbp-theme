const events = new Set(["click", "keydown"]);

/** Class representing Event Handler */
class EventHandler {
  static on(type, func) {
    this.addHandler(type, func);
  }

  /**
   * @param {string} type
   * @returns element with attached event handler
   */
  static addHandler(type, func = {}) {
    if (!events.has(type)) {
      throw new Error("Event handler type does not exist");
    }
  }
}

export default EventHandler;
