window.addEventListener("DOMContentLoaded", function () {
  var swiperHero = document.querySelector(".hero__slider");
  var swiperGallery_1 = document.querySelector(".gallery__top");
  var swiperGallery_2 = document.querySelector(".gallery__bottom");
  var swiperEdition = document.querySelector(".edition__slider");
  var swiperProjects = document.querySelector(".projects__slider");
  var eventsCards = document.querySelector(".events-cards");
  var swiper4,
    swiper6 = undefined;

  // кнопка поиска
  if (window.screen.width <= 1196) {
    document
      .querySelector(".js-searchShow")
      .addEventListener("click", function (event) {
        this.nextElementSibling.classList.toggle("show");
        this.parentNode.classList.toggle("show");
      });
  }

  // кнопка закрыть у поиска
  document
    .querySelector(".js-closeSearchMobile")
    .addEventListener("click", function () {
      this.previousElementSibling.classList.remove("show");
      this.parentNode.classList.remove("show");
    });

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

  // burger
  var toggles = $(".burger__btn");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }
  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.contains("is-active") === true
        ? this.classList.remove("is-active")
        : this.classList.add("is-active");
      $(".burger__content").toggleClass("active");
    });
  }

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
    var checkboxes = document.querySelector(".checkboxes");
    document.querySelector(".selectBox").addEventListener("click", function () {
      if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
      } else {
        checkboxes.style.display = "none";
        expanded = false;
      }
      document
        .querySelector(".edition-category__select")
        .classList.toggle("active");
    });

    // добавление checkbox вне селекта для мобилок
    var multiselectBlock = this.document.querySelector(".multiselect__select");
    var checkboxes = this.document.querySelector(".checkboxes");
    var checkboxElem = checkboxes.querySelectorAll(
      '.edition-category__lbl > input[type="checkbox"]'
    );
    var multiselectElementCount = 0;
    checkboxElem.forEach(function (input) {
      input.addEventListener("click", function (e) {
        var labelEdition = e.target.parentNode;
        var closeEdition = document.createElement("span");
        closeEdition.classList.add("edition-category__close", "active");
        if (e.target.parentNode.parentNode.contains(checkboxes)) {
          document.querySelector(".multiselect__select").classList.add("show");

          multiselectBlock.append(labelEdition);
          labelEdition.append(closeEdition);
          multiselectElementCount++;
        } else {
          var multiselectElement = e.target.parentNode;
          multiselectElement.lastElementChild.remove();
          checkboxes.append(multiselectElement);
          multiselectElementCount--;
          if (multiselectElementCount === 0) {
            multiselectBlock.classList.remove("show");
          }
        }
      });
    });
  }

  // Скрытие/показ Все события
  var eventBlock = document.querySelector(".events-cards__list");
  var eventElem = eventBlock.querySelectorAll(".events-cards__item");
  var index;
  document.querySelector(".js-eventAll").addEventListener("click", function () {
    if (document.width >= 1023) {
      index = 3;
    } else {
      index = 2;
    }
    for (; index <= eventElem.length; index++) {
      eventElem[index].classList.toggle("show");
    }
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
            spaceBetween: 0,
            setWrapperSize: true,
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
  initSwiper4();
  // Swiper edition
  function initSwiper4() {
    if ($(window).width() >= 321 && swiper4 === undefined) {
      swiper4 = new Swiper(swiperEdition, {
        pagination: {
          el: ".edition__pagination",
          type: "fraction",
          clickable: true,
          slideToClickedSlide: true,
        },
        mousewheel: {
          invert: false,
        },
        spaceBetween: 50,
        cssMode: true,
        navigation: {
          nextEl: ".edition-next",
          prevEl: ".edition-prev",
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
          pageUpDown: true,
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
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 38,
          },
          1367: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
        },
      });
      /*let pageSlider = document.querySelector('.edition__slide');
			swiper4.addEventListener('mouseleave', () => pageSlider.mousewheel.disable());
			swiper4.addEventListener('mouseenter', () => pageSlider.mousewheel.disable());*/
    } else if ($(window).width() < 321 && swiper4 !== undefined) {
      swiper4.destroy();
      swiper4 = undefined;
      $(".swiper-wrapper").removeAttr("style");
      $(".swiper-slide").removeAttr("style");
    }
  }
  $(window).resize(function () {
    initSwiper4();
  });

  // Swiper projects
  var swiper5 = new Swiper(swiperProjects, {
    navigation: {
      nextEl: ".projects-next",
      prevEl: ".projects-prev",
    },
    setWrapperSize: true,
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
      1367: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 50,
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

  // маска формы
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");

  im.mask(selector);

  new JustValidate(".form", {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
    },
  });

  // валидация поля телефон
  var name = document.querySelector(".form__name");
  var validate = document.querySelector(".form__validate");
  name.addEventListener("input", function () {
    if (name.value.replace(/\D*/g, "")) {
      validate.style.opacity = 1;
    } else {
      validate.style.opacity = 0;
      return true;
    }
  });
});
