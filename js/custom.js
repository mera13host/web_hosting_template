
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});



$(document).ready(function() {

  var bodyEl = $('body'),
    accordionDT = $('.accordion').find('dt'),
    accordionDD = accordionDT.next('dd'),
    parentHeight = accordionDD.height(),
    childHeight = accordionDD.children('.content').outerHeight(true),
    newHeight = parentHeight > 0 ? 0 : childHeight,
    accordionPanel = $('.accordion-panel'),
    buttonsWrapper = accordionPanel.find('.buttons-wrapper'),
    openBtn = accordionPanel.find('.open-btn'),
    closeBtn = accordionPanel.find('.close-btn');

  bodyEl.on('click', function(argument) {
    var totalItems = $('.accordion').children('dt').length;
    var totalItemsOpen = $('.accordion').children('dt.is-open').length;

    if (totalItems == totalItemsOpen) {
      openBtn.addClass('hidden');
      closeBtn.removeClass('hidden');
      buttonsWrapper.addClass('is-open');
    } else {
      openBtn.removeClass('hidden');
      closeBtn.addClass('hidden');
      buttonsWrapper.removeClass('is-open');
    }
  });

  function openAll() {

    openBtn.on('click', function(argument) {

      accordionDD.each(function(argument) {
        var eachNewHeight = $(this).children('.content').outerHeight(true);
        $(this).css({
          height: eachNewHeight
        });
      });
      accordionDT.addClass('is-open');
    });
  }

  function closeAll() {

    closeBtn.on('click', function(argument) {
      accordionDD.css({
        height: 0
      });
      accordionDT.removeClass('is-open');
    });
  }

  function openCloseItem() {
    accordionDT.on('click', function() {

      var el = $(this),
        target = el.next('dd'),
        parentHeight = target.height(),
        childHeight = target.children('.content').outerHeight(true),
        newHeight = parentHeight > 0 ? 0 : childHeight;

      // animate to new height
      target.css({
        height: newHeight
      });

      // remove existing classes & add class to clicked target
      if (!el.hasClass('is-open')) {
        el.addClass('is-open');
      }

      // if we are on clicked target then remove the class
      else {
        el.removeClass('is-open');
      }
    });
  }

  openAll();
  closeAll();
  openCloseItem();
});
