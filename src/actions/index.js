const UPDATE_RESTAURANT = 'UPDATE_RESTAURANT';
const UPDATE_LOCATION = 'UPDATE_LOCATION';
const UPDATE_LIST = 'UPDATE_LIST';
const SET_VISIBILITY = 'SET_VISIBILITY';
const GO_DETAIL = 'GO_DETAIL';

export function updateRestaurant(restraurantList) {
  return {
    type: UPDATE_RESTAURANT,
    list: restraurantList,
  };
}

export function updateLocation(location) {
  return {
    type: UPDATE_LOCATION,
    location,
  };
}

export function updateList() {
  return {
    type: UPDATE_LIST,
  };
}

export function setRefreshVisibility(visibility) {
  return {
    type: SET_VISIBILITY,
    visibility,
  };
}

export function goDetail(rest) {
  return {
    type: GO_DETAIL,
    rest,
  };
}
