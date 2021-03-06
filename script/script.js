window.addEventListener("DOMContentLoaded", function () {
  var swiperHero = document.querySelector(".hero__slider");

  var swiperGallery_1 = document.querySelector(".gallery__slider_top");
  var swiperGallery_2 = document.querySelector(".gallery__slider_bottom");

  var swiperEdition = document.querySelector(".edition__slider");

  var swiperProjects = document.querySelector(".projects__slider");

  // select
  const element = document.querySelector(".gallery-filter__select");
  const choice = new Choices(element, {
    searchEnabled: false,
  });
  // CLick
  document
    .querySelector(".events-cards__btn")
    .addEventListener("click", function () {
      document.querySelectorAll(".cards-visible").forEach(function (visible) {
        visible.classList.toggle("events-cards__item_visibled");
      });
    });

  // Swiper hero
  var swiper1 = new Swiper(swiperHero, {});

  // Swiper gallery top
  var swiper2 = new Swiper(swiperGallery_1, {
    setWrapperSize: true,
    roundLengths: true,
    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
      clickable: true,
      slideToClickedSlide: true,
    },
    loop: true,
    navigation: {
      nextEl: ".gallery-next",
      prevEl: ".gallery-prev",
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  // swiper gallery bottom
  var swiper3 = new Swiper(swiperGallery_2, {
    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
      clickable: true,
      slideToClickedSlide: true,
    },
    loop: true,
    navigation: {
      nextEl: ".gallery-next",
      prevEl: ".gallery-prev",
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
  });

  // Swiper edition
  var swiper4 = new Swiper(swiperEdition, {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    pagination: {
      el: ".edition__pagination",
      type: "fraction",
      clickable: true,
      slideToClickedSlide: true,
    },
    loop: true,
    navigation: {
      nextEl: ".edition-next",
      prevEl: ".edition-prev",
    },
  });
  // Swiper projects
  var swiper5 = new Swiper(swiperProjects, {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 80,
    loop: true,
    navigation: {
      nextEl: ".projects-next",
      prevEl: ".projects-prev",
    },
  });

  // tab
  document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll(".tab-content").forEach(function (tabContent) {
        tabContent.classList.remove("active");
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("active");
    });
  });

  document.querySelectorAll(".author__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll(".tab-author").forEach(function (tabContent) {
        tabContent.classList.remove("active");
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("active");
    });
  });

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.75736198732715, 37.60850385455312],
      controls: [],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 16,
    });
    // Создание метки произвольного цвета.
    var myPlacemark = new ymaps.Placemark(
      [55.75823317538601, 37.601068771307105],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/marker.png",
        iconImageSize: [20, 20],
      }
    );

    myMap.controls.add("geolocationControl", {
      size: "small",
      float: "right",
      position: {
        bottom: "310px",
        right: "20px",
      },
    });

    myMap.controls.add("zoomControl", {
      size: "small",
      float: "right",
      position: {
        top: "275px",
        right: "20px",
      },
    });
    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
  }
});
