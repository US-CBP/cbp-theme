/**
 * This is for using in scripts tag in browser.
 * cbpTheme object is populated in the browser.
 */
// import 'babel-polyfill'


 // because ES6 import syntax is being used at entry point, ensure the polyfills are loaded first
import 'bootstrap'
import 'material-design-lite'
import 'mdl-selectfield/dist/mdl-selectfield'

import {CBPTheme} from './cbp-theme'
// babel-polyfill inclusion check

// if (!window._babelPolyfill) {
//    /* eslint-disable global-require */
//    require("babel-polyfill");
//  }






(function () {
  window.CBPTheme = CBPTheme
  window.cbpTheme = new CBPTheme()
  window.cbpTheme.setupCBPHeader()

})()
