const element = document.querySelector("#filter__select");
const choice = new Choices(element, {
  searchEnabled: false,
  renderChoiceLimit: 2,
  hideDropdown([{value: one}]);
});

