import {SET_POPUP_HIDE, SET_POPUP_SHOW} from "./popupAC";

const initState={
  popup: 'hide',
};
function popupReducer(state=initState,action) {
  switch (action.type) {
    case SET_POPUP_HIDE: {
      return {
        ...state,
        popup: 'hide'
      }
    }
    case SET_POPUP_SHOW: {
      return {
        ...state,
        popup: 'show'
      }
    }
    default:
      return state
  }
}

export default popupReducer
