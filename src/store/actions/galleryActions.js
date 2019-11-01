import * as actionTypes from './actionTypes';

// PHOTOS
export const fetchPhotos = numPage => {
  return {
    type: actionTypes.FETCH_PHOTOS,
    payload: {numPage},
  };
};
export const fetchPhotosStart = () => {
  return {
    type: actionTypes.FETCH_PHOTOS_START,
  };
};
export const fetchPhotosSuccess = (photos, totalPages) => {
  return {
    type: actionTypes.FETCH_PHOTOS_SUCCESS,
    payload: {photos, totalPages},
  };
};

export const fetchPhotosFail = ({errors}) => {
  return {
    type: actionTypes.FETCH_PHOTOS_FAIL,
    payload: {errors},
  };
};

// PHOTO DETAIL
export const fetchPhotoDetail = id => {
  return {
    type: actionTypes.FETCH_PHOTO_DETAIL,
    payload: {id},
  };
};

export const fetchPhotoDetailStart = () => {
  return {
    type: actionTypes.FETCH_PHOTO_DETAIL_START,
  };
};

export const fetchPhotoDetailSuccess = photoDetail => {
  return {
    type: actionTypes.FETCH_PHOTO_DETAIL_SUCCESS,
    payload: {photoDetail},
  };
};

export const fetchPhotoDetailFail = ({errors}) => {
  return {
    type: actionTypes.FETCH_PHOTO_DETAIL_FAIL,
    payload: {errors},
  };
};

export const cleanStatePhotoDetail = () => {
  return {
    type: actionTypes.CLEAN_STATE_PHOTO_DETAIL,
  };
};

export const changeCurrentPage = newPageNumber => {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    payload: {newPageNumber},
  };
};
