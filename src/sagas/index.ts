import { PermissionsAndroid, Platform } from 'react-native';
import { all, fork, put, call, takeEvery } from 'redux-saga/effects';

import { updateLocation, updateRestaurant, setRefreshVisibility } from '../actions/index';
import { fetchRestaurantByLocation } from '../api/gnaviApi';
import { getOnceLocation } from '../gps/LocationManager';

function* loadRestaurantByGps() {
  yield put(setRefreshVisibility(true));
  try {
    // location
    const location = yield call(getOnceLocation);
    yield put(updateLocation(location));
    // load resaurant
    const rest = yield call(fetchRestaurantByLocation, location);
    yield put(updateRestaurant(rest));
  } catch (error) {
    // TODO: error handling
    console.log('loadRestaurantByGps', error);
  }
  yield put(setRefreshVisibility(false));
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
    yield console.log('initLoad', error);
  }
}

function* watchUpdateRestaurant() {
  yield takeEvery('UPDATE_LIST', loadRestaurantByGps);
}

export default function* rootSaga() {
  yield fork(initLoad);
  yield all([
    watchUpdateRestaurant(),
  ]);
}
