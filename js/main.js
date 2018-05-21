'use strict';

var sliders = document.querySelector(".services__list");
var btnLeft = document.querySelector(".sliders__btn-left");
var btnRight = document.querySelector(".sliders__btn-right");
var btnMore = document.querySelector(".btn--work-open");
var btnClose = document.querySelector(".btn--work-close");
var workItemAdd = document.querySelectorAll(".work__list-item--additional");
var i;
var jsClick = document.querySelector(".js-click");
var workItem = document.querySelectorAll(".work__list-item");


btnRight.addEventListener("click", function(event) {
  event.preventDefault();
//  var windowWidth = document.body.clientWidth;
//  if ((windowWidth >= 960) & (windowWidth < 1200)) {
//    sliders.style.marginLeft = "-930px";
//  } else {
//    sliders.style.marginLeft = "-1170px";
//  }
  sliders.style.transform = "translateX(-100%)";
  btnRight.classList.add("sliders__btn--active");
  btnLeft.classList.remove("sliders__btn--active");
});

btnLeft.addEventListener("click", function(event) {
  event.preventDefault();
//  sliders.style.marginLeft = "0px";
  sliders.style.transform = "translateX(0px)";
  btnRight.classList.remove("sliders__btn--active");
  btnLeft.classList.add("sliders__btn--active");
});

btnMore.addEventListener("click", function(event) {
  event.preventDefault();
  btnMore.classList.add("hide");
  for (i=0; i < workItemAdd.length; i++) {
    workItemAdd[i].classList.add("open");
  }
  btnClose.classList.remove("hide");
});

btnClose.addEventListener("click", function(event) {
  event.preventDefault();
  btnClose.classList.add("hide");
  for (i=0; i < workItemAdd.length; i++) {
    workItemAdd[i].classList.remove("open");
  }
  btnMore.classList.remove("hide");
});

jsClick.addEventListener("click", function(event) {
  event.preventDefault();
  var new1 = jsClick.dataset.name;
  for (i = 0; i < workItem.length; i++) {
    if (new1 == workItem[i].getAttribute("data-name")) {
      console.log(workItem[i]);
      workItem[i].style.display = "block";
    } else
      workItem[i].style.display = "none";
  }
});
