const SET_REVIEWS='SET_REVIEWS';
const SET_MODE_0='SET_MODE_0';
const SET_MODE_1='SET_MODE_1';

const set_reviews = function(reviews) {
    return {
        type: SET_REVIEWS,
        reviews: reviews,
      };
}
const set_mode_0 = function() {
    return {
        type: SET_MODE_0,
      };
}
const set_mode_1 = function() {
    return {
        type: SET_MODE_1,
      };
}

export {
    set_reviews, SET_REVIEWS,
    set_mode_0, SET_MODE_0,
    set_mode_1, SET_MODE_1,
}  