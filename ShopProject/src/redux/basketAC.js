const ADD_TO_BASKET='ADD_TO_BASKET'
const CHANGE_COUNT='CHANGE_COUNT'
const DELETE_ITEM='DELETE_ITEM'

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

export {
  add_to_basket, ADD_TO_BASKET,
  change_count, CHANGE_COUNT,
  delete_item, DELETE_ITEM,
}
