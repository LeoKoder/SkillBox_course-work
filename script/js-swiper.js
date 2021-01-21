var heroSwiper = new Swiper(".hero__slider", {
  direction: "horizontal",
  loop: true,
});

var gallerySwiper = new Swiper(".gallery__slider", {
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

var editionSwiper = new Swiper(".edition__slider", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 42,
  wrapperEL: {
    el: ".edition__wrapper",
  },
  pagination: {
    el: ".edition-pagination",
    type: "fraction",
  },
  autoHeight: false,
});

var projectSwiper = new Swiper(".projects__slider", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 39,
  wrapperEL: {
    el: ".projects__wrapper",
  },
  autoHeight: false,
  navigation: {
    nextEl: ".projects-button-next",
    prevEl: ".projects-button-prev",
  },
});
