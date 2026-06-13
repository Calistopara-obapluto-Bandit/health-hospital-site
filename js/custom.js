(function ($) {

  "use strict";

    // PRE LOADER - use modern event and add fallback timeout
    $(window).on('load', function(){
      $('.preloader').fadeOut(800);
    });
    // Fallback: hide preloader after 4s in case load event doesn't fire
    setTimeout(function(){
      $('.preloader').fadeOut(800);
    }, 4000);


    //Navigation Section
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    })


    // PARALLAX EFFECT
    $.stellar();  


    // SMOOTHSCROLL
    $(function() {
      $('.navbar-default a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);
