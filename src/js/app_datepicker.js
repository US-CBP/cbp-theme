import $ from 'jquery';

(function ($) {
  'use strict'
/**
 *
 * See room for improvements...CONTRIBUTE, CONTRIBUTE, CONTRIBUTE!
 * Contact the Common Framework UI Group for more details or see our confluence page.
 *
 */
  if ($('.datepicker').length > 0) {
    if (!$.datepicker) {
      return false
    }
    var oldGoToToday = $.datepicker._gotoToday
    $.datepicker._gotoToday = function (id) {
      oldGoToToday.call(this, id)
      this._selectDate(id)
    }
  }
}($))
