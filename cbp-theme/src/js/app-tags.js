import $ from 'jquery'

/**
 * Default selector is '[data-dismiss="tag"]'
 * @param selector
 */
export function applyTags (selector) {
  'use strict'

  selector = selector || '[data-dismiss="tag"]'
  $(selector).each(function (idx, el) {
    $(el).on('click', function (ev) {
      $(ev.currentTarget.parentElement).remove()
    })
  })
}
