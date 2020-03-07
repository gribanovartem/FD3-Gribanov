import { SET_REVIEWS, SET_MODE_0, SET_MODE_1 } from './reviewsAC'

const initState={
  reviews: null,
  mode: 0,
}
function reviewsReducer(state=initState,action) {
  switch (action.type) {
    case SET_REVIEWS: {
      const newState={ ...state,
        reviews: action.reviews,
      }
      return newState
    }
    case SET_MODE_0: {
      const newState={ ...state,
        mode: 0, //  0 - добавление отзыва спрятано, 1- добавление отзыва видно
      }
      return newState
    }
    case SET_MODE_1: {
      const newState={ ...state,
        mode: 1, //  0 - добавление отзыва спрятано, 1- добавление отзыва видно
      }
      return newState
    }
    default:
      return state
  }
}

export default reviewsReducer