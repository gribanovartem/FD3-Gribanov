const CATALOG_DRILLS='CATALOG_DRILLS';
const CATALOG_ALL='CATALOG_ALL';
const SELECT_CREATE='SELECT_CREATE';

const catalog_all = function(data) {
    return {
        type: CATALOG_ALL,
        name: 'Все категории',
        data: data,
      };
}
const catalog_drills=function(data) {
  return {
    type: CATALOG_DRILLS,
    name: 'Электродрели и дрели-шуруповерты',
    data: data,
  };
}
const catalog_rotaryhammers=function(mobileId) {
    return {
      type: UNSELECT_MOBILE,
      mobileId: mobileId,
      select:false,
    };
}
const catalog_electric_saw=function(mobileId) {
  return {
    type: UNSELECT_MOBILE,
    mobileId: mobileId,
    select:false,
  };
}
const catalog_fretsaw=function(mobileId) {
  return {
    type: UNSELECT_MOBILE,
    mobileId: mobileId,
    select:false,
  };
}
const catalog_plane=function(mobileId) {
  return {
    type: UNSELECT_MOBILE,
    mobileId: mobileId,
    select:false,
  };
}

export {
    catalog_drills, CATALOG_DRILLS,
    catalog_all,CATALOG_ALL,
   
}