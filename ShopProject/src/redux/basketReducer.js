import {ADD_TO_BASKET, CHANGE_COUNT, DELETE_ITEM, MODAL_SHOW, MODAL_HIDE, CLEAR_BASKET} from "./basketAC";

const initState={
  basket: [],
  modalShow: false,
};
function basketReducer(state=initState,action) {
  switch (action.type) {
    case ADD_TO_BASKET: {
      let match = false
      let newBasket
      state.basket.forEach((prod, i)=>{
        if(prod.key===action.item.key) {
          newBasket = state.basket.slice()
          match = true
          let newItem = {...newBasket[i], count: newBasket[i].count + 1}
          newBasket.splice(i, 1, newItem)
        }
      })
      if(!match) {
        newBasket = state.basket.slice()
        newBasket.push(action.item)
        newBasket[newBasket.length-1].count = 1
      }
      return {
          ...state,
          basket: newBasket
      }
    }
    case CHANGE_COUNT: {
      let newBasket = state.basket.slice()
      let newItem = {...newBasket[action.i], count: action.count}
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
    case MODAL_SHOW: {
      return {
        ...state,
        modalShow: true
      }
    }
    case MODAL_HIDE: {
      return {
        ...state,
        modalShow: false
      }
    }
    case CLEAR_BASKET: {
      return {
        ...state,
        basket: []
      }
    }
    default:
      return state
  }
}

export default basketReducer
