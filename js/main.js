'use strict';

var sliders = document.querySelector(".services__list");
var btnLeft = document.querySelector(".sliders__btn-left");
var btnRight = document.querySelector(".sliders__btn-right");

btnRight.addEventListener("click", function(event) {
  event.preventDefault();
  sliders.style.marginLeft = "-1170px";
  btnRight.classList.add("sliders__btn--active");
  btnLeft.classList.remove("sliders__btn--active");
});

btnLeft.addEventListener("click", function(event) {
  event.preventDefault();
  sliders.style.marginLeft = "0px";
  btnRight.classList.remove("sliders__btn--active");
  btnLeft.classList.add("sliders__btn--active");
});
