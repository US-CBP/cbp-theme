import $ from 'jquery';

(function ($) {
  'use strict'

  var lastPosition = 0

  // var lastPosition = 0;

  /*$('.cbp-header[role="navigation"]').each(function() {
    $(window).on('scroll', function() {
      var currentPosition = $(this).scrollTop();

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

      lastPosition = currentPosition;
    });
  });*/

  

  $(window).load(function() {
    //make the header sticky
    $(window).scrollTop(0);
    $(window).resize(function() { 
    
    //height of only top header
    var sidebarOffsetTopHeader = $(".cbp-header").height();

    //height of only app header
    var sidebarOffsetSingleHeader = $(".app-header").height();

    //height of both header
    var sidebarOffsetDoubleHeader = sidebarOffsetTopHeader + sidebarOffsetSingleHeader;

    //dynamically add the offset to sidebar on page load
    if($('.app-header').length === 0) {
        $('.sidebar').css('top', sidebarOffsetTopHeader) ;
      }
    else {
        $('.sidebar').css('top', sidebarOffsetDoubleHeader) ;
    }


    //scroll function 
    $(window).scroll(function(){  
      
      //check when the scroll is more than the height of universal header
      var scroll = $(window).scrollTop();

      //check if the app header is there or not
      if($('.app-header').length === 0) {
        //check when the scroll is more than the height of universal header
        if (scroll >= sidebarOffsetTopHeader) {
          $('.sidebar').css('top', 0) ;
        } 
        else {
          $('.sidebar').css('top', sidebarOffsetTopHeader);
        }
      } else {
        //check when the scroll is more than the height of universal header
        if (scroll >= sidebarOffsetTopHeader) {
          $('.app-header').addClass('top');
          $('.sidebar').css('top', sidebarOffsetSingleHeader) }
        else {
          $('.app-header').removeClass('top');
          $('.sidebar').css('top', sidebarOffsetDoubleHeader) ;
        }
      }

    
    });

    $('.content').css("padding-top", sidebarOffsetSingleHeader); 

       
    }).resize();
  
  });

 

}($));
