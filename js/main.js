'use strict';

const Selector = {
  SLIDERS: '.services__list',
  BTN_LEFT: '.sliders__btn-left',
  BTN_RIGHT: '.sliders__btn-right',
  BTN_MORE: '.btn--work-open',
  BTN_CLOSE: '.btn--work-close',
  MENU_OPEN: '.menu__btn--open',
  MENU_CLOSE: '.menu__btn--close',
  MENU: '.header__nav',
  NAV: '.work__nav',
}

const Selectors = {
  ITEM_ADD: '.work__list-item--additional',
  ITEM: '.work__list-item',
  JSCLICK: '.js-click',
}

function toNodes(Selectors, flag){
  let key = Object.keys(Selectors);
  let Temp = {}
  for (let i = 0; i < key.length; i++){
    Temp[key[i]] = document[!flag ? 'querySelector' : 'querySelectorAll'](Selectors[key[i]]);
  }
  return Temp;
}

const Node = toNodes(Selector, );
const Nodes = toNodes(Selectors, true);

document.addEventListener("DOMContentLoaded", toNodes);
Node.BTN_LEFT.addEventListener("click", sliderMoveLeft);
Node.BTN_RIGHT.addEventListener("click", sliderMoveRight);
Node.BTN_MORE.addEventListener("click", openAdditionalItems);
Node.BTN_CLOSE.addEventListener("click", closeAdditionalItems);
Node.MENU_OPEN.addEventListener("click", openMenu);
Node.MENU_CLOSE.addEventListener("click", closeMenu);
Node.NAV.addEventListener("click", handlerNavigation);

function sliderMoveRight(evt) {
  evt.preventDefault();
  Node.SLIDERS.style.transform = "translateX(-100%)";
  Node.BTN_RIGHT.classList.add("sliders__btn--active");
  Node.BTN_LEFT.classList.remove("sliders__btn--active");
};

function sliderMoveLeft(evt) {
  evt.preventDefault();
  Node.SLIDERS.style.transform = "translateX(0px)";
  Node.BTN_RIGHT.classList.remove("sliders__btn--active");
  Node.BTN_LEFT.classList.add("sliders__btn--active");
};

function openAdditionalItems(evt) {
  evt.preventDefault();
  Node.BTN_MORE.classList.add("hide");
  for (let i = 0; i < Nodes.ITEM_ADD.length; i++) {
    Nodes.ITEM_ADD[i].classList.add("open");
  }
  Node.BTN_CLOSE.classList.remove("hide");
};

function closeAdditionalItems(evt) {
  evt.preventDefault();
  Node.BTN_CLOSE.classList.add("hide");
  for (let i = 0; i < Nodes.ITEM_ADD.length; i++) {
    Nodes.ITEM_ADD[i].classList.remove("open");
  }
  Node.BTN_MORE.classList.remove("hide");
};

function handlerNavigation(evt){
  evt.preventDefault();
  let child = evt.target;
  let parent = evt.currentTarget;
  let temp = evt.target.dataset.name;
  if (child != parent && temp != '') {
    for (let i = 0; i < Nodes.ITEM.length; i++) {
      if (temp == Nodes.ITEM[i].dataset.name) {
        Nodes.ITEM[i].style.display = "block";
      }
      else Nodes.ITEM[i].style.display = "none";
    }
  }
  if (temp == 'all') {
    for (let i = 0; i < Nodes.ITEM.length; i++) {
      Nodes.ITEM[i].style.display = "block";
      Nodes.ITEM_ADD[i].style.display = "none";
    }
  }
};

function openMenu(evt) {
  evt.preventDefault();
  Node.MENU_OPEN.classList.add("menu__btn-hide");
  Node.MENU_CLOSE.classList.add("menu__btn-show");
  Node.MENU.classList.add("open");
};

function closeMenu(evt) {
  evt.preventDefault();
  Node.MENU_CLOSE.classList.remove("menu__btn-show");
  Node.MENU_OPEN.classList.remove("menu__btn-hide");
  Node.MENU.classList.remove("open");
};
