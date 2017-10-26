// меню

var header = document.querySelector(".page-header");
var menu = document.querySelector(".main-nav");
var menuToggle = document.querySelector(".main-nav__toggle");

header.classList.remove("page-header--stretched");
menu.classList.remove("main-nav--opened");
menuToggle.classList.add("main-nav__toggle--open");

menuToggle.addEventListener("click", function (event) {
  "use strict";
  event.preventDefault();
  header.classList.toggle("page-header--stretched");
  menu.classList.toggle("main-nav--opened");
  menuToggle.classList.toggle("main-nav__toggle--open");
  menuToggle.classList.toggle("main-nav__toggle--close");
});

// слайдер цен на мобильном

var tableSlider = document.querySelector(".price__slider");

if (tableSlider) {
  tableSlider.classList.remove("price__slider--no-js");
}

// карта

var mapBox = document.querySelector("#map");
var mapMarker = document.querySelector(".contacts__marker");

if (mapBox && mapMarker) {
  mapBox.classList.remove("contacts__map--no-js");
  mapMarker.classList.remove("contacts__marker--no-js");

  ymaps.ready(init);

  function init() {
    var yandexMap = new ymaps.Map("map", {
      center: [59.93915, 30.3232],
      zoom: 16,
      controls: []
    });

    var myPlacemark = new ymaps.Placemark([59.9386, 30.3231], {         hintContent: "Pink",
      balloonContent: "ул. Большая Конюшенная, 19/8"
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-marker.svg",
      iconImageSize: [35, 35]
    });

    yandexMap.geoObjects.add(myPlacemark);
  };
}

// инструменты редактирования фото на мобильном

var tools = document.querySelector(".tools");

if (tools) {
  tools.classList.remove("tools--no-js");
}

// валидация формы и попапы

var form = document.querySelector(".form");
var error = document.querySelector(".modal--error");
var success = document.querySelector(".modal--success");
var firstName = form.querySelector("#name-field");
var lastName = form.querySelector("#surname-field");
var email = form.querySelector("#email-field");
var closeErrorPopup = error.querySelector(".modal__close");
var closeSuccessPopup = success.querySelector(".modal__close");


if (form) {
  form.addEventListener("submit", function(event) {
    if (!firstName.value || !lastName.value || !email.value) {
      event.preventDefault();
      error.classList.add("modal--show");
    } else {
      event.preventDefault();
      success.classList.add("modal--show");
    }
  });

  closeErrorPopup.addEventListener("click", function(event) {
    error.classList.remove("modal--show");
  });

  closeSuccessPopup.addEventListener("click", function(event) {
    success.classList.remove("modal--show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (success.classList.contains("modal--show")) {
        success.classList.remove("modal--show");
      };
      if (error.classList.contains("modal--show")) {
        error.classList.remove("modal--show");
      }
    }
  });
}
