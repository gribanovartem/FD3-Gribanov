const FILTER_ON='FILTER_ON'
const FILTER_OFF='FILTER_OFF'
const PRICE_MIN='PRICE_MIN'
const PRICE_MAX='PRICE_MAX'
const IS_ON_SALE_TRUE='IS_ON_SALE_TRUE'
const IS_ON_SALE_FALSE='IS_ON_SALE_FALSE'
const NEW_CATALOG='NEW_CATALOG'

const filter_on = function () {
  return {
    type: FILTER_ON,
  }
}
const filter_off = function () {
  return {
    type: FILTER_OFF,
  }
}
const set_isOnSaleTrue = function () {
  return {
    type: IS_ON_SALE_TRUE,
  }
}
const set_isOnSaleFalse = function () {
  return {
    type: IS_ON_SALE_FALSE,
  }
}
const set_priceMin = function (priceMin) {
  return {
    type: PRICE_MIN,
    priceMin,
  }
}
const set_priceMax = function (priceMax) {
  return {
    type: PRICE_MAX,
    priceMax,
  }
}
const set_newCatalog = function (catalog) {
  return {
    type: NEW_CATALOG,
    newCatalog: catalog,
  }
}

export {
  filter_on, FILTER_ON,
  filter_off, FILTER_OFF,
  set_priceMin, PRICE_MIN,
  set_priceMax, PRICE_MAX,
  set_isOnSaleTrue, IS_ON_SALE_TRUE,
  set_isOnSaleFalse, IS_ON_SALE_FALSE,
  set_newCatalog, NEW_CATALOG,
}  