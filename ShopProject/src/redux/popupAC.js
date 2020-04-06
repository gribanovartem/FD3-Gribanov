const SET_POPUP_HIDE='SET_POPUP_HIDE'
const SET_POPUP_SHOW='SET_POPUP_SHOW'

const set_popup_hide = function () {
  return {
    type: SET_POPUP_HIDE
  }
}
const set_popup_show = function () {
  return {
    type: SET_POPUP_SHOW
  }
}


export {
  set_popup_hide, SET_POPUP_HIDE,
  set_popup_show, SET_POPUP_SHOW
}
