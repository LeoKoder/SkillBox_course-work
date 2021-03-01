window.addEventListener("DOMContentLoaded", function () {
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
