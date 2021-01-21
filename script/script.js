window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".events__btn").addEventListener("click", function () {
    document.querySelectorAll(".cards-visible").forEach(function (visible) {
      visible.classList.toggle("events-cards__item_visibled");
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
      center: [55.76, 37.64],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 7,
    });
  }
});
