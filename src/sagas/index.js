import { PermissionsAndroid, Platform } from 'react-native';
import { fork, put, call } from 'redux-saga/effects';

import { updateRestaurant } from '../actions/index';
import { fetchRestaurantByLocation } from '../api/gnaviApi';
import { getOnceLocation } from '../gps/LocationManager';

function* loadRestaurantByGps() {
  const location = yield call(getOnceLocation);
  const rest = yield call(fetchRestaurantByLocation, location);
  yield put(updateRestaurant(rest));
}

function* initLoad() {
  try {
    if (Platform.OS === 'android') {
      const result = yield call(PermissionsAndroid.request, PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        yield loadRestaurantByGps();
      }
    } else {
      navigator.geolocation.requestAuthorization();
      yield loadRestaurantByGps();
    }
  } catch (error) {
    // TODO: error handling
    yield console.log(error);
  }
}

export default function* rootSaga() {
  yield fork(initLoad);
  // yield all([
  //   sampleSaga(),
  // ]);
}
