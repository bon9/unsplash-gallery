import {takeEvery, all} from 'redux-saga/effects';

import {fetchPhotosSaga, fetchPhotoDetailSaga} from './gallerySaga';
import * as actionTypes from '../actions/actionTypes';

export function* watchGallery() {
  yield all([
    takeEvery(actionTypes.FETCH_PHOTOS, fetchPhotosSaga),
    takeEvery(actionTypes.FETCH_PHOTO_DETAIL, fetchPhotoDetailSaga),
  ]);
}
