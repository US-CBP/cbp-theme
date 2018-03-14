/**
 * This is for using in scripts tag in browser.
 * cbpTheme object is populated in the browser.
 */

import 'babel-polyfill'
import 'bootstrap'
import 'material-design-lite'
import 'mdl-selectfield/dist/mdl-selectfield'

import './cbp-theme'

import { applyDatePicker } from './js/app-datepicker'
import { applyCharLimit } from './js/app-char-limit'
import { applyTags } from './js/app-tags'
import { applyThirdPartySelect } from './js/app-thirdparty-select'

(function () {
  window.cbpTheme = window.cbpTheme || {}

  window.cbpTheme.applyDatePicker = applyDatePicker
  window.cbpTheme.applyCharLimit = applyCharLimit
  window.cbpTheme.applyTags = applyTags
  window.cbpTheme.applyThirdPartySelect = applyThirdPartySelect
})()
