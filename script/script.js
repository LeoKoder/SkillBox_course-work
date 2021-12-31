window.addEventListener("DOMContentLoaded", function () {
  var swiperHero = document.querySelector(".hero__slider");

  var swiperGallery_1 = document.querySelector(".gallery__top");
  var swiperGallery_2 = document.querySelector(".gallery__bottom");

  var swiperEdition = document.querySelector(".edition__slider");

  var swiperProjects = document.querySelector(".projects__slider");

  var eventsCards = document.querySelector(".events-cards");

  // select
  // const element1 = document.querySelector(".gallery-filter__select");
  // const choice1 = new Choices(element1, {
  //   searchEnabled: false,
  // });

  // custom select
  const selected = document.querySelector(".custom-select__title");
  const optionsContainer = document.querySelector(".custom-select__container");

  const optionsList = document.querySelectorAll(".custom-select__option");

  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
  // const element2 = document.querySelector(".edition-category__select");
  // const choice2 = new Choices(element2, {
  //   searchEnabled: false,
  // });

  // burger
  document.querySelector(".burger__btn").addEventListener("click", function () {
    document.querySelector(".header-top__nav").style.display = "block";
    document.querySelector(".header-top__container").style.alignItems =
      "flex-start";
    document.querySelector(".header").classList.add("header__position");
    document.querySelector(".logo__link").classList.add("burger__show");
    document
      .querySelector(".header-bottom__search")
      .classList.add("burger__show");
    document.querySelector(".header-top__log-in").style.display = "block";
    document.querySelector(".burger__close").style.display = "block";
    document.querySelector(".burger__btn").style.display = "none";
  });

  // burger close
  document
    .querySelector(".burger__close")
    .addEventListener("click", function () {
      document.querySelector(".header-top__nav").style.display = "none";
      document.querySelector(".header-top__container").style.alignItems =
        "center";
      document.querySelector(".header").classList.remove("header__position");
      document.querySelector(".logo__link").classList.remove("burger__show");
      document
        .querySelector(".header-bottom__search")
        .classList.remove("burger__show");
      document.querySelector(".header-top__log-in").style.display = "none";
      document.querySelector(".burger__close").style.display = "none";
      document.querySelector(".burger__btn").style.display = "block";
    });

  // выпадающее меню
  document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches(".header-bottom__dropbtn");
    if (
      !isDropdownButton &&
      e.target.closest(".header-bottom__dropdown") != null
    )
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest(".header-bottom__dropdown");
      currentDropdown.classList.toggle("active");
    }

    document
      .querySelectorAll(".header-bottom__dropdown.active")
      .forEach((dropdown) => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
      });
  });

  //custom checkbox
  if ($(window).width() <= 320) {
    var expanded = false;

    document.querySelector(".selectBox").addEventListener("click", function () {
      var checkboxes = document.querySelector(".checkboxes");
      if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
      } else {
        checkboxes.style.display = "none";
        expanded = false;
      }
    });
  }
  //

  // Скрытие/показ Все события
  document
    .querySelector(".events-cards__all")
    .addEventListener("click", function () {
      document
        .querySelectorAll(".events-cards__item_invisible")
        .forEach((eventsEl) => {
          eventsEl.classList.toggle("active");
        });
      this.style.display = "none";
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
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      700: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 35,
      },
      1367: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
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
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      700: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 35,
      },
      1367: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });

  // Swiper events
  var swiper4,
    swiper6 = undefined;

  function initSwiper6() {
    if ($(window).width() <= 767 && swiper6 === undefined) {
      swiper6 = new Swiper(eventsCards, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
        pagination: {
          el: ".events__pagination",
          type: "bullets",
          clickable: true,
          slideToClickedSlide: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          550: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
      });
    } else if ($(window).width() > 768 && swiper6 !== undefined) {
      swiper6.destroy();
      swiper6 = undefined;
      $(".swiper-wrapper").removeAttr("style");
      $(".swiper-slide").removeAttr("style");
    }
  }

  initSwiper6();

  $(window).resize(function () {
    initSwiper6();
  });

  // Swiper edition
  function initSwiper4() {
    if ($(window).width() >= 319 && swiper4 === undefined) {
      swiper4 = new Swiper(swiperEdition, {
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
        breakpoints: {
          321: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
          },
          767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1197: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        },
      });
    } else if ($(window).width() < 321 && swiper4 !== undefined) {
      swiper4.destroy();
      swiper4 = undefined;
      $(".swiper-wrapper").removeAttr("style");
      $(".swiper-slide").removeAttr("style");
    }
  }

  initSwiper4();

  $(window).resize(function () {
    initSwiper4();
  });

  // Swiper projects
  var swiper5 = new Swiper(swiperProjects, {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".projects-next",
      prevEl: ".projects-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
  });

  // tab
  document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      document.querySelectorAll(".tabs__btn").forEach(function (tabsBtnOpen) {
        tabsBtnOpen.classList.remove("active");
      });
      const path = event.currentTarget.dataset.path;
      const lang = event.currentTarget.dataset.language;

      let tabContent = document.querySelectorAll(".tab-content");
      tabOpen(tabContent, path);
      let tabAuthor = document.querySelectorAll(".author__btn");
      let tabPhoto = document.querySelectorAll(".tab-author");

      tabAuthor.forEach(function (author) {
        author.classList.remove("active");
      });
      document.querySelector(`[data-author="${lang}"]`).classList.add("active");

      tabPhoto.forEach(function (photo) {
        photo.classList.remove("active");
      });
      document.querySelector(`[data-photo="${lang}"]`).classList.add("active");
    });
  });

  $(".accordion").accordion();

  document.querySelectorAll(".author__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (e) {
      document.querySelectorAll(".author__btn").forEach(function (tabsBtnOpen) {
        tabsBtnOpen.classList.remove("active");
      });
    });
    tabsBtn.addEventListener("click", function authorOpen(event) {
      const path = event.currentTarget.dataset.path;
      let tabAuthor = document.querySelectorAll(".tab-author");
      tabOpen(tabAuthor, path);
    });
  });

  function tabOpen(block, attribute) {
    block.forEach(function (tabContent) {
      tabContent.classList.remove("active");
    });
    document
      .querySelector(`[data-path="${attribute}"]`)
      .classList.add("active");
    document
      .querySelector(`[data-target="${attribute}"]`)
      .classList.add("active");
  }

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

  // валидация поля телефон
  var phone = document.querySelector("input[type='tel']");
  var validate = document.querySelector(".form__validate");
  phone.addEventListener("input", function () {
    if (!phone.value.replace(/[^0-9\.]/g, "")) {
      validate.style.opacity = 1;
    } else {
      validate.style.opacity = 0;
      return true;
    }
  });
});
