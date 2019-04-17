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

  $('.horizontal-scrolling-controls a').bind('click', function (event) {
    event.preventDefault();
    $('html, body').stop();
    const anchor = $(this).attr('href');

    moveToGraduate(anchor);

    $('.control').removeClass('active');
    $(this).addClass('active');
  });

  activateFirstGraduate();

  $('.certificate').on('click', function () {
    // $('.certificate').toggleClass('active');
    $(this).toggleClass('active');
  });
});

const moveToGraduate = (anchor) => {
  const graduateNumber = anchor.match(/\d+/g).map(Number)[0];

  $('.horizontal-scrolling-content').stop().animate({
    scrollLeft: findGraduatePosition(graduateNumber)
  }, 1000);
}

const getContainerIndent = (container) => {
  const margin = parseInt(container.css('margin-left'));
  const padding = parseInt(container.css('padding-left'));

  return margin + padding;
}

const findGraduatePosition = (graduateNumber) => {
  const indent = getContainerIndent($('.graduates-box .container'));
  $('.graduate').css('margin-right', indent);

  const graduateFullWidth = $('.graduate').width() + indent;

  return (graduateNumber - 1) * graduateFullWidth;
}

const activateFirstGraduate = () => {
  moveToGraduate('#graduate1');
  $('.control:first-child').addClass('active');
}
