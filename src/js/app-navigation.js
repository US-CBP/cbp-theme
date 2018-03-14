import $ from 'jquery';


(function ($) {
  'use strict'

  $(window).on('load', function () {
    // make the header sticky
    $(window).scrollTop(0)

    // height of only top header
    var sidebarOffsetTopHeader = 50 // this is the height of the cbp-header

    // scroll function
    $(window).scroll(function () {
      // check when the scroll is more than the height of universal header
      var scroll = $(window).scrollTop()

      // check if the app header is there or not
      if ($('.app-header').length === 0) {
        // check when the scroll is more than the height of universal header
        if (scroll >= sidebarOffsetTopHeader) {
          $('.sidebar').removeClass('after-header')
        } else {
          $('.sidebar').addClass('after-header')
        }
      } else {
        // check when the scroll is more than the height of universal header
        if (scroll >= sidebarOffsetTopHeader) {
          $('.app-header').addClass('top')
          $('.sidebar').removeClass('after-double-header').addClass('after-header')
        } else {
          $('.app-header').removeClass('top')
          $('.sidebar').removeClass('after-header').addClass('after-double-header')
        }
      }
    })
  })
}($))
