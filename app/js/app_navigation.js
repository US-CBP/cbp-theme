import $ from 'jquery';

(function ($) {
  'use strict'

  var lastPosition = 0

  $('.cbp-header[role="navigation"]').each(function () {
    $(window).on('scroll', function () {
      var currentPosition = $(this).scrollTop()

      if (!lastPosition) {
        lastPosition = currentPosition
        return
      }

      if (lastPosition > currentPosition) {
        $('.cbp-header').removeClass('disappear')

        // if not using app-header
        if ($('.app-header').length) {
          $('.app-header').removeClass('top')
          $('.sidebar').removeClass('after-header').addClass('after-double-header')
        }
      } else {
        $('.cbp-header').addClass('disappear')
        // hide all menu items from the header
        $('.cbp-header .dropdown.open').removeClass('open')

        if ($('.app-header').length) {
          $('.app-header').addClass('top')
          $('.sidebar').removeClass('after-double-header').addClass('after-header')
          $('.app-header .dropdown.open').removeClass('open')
        }
      }

      lastPosition = currentPosition
    })
  })
}($))
