const FILTER_ON='FILTER_ON';
const FILTER_OFF='FILTER_OFF';
const PRICE_MIN='PRICE_MIN';
const PRICE_MAX='PRICE_MAX';
const IS_ON_SALE='IS_ON_SALE';

const filter_on = function() {
    return {
        type: FILTER_ON,
      };
}
const filter_off = function() {
    return {
        type: FILTER_OFF,
      };
}
const set_isOnSale = function() {
    return {
        type: IS_ON_SALE,
      };
}
const set_priceMin = function(priceMin) {
    return {
        type: PRICE_MIN,
        priceMin: priceMin,
      };
}
const set_priceMax = function(priceMax) {
    return {
        type: PRICE_MAX,
        priceMax: priceMax,
      };
}

export {
    filter_on, FILTER_ON,
    filter_off, FILTER_OFF,
    set_priceMin, PRICE_MIN,
    set_priceMax, PRICE_MAX,
    set_isOnSale, IS_ON_SALE,
}  