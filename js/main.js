'use strict';

const Selectors = {
  SLIDERS: '.services__list',
  BTN_LEFT: '.sliders__btn-left',
  BTN_RIGHT: '.sliders__btn-right',
  BTN_MORE: '.btn--work-open',
  BTN_CLOSE: '.btn--work-close',
  MENU_OPEN: '.menu__btn--open',
  MENU_CLOSE: '.menu__btn--close',
  MENU: '.header__nav',
}

const SelectorsAll = {
  ITEM_ADD: '.work__list-item--additional',
  ITEM: '.work__list-item',
  JSCLICK: '.js-click',
}

let workItemAdd = document.querySelectorAll(".work__list-item--additional");
let jsClick = document.querySelectorAll(".js-click");
let workItem = document.querySelectorAll(".work__list-item");

function toNodes(Selectors, flag){
  let key = Object.keys(Selectors);
  let Temp = {}
  for (let i = 0; i < key.length; i++){
    Temp[key[i]] = document[!flag ? 'querySelector' : 'querySelectorAll'](Selectors[key[i]]);
  }
  return Temp;
}

const Node = toNodes(Selectors, );
const Nodes = toNodes(SelectorsAll, true);

document.addEventListener("DOMContentLoaded", toNodes);

Node.BTN_RIGHT.addEventListener("click", function(evt) {
  evt.preventDefault();
  Node.SLIDERS.style.transform = "translateX(-100%)";
  Node.BTN_RIGHT.classList.add("sliders__btn--active");
  Node.BTN_LEFT.classList.remove("sliders__btn--active");
});

Node.BTN_LEFT.addEventListener("click", function(evt) {
  evt.preventDefault();
  Node.SLIDERS.style.transform = "translateX(0px)";
  Node.BTN_RIGHT.classList.remove("sliders__btn--active");
  Node.BTN_LEFT.classList.add("sliders__btn--active");
});

Node.BTN_MORE.addEventListener("click", function(evt) {
  evt.preventDefault();
  Node.BTN_MORE.classList.add("hide");
  for (let i = 0; i < Nodes.ITEM_ADD.length; i++) {
    Nodes.ITEM_ADD[i].classList.add("open");
  }
  Node.BTN_CLOSE.classList.remove("hide");
});

Node.BTN_CLOSE.addEventListener("click", function(evt) {
  evt.preventDefault();
  Node.BTN_CLOSE.classList.add("hide");
  for (let i = 0; i < Nodes.ITEM_ADD.length; i++) {
    Nodes.ITEM_ADD[i].classList.remove("open");
  }
  Node.BTN_MORE.classList.remove("hide");
});

for (let i = 0; i < Nodes.JSCLICK.length; i++) {
  Nodes.JSCLICK[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  var new1 = Nodes.JSCLICK[0].dataset.name;
  for (let i = 0; i < Nodes.ITEM.length; i++) {
    if (new1 === Nodes.ITEM[i].getAttribute("data-name")) {
      Nodes.ITEM[i].style.display = "block";
    }
    else Nodes.ITEM[i].style.display = "none";
  }
  }
                             )
}

Node.MENU_OPEN.addEventListener("click", function(evt) {
  evt.preventDefault();
  Node.MENU_OPEN.classList.add("menu__btn-hide");
  Node.MENU_CLOSE.classList.add("menu__btn-show");
  Node.MENU.classList.add("open");
});

Node.MENU_CLOSE.addEventListener("click", function(evt) {
  evt.preventDefault();
  Node.MENU_CLOSE.classList.remove("menu__btn-show");
  Node.MENU_OPEN.classList.remove("menu__btn-hide");
  Node.MENU.classList.remove("open");
});


