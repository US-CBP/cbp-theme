import $ from 'jquery'

/**
 * Selector defaults to .datepicker
 * e.g. applyDatePicker('body .datepicker')
 *    applyDatePicker('modal .datepicker')
 * @param selector
 * @returns {boolean}
 */
export function applyDatePicker (selector) {
  'use strict'
  /**
   *
   * See room for improvements...CONTRIBUTE, CONTRIBUTE, CONTRIBUTE!
   * Contact the Common Framework UI Group for more details or see our confluence page.
   *
   */
  selector = selector || '.datepicker'
  if ($(selector).length > 0) {
    if (!$.datepicker) {
      return false
    }
    var oldGoToToday = $.datepicker._gotoToday
    $.datepicker._gotoToday = function (id) {
      oldGoToToday.call(this, id)
      this._selectDate(id)
    }
  }
}
