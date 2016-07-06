
(function() {

  'use strict';

  !function(factory) {
      "function" == typeof define && define.amd ? define([ "jquery", "./jquery.inputmask" ], factory) : "object" == typeof exports ? module.exports = factory(require("jquery"), require("./jquery.inputmask")) : factory(jQuery);
  }(function($) {

      if (!$.inputmask || !$.inputmask.defaults) {
        return false; // fail gracefully
      }

      var checkDirty = function(ev) {
        //console.info($(ev.target).parent().get(0));
        //console.info($(ev.target).parent().get(0).MaterialTextfield);
        if ($(ev.target).parent().get(0).MaterialTextfield) {
          $(ev.target).parent().get(0).MaterialTextfield.checkDirty();
        }
      };

      var placeholderCheckDirty = function(ev) {
        var target = ev.target || this;
        //console.info(target);
        $(target).focus(function() {
          //console.info(this);
          $(this).parent().addClass('is-dirty');
        }).blur(function() {
          if ($(target).parent().get(0).MaterialTextfield) {
            $(target).parent().get(0).MaterialTextfield.checkDirty();
          }
        });
      };

      return $.extend($.inputmask.defaults.aliases,
        {
          'mdl-textfield-default': {
            showMaskOnHover: false,
            onKeyDown: checkDirty
          },
          'mdl-textfield-default-placeholder': {
            showMaskOnHover: false,
            onKeyDown: placeholderCheckDirty,
            onBeforeMask: placeholderCheckDirty
          },
          'mdl-mask-datepicker': {
            alias: 'dd/mm/yyyy', // use one of the predefined inputmasks
            showMaskOnHover: false,
            mask: 'm/d/y',
            placeholder: 'mm/dd/yyyy',
            onKeyDown: checkDirty
          },
          'mdl-mask-datepicker-placeholder': {
            alias: 'dd/mm/yyyy', // use one of the predefined inputmasks
            showMaskOnHover: false,
            mask: 'm/d/y',
            placeholder: 'mm/dd/yyyy',
            onKeyDown: placeholderCheckDirty,
            onBeforeMask: placeholderCheckDirty
          }
        }
      ), $.fn.inputmask;

  });

}());
