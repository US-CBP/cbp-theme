/**
 * Takes away pain of having to setup inputmask with useful dafaults.
 */
import 'inputmaskDir/inputmask.dependencyLib.jquery'
import 'inputmaskDir/inputmask'
import 'inputmaskDir/inputmask.extensions'
import 'inputmaskDir/inputmask.regex.extensions'
import 'inputmaskDir/inputmask.phone.extensions'
import 'inputmaskDir/inputmask.date.extensions'
import 'inputmaskDir/inputmask.numeric.extensions'
import 'inputmaskDir/jquery.inputmask'

import {setupInputMasks} from './js/app-inputmasks'

(function () {
  // YG: Since browsers don't import stuff the only way to share objects is by placing them on window
  if (window) {
    window.cbpTheme = window.cbpTheme || {}
    window.cbpTheme.setupInputMasks = setupInputMasks
  }
})()
