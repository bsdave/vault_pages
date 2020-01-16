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

  $('.certificate').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.close-modal').on('click', function () {
    $('body').removeClass('darkened');
    $(this).parents('.modal').toggleClass('opened');
  });

  $('.open-modal-by-id').on('click', function (event) {
    event.preventDefault();
    openModal($(`#${$(this).data().modalId}`));
  });

  $('.carousel-body').slick({
    nextArrow: $('.next-course'),
    dots: true,
    appendDots: '.slides-control',
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.controller').slick({
    vertical: true,
    slidesToShow: 3
  });
});

const openModal = (modal) => {
  $('body').addClass('darkened');
  modal.addClass('opened');
}
