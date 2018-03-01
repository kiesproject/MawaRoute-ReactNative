import { fork, put, call } from 'redux-saga/effects';
import { updateRestaurant } from '../actions/index';

import { fetchRestaurant } from '../api/gnaviApi';

function* initLoad() {
  try {
    const rest = yield call(fetchRestaurant);
    yield put(updateRestaurant(rest));
  } catch (error) {
    yield console.log(error);
  }
}

export default function* rootSaga() {
  yield fork(initLoad);
  // yield all([
  //   sampleSaga(),
  // ]);
}
