const UPDATE_RESTAURANT = 'UPDATE_RESTAURANT';
const UPDATE_LOCATION = 'UPDATE_LOCATION';

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
