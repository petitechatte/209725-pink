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
