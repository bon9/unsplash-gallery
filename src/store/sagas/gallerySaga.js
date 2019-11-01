import {put, call} from 'redux-saga/effects';

import unsplash from '../../api/unsplash';
import {extractTotalPages} from '../../shared/utilities';
import * as actions from '../actions';

function fetchPhotos(numPage) {
  return unsplash(`/photos?per_page=21&page=${numPage}`);
}

function fetchPhotoDetail(id) {
  return unsplash(`/photos/${id}`);
}

export function* fetchPhotosSaga({payload}) {
  const {numPage} = payload;
  yield put(actions.fetchPhotosStart());

  try {
    const response = yield call(fetchPhotos, numPage);
    if (!response.ok) {
      throw yield response.json();
    }
    // array with links
    const links = response.headers.map.link;
    // extract total page from string in link
    const totalPages = extractTotalPages(links);
    const responseJson = yield response.json();
    yield put(actions.fetchPhotosSuccess(responseJson, totalPages));
  } catch (error) {
    yield put(actions.fetchPhotosFail(error));
  }
}

export function* fetchPhotoDetailSaga({payload}) {
  const {id} = payload;
  yield put(actions.fetchPhotoDetailStart());

  try {
    const response = yield call(fetchPhotoDetail, id);
    if (!response.ok) {
      throw yield response.json();
    }
    const responseJson = yield response.json();
    yield put(actions.fetchPhotoDetailSuccess(responseJson));
  } catch (error) {
    yield put(actions.fetchPhotoDetailFail(error));
  }
}
