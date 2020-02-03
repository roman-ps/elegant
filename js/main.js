'use strict';

const Selectors = {
  SLIDERS: '.services__list',
  BTN_LEFT: '.sliders__btn-left',
  BTN_RIGHT: '.sliders__btn-right',
  BTN_MORE: '.btn--work-open',
  BTN_CLOSE: '.btn--work-close',
  WORK_ITEMS_ADD: '.work__list-item--additional',
  JS_CLICK: '.js-click',
  WORK_ITEM: '.work__list-item',
  MENU_OPEN: '.menu__btn--open',
  MENU_CLOSE: '.menu__btn--close',
  MENU: '.header__nav',
}

function toNodes(Selectors){
  let key = Object.keys(Selectors);
  let Temp = {}
  for (let i = 0; i < key.length; i++){
    Temp[key[i]] = document.querySelector(Selectors[key[i]]);
  }
  return Temp;
}

const Nodes = toNodes(Selectors);

document.addEventListener("DOMContentLoaded", toNodes);

Nodes.BTN_RIGHT.addEventListener("click", function(evt) {
  evt.preventDefault();
  Nodes.SLIDERS.style.transform = "translateX(-100%)";
  Nodes.BTN_RIGHT.classList.add("sliders__btn--active");
  Nodes.BTN_LEFT.classList.remove("sliders__btn--active");
});

Nodes.BTN_LEFT.addEventListener("click", function(evt) {
  evt.preventDefault();
  Nodes.SLIDERS.style.transform = "translateX(0px)";
  Nodes.BTN_RIGHT.classList.remove("sliders__btn--active");
  Nodes.BTN_LEFT.classList.add("sliders__btn--active");
});

Nodes.BTN_MORE.addEventListener("click", function(evt) {
  evt.preventDefault();
  Nodes.BTN_MORE.classList.add("hide");
  for (let i = 0; i < workItemAdd.length; i++) {
    workItemAdd[i].classList.add("open");
  }
  Nodes.BTN_CLOSE.classList.remove("hide");
});

Nodes.BTN_CLOSE.addEventListener("click", function(evt) {
  evt.preventDefault();
  Nodes.BTN_CLOSE.classList.add("hide");
  for (let i = 0; i < workItemAdd.length; i++) {
    workItemAdd[i].classList.remove("open");
  }
  Nodes.BTN_MORE.classList.remove("hide");
});

for (let i = 0; i < Nodes.JS_CLICK.length; i++) {
  Nodes.JS_CLICK[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  var new1 = Nodes.JS_CLICK[0].dataset.name;
  for (let i = 0; i < workItem.length; i++) {
    if (new1 === workItem[i].getAttribute("data-name")) {
      workItem[i].style.display = "block";
    }
    else workItem[i].style.display = "none";
  }
})
}

Nodes.MENU_OPEN.addEventListener("click", function(evt) {
  evt.preventDefault();
  Nodes.MENU_OPEN.classList.add("menu__btn-hide");
  Nodes.MENU_CLOSE.classList.add("menu__btn-show");
  Nodes.MENU.classList.add("open");
});

Nodes.MENU_CLOSE.addEventListener("click", function(evt) {
  evt.preventDefault();
  Nodes.MENU_CLOSE.classList.remove("menu__btn-show");
  Nodes.MENU_OPEN.classList.remove("menu__btn-hide");
  Nodes.MENU.classList.remove("open");
});


