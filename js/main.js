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
};

const Selectors = {
  ITEM_ADD: '.work__list-item--additional',
  ITEM: '.work__list-item',
  JSCLICK: '.js-click',
};

const queryTypes = {
  ONE: 'querySelector',
  ALL: 'querySelectorAll'
};

function toNodes(Selectors, flag){
  let queryType = flag ? 'querySelectorAll' : 'querySelector';
  let key = Object.keys(Selectors);
  let Temp = {};
  key.forEach(function(elem) {
    Temp[key] = document[queryType](Selectors[key]);
  })
  return Temp;
};

const Node = toNodes(Selector, );
const Nodes = toNodes(Selectors, true);

Node.BTN_LEFT.addEventListener("click", sliderMoveLeft);
Node.BTN_RIGHT.addEventListener("click", sliderMoveRight);
Node.BTN_MORE.addEventListener("click", openAddItems);
Node.BTN_CLOSE.addEventListener("click", closeAddItems);
Node.MENU_OPEN.addEventListener("click", openMenu);
Node.MENU_CLOSE.addEventListener("click", closeMenu);
Node.NAV.addEventListener("click", handlerNavigation);

function hideAddItems(Nodes) {
  for (let i = 0; i < Nodes.ITEM_ADD.length; i++) {
    Nodes.ITEM_ADD[i].style.display = "none";
  }
};

function stateAddItems(action, item) {
  for (let i = 0; i < item.length; i++) {
    item[i].style.display = action;
  }
}

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

function openAddItems(evt) {
  evt.preventDefault();
  Node.BTN_MORE.classList.toggle("hide");
  stateAddItems("block", Nodes.ITEM_ADD);
  Node.BTN_CLOSE.classList.toggle("hide");
};

function closeAddItems(evt) {
  evt.preventDefault();
  Node.BTN_CLOSE.classList.toggle("hide");
  stateAddItems("none", Nodes.ITEM_ADD);
  Node.BTN_MORE.classList.toggle("hide");
};

function handlerNavigation(evt){
  evt.preventDefault();
  let child = evt.target;
  let parent = evt.currentTarget;
  let temp = evt.target.dataset.name;
  if (child != parent && temp != '') {
    for (let i = 0; i < Nodes.ITEM.length; i++) {
      if (temp === Nodes.ITEM[i].dataset.name) {
        Nodes.ITEM[i].style.display = "block";
      }
      else Nodes.ITEM[i].style.display = "none";
    }
  }
  if (temp == 'all') {
    stateAddItems("block", Nodes.ITEM);
    hideAddItems(Nodes, true);
    /*for (let i = 0; i < Nodes.ITEM.length; i++) {
      Nodes.ITEM[i].style.display = "block";
    }*/
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
