$(function () {
  'use strict';
  //nicescroll
  $('body').niceScroll();

  //header height
  $('.header').height($(window).height());
  $('.intro').css('paddingTop', ($(window).height() - $('.intro').height()) / 2);

  //next section button
  $('.header .arrow i').click(function () {
    $('html, body').animate({
      scrollTop : $('.features').offset().top
    }, 1000);
  });

  $('.header .buttons .works').click(function () {
    $('html, body').animate({
      scrollTop : $('.our-work').offset().top
    }, 1000);
  });

  $('.header .buttons .hire-us').click(function () {
    $('html, body').animate({
      scrollTop : $('.our-team').offset().top
    }, 1500);
  });

  // show more button
  $('.our-work .show-more').click(function () {
    $('.items-box .hidden').fadeIn(500);
  });

  // testimonials slider
  var leftArrow = $('.fa-chevron-left'),
      rightArrow = $('.fa-chevron-right');

  function check() {
    $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
    $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
  }
  check();
  $('.testimonials i').click(function () {
    if ($(this).hasClass('fa-chevron-right')) {
      $('.testimonials .active').fadeOut(100, function () {
        $(this).removeClass('active').next().addClass('active').fadeIn();
        check();
      })
    } else {
      $('.testimonials .active').fadeOut(100, function () {
        $(this).removeClass('active').prev().addClass('active').fadeIn();
        check();
      })
    }
  });
});
