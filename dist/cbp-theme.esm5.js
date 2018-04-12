import $ from 'jquery';

/**
 * Selector defaults to .datepicker
 * e.g. applyDatePicker('body .datepicker')
 *    applyDatePicker('modal .datepicker')
 * @param selector
 * @returns {boolean}
 */
function applyDatePicker(selector) {
  /**
   *
   * See room for improvements...CONTRIBUTE, CONTRIBUTE, CONTRIBUTE!
   * Contact the Common Framework UI Group for more details or see our confluence page.
   *
   */

  selector = selector || '.datepicker';
  if ($(selector).length > 0) {
    if (!$.datepicker) {
      return false;
    }
    var oldGoToToday = $.datepicker._gotoToday;
    $.datepicker._gotoToday = function (id) {
      oldGoToToday.call(this, id);
      this._selectDate(id);
    };
  }
}

/**
 * Default selector [data-charlimit];
 * e.g. * applyCharLimit('.modal [data-charlimit]');
 * @param selector
 */
function applyCharLimit(selector) {
  /**
   *
   * See room for improvements...CONTRIBUTE, CONTRIBUTE, CONTRIBUTE!
   * Contact the Common Framework UI Group for more details or see our confluence page.
   *
   *
   * TODO: need to find a way to pass custom templates and allow user to use pass it via data attribute!
   *
   * NOTE: babel compiles ES6 string interpolations but backtick is needed!
   */

  selector = selector || '[data-charlimit]';
  $(selector).each(function (idx, val) {
    var attrOptions = $(val).attr('data-charlimit');

    if (attrOptions && attrOptions !== '') {
      attrOptions = attrOptions.replace(new RegExp("'", 'g'), '"');

      var dataoptions = $.parseJSON('{' + attrOptions + '}');
      var template = dataoptions.template;
      var updateChar = function updateChar(ev) {
        var currentLength = $(ev.currentTarget).val().length;
        var limit = dataoptions.limit;
        $(val).parent().find(dataoptions.target).html(template || '<strong> ' + currentLength + '/' + limit + ' </strong> character limit');
      };

      $(val).keydown(updateChar);
      $(val).on('paste', updateChar);
      updateChar({ currentTarget: val });
    }
  });
}

/**
 * Default selector is '[data-dismiss="tag"]'
 * @param selector
 */
function applyTags(selector) {

  selector = selector || '[data-dismiss="tag"]';
  $(selector).each(function (idx, el) {
    $(el).on('click', function (ev) {
      $(ev.currentTarget.parentElement).remove();
    });
  });
}

/**
 * Adds validation
 *
 * We currently only support selectize and select2.  If you want more select third party lib support, contribute!!!!!
 * See room for improvements...CONTRIBUTE, CONTRIBUTE, CONTRIBUTE!
 * Contact the Common Framework UI Group for more details or see our confluence page.
 *
 */
function applyThirdPartySelect() {

  var getDirty = function getDirty(idx, el) {
    if (el !== undefined && $(el).children('select').length > 0) {
      $($(el).children('select').get(0)).change(function (ev) {
        var option = $(ev.currentTarget).find('option:selected').val();
        var action = option && option.length > 0 ? 'addClass' : 'removeClass';
        $(el)[action]('is-dirty');
      });
    }
  };
  $('.selectize-field').each(getDirty);
  $('.select2-field').each(getDirty);
}

function setupCBPHeader() {

  $(window).on('load', function () {
    // make the header sticky
    $(window).scrollTop(0);

    // height of only top header
    var sidebarOffsetTopHeader = 50; // this is the height of the cbp-header

    // scroll function
    $(window).scroll(function () {
      // check when the scroll is more than the height of universal header
      var scroll = $(window).scrollTop();

      // check if the app header is there or not
      if ($('.app-header').length === 0) {
        // check when the scroll is more than the height of universal header
        if (scroll >= sidebarOffsetTopHeader) {
          $('.sidebar').removeClass('after-header');
        } else {
          $('.sidebar').addClass('after-header');
        }
      } else {
        // check when the scroll is more than the height of universal header
        if (scroll >= sidebarOffsetTopHeader) {
          $('.app-header').addClass('top');
          $('.sidebar').removeClass('after-double-header').addClass('after-header');
        } else {
          $('.app-header').removeClass('top');
          $('.sidebar').removeClass('after-header').addClass('after-double-header');
        }
      }
    });
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CBPTheme = function () {
  function CBPTheme() {
    _classCallCheck(this, CBPTheme);
  }

  CBPTheme.prototype.setupCBPHeader = function setupCBPHeader$$1() {
    return setupCBPHeader();
  };

  CBPTheme.prototype.applyDatePicker = function applyDatePicker$$1() {
    return applyDatePicker();
  };

  CBPTheme.prototype.applyCharLimit = function applyCharLimit$$1() {
    return applyCharLimit();
  };

  CBPTheme.prototype.applyTags = function applyTags$$1() {
    return applyTags();
  };

  CBPTheme.prototype.applyThirdPartySelect = function applyThirdPartySelect$$1() {
    return applyThirdPartySelect();
  };

  return CBPTheme;
}();

export { CBPTheme };
//# sourceMappingURL=cbp-theme.esm5.js.map
