import {ADD_TO_BASKET, CHANGE_COUNT, DELETE_ITEM} from "./basketAC";

const initState={
  basket: [],
};
function basketReducer(state=initState,action) {
  switch (action.type) {
    case ADD_TO_BASKET: {
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
    }
    case CHANGE_COUNT: {
      let newBasket = state.basket.slice()
      let newItem = {...newBasket[action.i], 'count': action.count}
      newBasket.splice(action.i, 1, newItem)
      return {
        ...state,
        basket: newBasket
      }
    }
    case DELETE_ITEM: {
      let newBasket = state.basket.slice()
      newBasket.splice(action.i, 1)
      return {
        ...state,
        basket: newBasket
      }
    }
    default:
      return state
  }
}

export default basketReducer
