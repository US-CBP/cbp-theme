import $ from 'jquery';

(function ($) {
  'use strict'

  $(window).load(function () {
    // make the header sticky
    $(window).scrollTop(0)
    $(window).resize(function () {
    // height of only top header
      var sidebarOffsetTopHeader = $('.cbp-header').height()

    // height of only app header
      var sidebarOffsetSingleHeader = $('.app-header').height()

    // height of both header
      var sidebarOffsetDoubleHeader = sidebarOffsetTopHeader + sidebarOffsetSingleHeader

    // dynamically add the offset to sidebar on page load
      if ($('.app-header').length === 0) {
        $('.sidebar').css('top', sidebarOffsetTopHeader)
      } else {
        $('.sidebar').css('top', sidebarOffsetDoubleHeader)
      }

    // scroll function
      $(window).scroll(function () {
      // check when the scroll is more than the height of universal header
        var scroll = $(window).scrollTop()

      // check if the app header is there or not
        if ($('.app-header').length === 0) {
        // check when the scroll is more than the height of universal header
          if (scroll >= sidebarOffsetTopHeader) {
            $('.sidebar').css('top', 0)
          } else {
            $('.sidebar').css('top', sidebarOffsetTopHeader)
          }
        } else {
        // check when the scroll is more than the height of universal header
          if (scroll >= sidebarOffsetTopHeader) {
            $('.app-header').addClass('top')
            $('.sidebar').css('top', sidebarOffsetSingleHeader)
          } else {
            $('.app-header').removeClass('top')
            $('.sidebar').css('top', sidebarOffsetDoubleHeader)
          }
        }
      })

      $('.content').css('padding-top', sidebarOffsetSingleHeader)
    }).resize()
  })
}($))
