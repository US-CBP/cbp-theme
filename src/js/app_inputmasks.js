/* global $, Inputmask */

// EXTERNAL import 'babel-polyfill' // fixes ie11 Object.assign
import InputMask from 'jquery.inputmask';

// EXTERNALS

// import 'jquery.inputmask/dist/inputmask/inputmask.dependencyLib.jquery';
// import 'jquery.inputmask/dist/inputmask/inputmask.extensions';
// import 'jquery.inputmask/dist/inputmask/inputmask.regex.extensions';
// import 'jquery.inputmask/dist/inputmask/inputmask.phone.extensions';
// import 'jquery.inputmask/dist/inputmask/inputmask.date.extensions';
// import 'jquery.inputmask/dist/inputmask/inputmask.numeric.extensions';

(function ($, InputMask) {
  'use strict'

  if (!$ || !InputMask) {
    return false // fail gracefully
  }

  const checkDirty = (ev) => {
    if ($(ev.target).parent().get(0).MaterialTextfield) {
      $(ev.target).parent().get(0).MaterialTextfield.checkDirty()
    }
  }

  const placeholderCheckDirty = (target) => {
    $(target).focusin(function () {
      $(target).parent().addClass('is-focused')
    }).blur(function () {
      if ($(target).parent().get(0).MaterialTextfield) {
        $(target).parent().get(0).MaterialTextfield.checkDirty()
      }
    })
  }
      //
      // DONT USE lambda/arrow function HERE SINCE 'this' SCOPE IS NEEDED!!!
      //
  var placeholderBeforeEventCheckDirty = function (val, opt) {
    placeholderCheckDirty(this)
  }

  const TEXTFIELD_DEFAULT = {
    showMaskOnHover: false
  }

  const DATEPICKER_DEFAULT = {
    alias: 'dd/mm/yyyy',  // use one of the predefined inputmasks
    mask: 'm/d/y',
    placeholder: 'mm/dd/yyyy',
    showMaskOnHover: false
  }

  const PLACEHOLDER_LABEL_DEFAULT = {
    onKeyDown: placeholderBeforeEventCheckDirty,
    onBeforeMask: placeholderBeforeEventCheckDirty,
    onBeforePaste: placeholderBeforeEventCheckDirty
  }

  const FLOAT_LABEL_DEFAULT = {
    onKeyDown: checkDirty,
    onBeforePaste: checkDirty
  }

  Inputmask.extendAliases({
    'mdl-textfield-default': Object.assign({}, TEXTFIELD_DEFAULT, FLOAT_LABEL_DEFAULT),
    'mdl-textfield-default-placeholder': Object.assign({}, TEXTFIELD_DEFAULT, PLACEHOLDER_LABEL_DEFAULT),
    'mdl-mask-datepicker': Object.assign({}, DATEPICKER_DEFAULT, FLOAT_LABEL_DEFAULT),
    'mdl-mask-datepicker-placeholder': Object.assign({}, DATEPICKER_DEFAULT, PLACEHOLDER_LABEL_DEFAULT)
  })
})($, InputMask)
