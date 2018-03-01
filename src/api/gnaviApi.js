export function fetchRestaurant() {
  const response = 'https://api.gnavi.co.jp/RestSearchAPI/20150630/';
  const key = '0ec809ca9e26ce462ed18ddc74768cb8';
  const format = 'json';
  return fetch(`${response}?keyid=${key}&format=${format}`)
    .then(res => res.json())
    .then(json => json.rest)
    .catch(error => error);
}
