/**
 * This is for using in scripts tag in browser.
 * cbpTheme object is populated in the browser.
 */

import 'babel-polyfill'
import 'bootstrap'
import 'material-design-lite'
import 'mdl-selectfield/dist/mdl-selectfield'

import {CBPTheme} from './cbp-theme'

(function () {
  window.CBPTheme = CBPTheme
  window.cbpTheme = new CBPTheme()
  window.cbpTheme.setupCBPHeader()

})()
