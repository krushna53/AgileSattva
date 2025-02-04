(function ($) {
	"use strict";

$(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
       $('#vjheader').addClass('vjClass');
    } else {
       $('#vjheader').removeClass('vjClass');
    }
});

var swiper = new Swiper(".testimonial-slider", {
      slidesPerView: 2,
	 spaceBetween: 60,
	  autoplay: true,
	  loop: true,
	  speed: 800,
      freeMode: true,
      navigation: false,
	  pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
	  breakpoints: {
    320: {
      slidesPerView: 1
    },
    680: {
      slidesPerView: 1
    },
    
    768: {
      slidesPerView: 2
    },
    
    1024: {
      slidesPerView: 2
    }
  }
	 
    });

})(jQuery);