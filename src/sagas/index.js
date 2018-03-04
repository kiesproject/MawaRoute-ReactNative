import { PermissionsAndroid, Platform } from 'react-native';
import { all, fork, put, call, takeEvery } from 'redux-saga/effects';

import { updateLocation, updateRestaurant, setRefreshVisibility } from '../actions/index';
import { fetchRestaurantByLocation } from '../api/gnaviApi';
import { getOnceLocation } from '../gps/LocationManager';

function* loadRestaurantByGps() {
  yield put(setRefreshVisibility(true));
  const location = yield call(getOnceLocation);
  const rest = yield call(fetchRestaurantByLocation, location);
  yield all([
    put(updateLocation(location)),
    put(updateRestaurant(rest)),
    put(setRefreshVisibility(false)),
  ]);
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

function* watchUpdateRestaurant() {
  yield takeEvery('UPDATE_LIST', loadRestaurantByGps);
}

export default function* rootSaga() {
  yield fork(initLoad);
  yield all([
    watchUpdateRestaurant(),
  ]);
}
