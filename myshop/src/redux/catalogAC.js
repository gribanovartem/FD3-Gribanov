﻿const READY_FALSE='READY_FALSE';
const READY_TRUE='READY_TRUE';
const CATALOG_ALL='CATALOG_ALL';
const CATALOG_DRILLS='CATALOG_DRILLS';
const CATALOG_ROTARYHAMMERS='CATALOG_ROTARYHAMMERS';
const CATALOG_ELECTRIC_SAW='CATALOG_ELECTRIC_SAW';
const CATALOG_FRETSAW='CATALOG_FRETSAW';
const CATALOG_PLANE='CATALOG_PLANE';

const ready_false = function() {
  return {
      type: READY_FALSE,
    };
}

const ready_true = function() {
  return {
      type: READY_TRUE,
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
const catalog_fretsaw=function(data) {
  return {
    type: CATALOG_FRETSAW,
    name: "Электролобзики",
    data: data,
  };
}
const catalog_plane=function(data) {
  return {
    type: CATALOG_PLANE,
    name: "Рубанки",
    data: data,
  };
}

export {
    ready_false, READY_FALSE,
    ready_true, READY_TRUE,
    catalog_all, CATALOG_ALL,
    catalog_drills, CATALOG_DRILLS,
    catalog_rotaryhammers, CATALOG_ROTARYHAMMERS,
    catalog_electric_saw, CATALOG_ELECTRIC_SAW,
    catalog_fretsaw, CATALOG_FRETSAW,
    catalog_plane, CATALOG_PLANE,
}