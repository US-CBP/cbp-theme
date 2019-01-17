/**
 * This is for using in scripts tag in browser.
 * cbpTheme object is populated in the browser.
 */

import 'bootstrap'
import 'material-design-lite'
import 'mdl-selectfield/dist/mdl-selectfield'

import {CBPTheme} from './cbp-theme'

if (!window._babelPolyfill) {
  /* eslint-disable global-require */
  require("babel-polyfill");
}

(function () {
  window.CBPTheme = CBPTheme
  window.cbpTheme = new CBPTheme()
  window.cbpTheme.setupCBPHeader()

})()
