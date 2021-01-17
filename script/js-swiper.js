var swiper = new Swiper(".hero__slider", {
  direction: "horizontal",
  loop: true,
});

var swiper = new Swiper(".gallery__slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  slidesPerGroup: 3,
  wrapperEL: {
    el: ".gallery__wrapper",
  },
  pagination: {
    el: ".gallery-pagination",
    type: "fraction",
  },
  autoHeight: false,
});
