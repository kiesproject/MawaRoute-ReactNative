const response = 'https://api.gnavi.co.jp/RestSearchAPI/20150630/';
const key = '0ec809ca9e26ce462ed18ddc74768cb8';
const format = 'json';

const responseWithParam = location => `${response}?keyid=${key}&format=${format}&input_coordinates_mode=2&coordinates_mode=2\
&latitude=${location.latitude}\
&longitude=${location.longitude}`;

export function fetchRestaurantByLocation(location) {
  return fetch(responseWithParam(location))
    .then(res => res.json())
    .then(json => json.rest.map(data => (
      {
        name: data.name,
        address: data.address,
        imgUrl: data.image_url.shop_image1,
        locale: {
          latitude: data.latitude,
          longitude: data.longitude,
        },
        category: data.category,
        isChecked: false,
      }
    )));
}
