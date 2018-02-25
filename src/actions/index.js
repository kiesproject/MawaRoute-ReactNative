const UPDATE_RESTAURANT = 'UPDATE_RESTAURANT';

export function updateRestaurant(restraurantList) {
  return {
    type: UPDATE_RESTAURANT,
    list: restraurantList,
  }
}