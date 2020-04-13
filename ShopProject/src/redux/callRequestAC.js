const CALL_REQUEST_SHOW='CALL_REQUEST_SHOW'
const CALL_REQUEST_HIDE='CALL_REQUEST_HIDE'

const call_request_show = function () {
  return {
    type: CALL_REQUEST_SHOW,
  }
}
const call_request_hide = function () {
  return {
    type: CALL_REQUEST_HIDE,
  }
}

export {
  call_request_show, CALL_REQUEST_SHOW,
  call_request_hide, CALL_REQUEST_HIDE,
}
