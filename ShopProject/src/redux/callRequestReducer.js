import {CALL_REQUEST_SHOW, CALL_REQUEST_HIDE} from './callRequestAC'

const initState = {
  callRequest: 'hide'
}

function callRequestReducer(state=initState, action) {
  switch(action.type) {
    case CALL_REQUEST_SHOW: {
      return {
        state,
        callRequest: 'show'
      }
    }
    case CALL_REQUEST_HIDE: {
      return {
        state,
        callRequest: 'hide'
      }
    }
    default:
      return state
  }
}
export default callRequestReducer
