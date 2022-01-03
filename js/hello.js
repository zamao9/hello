$(function() {




                          /* BURGER */

  $('.burger').click(function(event) {
    event.preventDefault();

    $('.burger').toggleClass('active');
    $("#navigation").toggleClass('active');
    $('.header').toggleClass('active');
    $('.line').toggleClass('active');
    $('body').toggleClass('lock');


  })

  $('.links').click(function() {

    $('.burger').removeClass('active');
    $("#navigation").removeClass('active');
    $('.header').removeClass('active');
    $('.line').removeClass('active');
    $('body').removeClass('lock');

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
