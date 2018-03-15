import Restaurant from "../model/Restaurant";
import { List } from 'immutable';

const UPDATE_RESTAURANT = 'UPDATE_RESTAURANT';
const UPDATE_LOCATION = 'UPDATE_LOCATION';
const UPDATE_LIST = 'UPDATE_LIST';
const SET_VISIBILITY = 'SET_VISIBILITY';
const GO_DETAIL = 'GO_DETAIL';
const CHECK = 'CHECK';

export function updateRestaurant(restaurantList: List<Restaurant>) {
  return {
    type: UPDATE_RESTAURANT,
    list: restaurantList,
  };
}

export function updateLocation(location: Location) {
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

export function setRefreshVisibility(visibility: boolean) {
  return {
    type: SET_VISIBILITY,
    visibility,
  };
}

export function goDetail(rest: Restaurant) {
  return {
    type: GO_DETAIL,
    rest,
  };
}

export function check(isChecked: boolean, index: number) {
  return {
    type: CHECK,
    isChecked,
    index,
  };
}
