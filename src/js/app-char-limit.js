import $ from 'jquery'

/**
 * Default selector [data-charlimit];
 * e.g. * applyCharLimit('.modal [data-charlimit]');
 * @param selector
 */
export function applyCharLimit (selector) {
  'use strict'
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
  selector = selector || '[data-charlimit]'
  $(selector).each(function (idx, val) {
    let attrOptions = $(val).attr('data-charlimit')

    if (attrOptions && attrOptions !== '') {
      attrOptions = attrOptions.replace(new RegExp("'", 'g'), '"')

      let dataoptions = $.parseJSON('{' + attrOptions + '}')
      let template = dataoptions.template
      let updateChar = (ev) => {
        let currentLength = $(ev.currentTarget).val().length
        let limit = dataoptions.limit
        $(val).parent().find(dataoptions.target).html(template || `<strong> ${currentLength}/${limit} </strong> character limit`)
      }

      $(val).keydown(updateChar)
      $(val).on('paste', updateChar)
      updateChar({ currentTarget: val })
    }
  })
}
