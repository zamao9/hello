$(function() {




                          /* BURGER */

  $('.burger').click(function(event) {
    event.preventDefault();

    $('.burger').toggleClass('active');
    $("#navigation").toggleClass('active');

  })




                          /* SCROLL */

  $("[data-scroll]").click(function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate ({
      scrollTop:blockOffset
    }, 900);

  })





})
