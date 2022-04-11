$(function(){
  $('.hamburger-menu').on('click', function(){

    $(this).toggleClass('clicked');

    if ($('.navi').hasClass('is-active')) {
      $('.navi').removeClass('is-active');
    }
      else {
        $('.navi').addClass('is-active');
      }
  });

  $('.slide-left').on('inview', function(event, isInView) {
    if (isInView) {
        if (isInView) {
            $(this).addClass('slide-from-l');
        }
    } 
  });

  $('.slide-right').on('inview', function(event, isInView) {
    if (isInView) {
        if (isInView) {
            $(this).addClass('slide-from-r');
        }
    } 
  });

  $('.voice__item').on('inview', function(event, isInView) {
    if (isInView) {
        if (isInView) {
            $(this).addClass('baloon');
        }
    } 
  });
});
