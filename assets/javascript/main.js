$(function () {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('opened');
    $('body').toggleClass('darkened');
  });

  $('.courses-shedule .course').on('click', function () {
    $(this).toggleClass('opened');
  });

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )
  })

});
