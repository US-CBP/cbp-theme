import $ from 'jquery';

(function($) {

  'use strict';

  // var lastPosition = 0;

  /*$('.cbp-header[role="navigation"]').each(function() {
    $(window).on('scroll', function() {
      var currentPosition = $(this).scrollTop();

      if (!lastPosition) {
        lastPosition = currentPosition;
        return;
      }

      if (lastPosition > currentPosition) {
        $('.cbp-header').removeClass('disappear');

        //if not using app-header
        if($('.app-header').length) {
          $('.app-header').removeClass('top');
          $('.sidebar').removeClass('after-header').addClass('after-double-header');
        }
      } else {
        $('.cbp-header').addClass('disappear');
        // hide all menu items from the header
        $('.cbp-header .dropdown.open').removeClass('open');

        if($('.app-header').length) {
          $('.app-header').addClass('top');
          $('.sidebar').removeClass('after-double-header').addClass('after-header');
          $('.app-header .dropdown.open').removeClass('open');
        }

      }

      lastPosition = currentPosition;
    });
  });*/

  

  $( document ).ready(function() {
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
      else{
        $('.sidebar').css('top', sidebarOffsetDoubleHeader) ;
      }



$(window).scroll(function(){  
   
    var scroll = $(window).scrollTop();

 if($('.app-header').length === 0) {
        
      }
      else{
        if (scroll >= sidebarOffsetTopHeader) {
         $('.app-header').addClass('top'); }
      }


    /*if (scroll >= sidebarOffsetTopHeader) {
      $('.app-header').addClass('top');
      if($('.app-header').length === 0) {
        $('.sidebar').css('top', sidebarOffsetSingleHeader) ;
      } else{
        $('.sidebar').css('top', 0) ;
      }
    }
    else {
      $('.app-header').removeClass('top');
      if($('.app-header').length === 0) {
      $('.sidebar.after-double-header').css('top', sidebarOffsetDoubleHeader) ;
      } else{
        $('.sidebar.after-double-header').css('top', sidebarOffsetSingleHeader) ;
      }
    }*/
  });


    $(window).resize(function() {
        $('.content').css("padding-top", $(".app-header").height());        
    }).resize();
  });

}($));
