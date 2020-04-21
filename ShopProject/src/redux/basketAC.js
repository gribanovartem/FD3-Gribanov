const ADD_TO_BASKET='ADD_TO_BASKET'
const CHANGE_COUNT='CHANGE_COUNT'
const DELETE_ITEM='DELETE_ITEM'
const MODAL_SHOW='MODAL_SHOW'
const MODAL_HIDE='MODAL_HIDE'
const CLEAR_BASKET='CLEAR_BASKET'

const add_to_basket = function (item) {
  return {
    type: ADD_TO_BASKET,
    item,
  }
}
const change_count = function (count, i) {
  return {
    type: CHANGE_COUNT,
    count,
    i,
  }
}
const delete_item = function (i) {
  return {
    type: DELETE_ITEM,
    i,
  }
}
const modal_show = function () {
  return {
    type: MODAL_SHOW,
  }
}
const modal_hide = function () {
  return {
    type: MODAL_HIDE,
  }
}
const clear_basket = function () {
  return {
    type: CLEAR_BASKET,
  }
}

export {
  add_to_basket, ADD_TO_BASKET,
  change_count, CHANGE_COUNT,
  delete_item, DELETE_ITEM,
  modal_show, MODAL_SHOW,
  modal_hide, MODAL_HIDE,
  clear_basket, CLEAR_BASKET
}
