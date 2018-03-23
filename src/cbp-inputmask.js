/**
 * Takes away pain of having to setup inputmask with useful dafaults.
 */

import 'inputmask/dist/inputmask/jquery.inputmask'
import 'inputmask/dist/inputmask/inputmask.numeric.extensions'
import 'inputmask/dist/inputmask/inputmask.regex.extensions'
import 'inputmask/dist/inputmask/inputmask.date.extensions'
import 'inputmask/dist/inputmask/inputmask.phone.extensions'

import {setupInputMasks} from './js/app-inputmasks'

(function () {
  // YG: Since browsers don't import stuff the only way to share objects is by placing them on window
  if (window) {
    window.cbpTheme = window.cbpTheme || {}
    window.cbpTheme.setupInputMasks = setupInputMasks
  }
})()
