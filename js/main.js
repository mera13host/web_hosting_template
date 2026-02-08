$(function() { 

    $('a[href="#toggle-search"], .navbar-bootsnipp .bootsnipp-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
		event.preventDefault();
		$('.navbar-bootsnipp .bootsnipp-search .input-group > input').val('');
		$('.navbar-bootsnipp .bootsnipp-search').toggleClass('open');
		$('a[href="#toggle-search"]').closest('li').toggleClass('active');

		if ($('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
			/* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
			setTimeout(function() { 
				$('.navbar-bootsnipp .bootsnipp-search .form-control').focus();
			}, 100);
		}			
	});

	$(document).on('keyup', function(event) {
		if (event.which == 27 && $('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
			$('a[href="#toggle-search"]').trigger('click');
		}
	});
    
});

jQuery('.statistic-counter').counterUp({
    delay: 10,
    time: 2000
});



$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});


/* ================================= Accordian JS ================================= */


    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });

/* ================================= Accordian JS ================================= */

(function ($) {
	"use strict";
    
    //document ready function
    jQuery(document).ready(function($){
/*-----
Bootstrap carousel active
----------------------*/ 
        var mobileSlider = $('.carousel');
        mobileSlider.carousel({
          interval: 8000,
        });
        


    });//End document ready function
   


}(jQuery));	



$(function(){
	
	var menu = $('#menu'),
		pos = menu.offset();
		
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('container_front_main')){
				menu.slideUp('fast', function(){
					$(this).removeClass('container_front_main').addClass('fixed').slideDown('fast');
					$(".Flat_mega_menu").css('border-bottom','0 none');
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
				menu.slideUp('fast', function(){
					$(this).removeClass('fixed').addClass('container_front_main').slideDown('fast');
					$(".Flat_mega_menu").css('border-bottom','1px dotted #e4e4e4');
				});
			}
		});

});