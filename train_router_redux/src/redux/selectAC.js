const SELECT_MOBILE='SELECT_MOBILE';
const UNSELECT_MOBILE='UNSELECT_MOBILE';
const SELECT_CREATE='SELECT_CREATE';

const select_create = function(mobileId) {
    return {
        type: SELECT_CREATE,
        mobileId: mobileId,
        select:false,
      };
}
const select_mobile=function(mobileId) {
  return {
    type: SELECT_MOBILE,
    mobileId: mobileId,
    select:true,
  };
}
const unselect_mobile=function(mobileId) {
    return {
      type: UNSELECT_MOBILE,
      mobileId: mobileId,
      select:false,
    };
  }

export {
    select_mobile, SELECT_MOBILE,
    unselect_mobile, UNSELECT_MOBILE,
    select_create, SELECT_CREATE
}