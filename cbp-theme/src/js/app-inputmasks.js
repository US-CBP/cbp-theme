import $ from 'jquery'
import InputMask from 'inputmask'

export function setupInputMasks () {
  'use strict'
  if (!$ || !InputMask) {
    return false // fail gracefully
  }

  const checkDirty = (ev) => {
    if ($(ev.target).parent().get(0).MaterialTextfield) {
      $(ev.target).parent().get(0).MaterialTextfield.checkDirty()
    }
  }

  const placeholderCheckDirty = (ev) => {
    $(ev.target).on('focusin', function () {
      $(ev.target).parent().addClass('is-focused')
    }).on('blur', function () {
      if ($(ev.target).parent().get(0).MaterialTextfield) {
        $(ev.target).parent().get(0).MaterialTextfield.checkDirty()
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
    alias: 'dd/mm/yyyy', // use one of the predefined inputmasks
    placeholder: 'dd/mm/yyyy',
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

  InputMask.extendAliases({
    'mdl-textfield-default': Object.assign({}, TEXTFIELD_DEFAULT, FLOAT_LABEL_DEFAULT),
    'mdl-textfield-default-placeholder': Object.assign({}, TEXTFIELD_DEFAULT, PLACEHOLDER_LABEL_DEFAULT),
    'mdl-mask-datepicker': Object.assign({}, DATEPICKER_DEFAULT, FLOAT_LABEL_DEFAULT),
    'mdl-mask-datepicker-placeholder': Object.assign({}, DATEPICKER_DEFAULT, PLACEHOLDER_LABEL_DEFAULT)
  })
}
