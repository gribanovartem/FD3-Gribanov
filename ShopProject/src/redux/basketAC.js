const ADD_TO_BASKET='ADD_TO_BASKET'

const add_to_basket = function (item) {
  return {
    type: ADD_TO_BASKET,
    item,
  }
}

export {
  add_to_basket, ADD_TO_BASKET,
}
