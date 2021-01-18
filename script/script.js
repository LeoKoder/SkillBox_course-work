window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".events__btn").addEventListener("click", function () {
    document.querySelectorAll(".cards-visible").forEach(function (visible) {
      visible.classList.toggle("events-cards__item_visibled");
    });
  });
});
