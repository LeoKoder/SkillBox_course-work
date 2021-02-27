$(document).ready(function () {
  $(".hero__slider").slick({
    arrows: false,
  });

  $(".gallery__slider").on("init reInit", function (event, slick) {
    $(".gallery__pagination").text(1 + " / " + slick.slideCount);
  });
  $(".gallery__slider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".gallery__pagination").text(
        currentSlide + 1 + " / " + slick.slideCount
      );
    }
  );

  $(".gallery__slider").slick({
    slidesToScroll: 1,
    sliderToShow: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          sliderToScroll: 0.5,
        },
      },
    ],
  });

  $(".edition__slider").on("init reInit", function (event, slick) {
    $(".edition__pagination").text(1 + " / " + slick.slideCount);
  });
  $(".edition__slider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".edition__pagination").text(
        currentSlide + 1 + " / " + slick.slideCount
      );
    }
  );

  $(".edition__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{}],
  });

  $(".projects__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{}],
  });
});
