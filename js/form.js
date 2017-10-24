var form = document.querySelector(".form");
var error = document.querySelector(".modal--error");
var success = document.querySelector(".modal--success");
var firstName = form.querySelector("#name-field");
var lastName = form.querySelector("#surname-field");
var email = form.querySelector("#email-field");
var closeErrorPopup = error.querySelector(".modal__close");
var closeSuccessPopup = success.querySelector(".modal__close");

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