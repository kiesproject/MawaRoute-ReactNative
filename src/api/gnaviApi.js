const response = 'https://api.gnavi.co.jp/RestSearchAPI/20150630/';
const key = '0ec809ca9e26ce462ed18ddc74768cb8';
const format = 'json';

export function fetchRestaurantByLocation(location) {
  return fetch(`${response}?keyid=${key}&format=${format}&coordinates_mode=2&latitude=${location.latitude}&longitude=${location.longitude}`)
    .then(res => res.json())
    .then(json => json.rest)
    .catch(error => error);
}
