const CATALOG_DRILLS='CATALOG_DRILLS';
const CATALOG_ALL='CATALOG_ALL';
const CATALOG_ROTARYHAMMERS='CATALOG_ROTARYHAMMERS';
const READY_FALSE='READY_FALSE';
const CATALOG_ELECTRIC_SAW='CATALOG_ELECTRIC_SAW';

const ready_false = function() {
  return {
      type: READY_FALSE,
    };
}

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
const catalog_rotaryhammers=function(data) {
    return {
      type: CATALOG_ROTARYHAMMERS,
      name: "Перфораторы",
      data: data,
    };
}
const catalog_electric_saw=function(data) {
  return {
    type: CATALOG_ELECTRIC_SAW,
    name: "Дисковые пилы",
    data: data,
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
    catalog_all, CATALOG_ALL,
    catalog_rotaryhammers, CATALOG_ROTARYHAMMERS,
    ready_false, READY_FALSE,
    catalog_electric_saw, CATALOG_ELECTRIC_SAW,
}