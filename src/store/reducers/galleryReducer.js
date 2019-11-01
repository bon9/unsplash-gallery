import * as actionTypes from '../actions/actionTypes';

const initialState = {
  photos: null,
  photoDetail: null,
  isFetching: false,
  error: null,
  totalPages: 0,
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  const {payload} = action;
  switch (action.type) {
    // PHOTOS
    case actionTypes.FETCH_PHOTOS_START:
      return {...state, isFetching: true, error: null};

    case actionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: payload.photos,
        totalPages: payload.totalPages,
        isFetching: false,
        error: null,
      };

    case actionTypes.FETCH_PHOTOS_FAIL:
      return {...state, isFetching: false, error: payload.errors};

    // PHOTO_DETAIL
    case actionTypes.FETCH_PHOTO_DETAIL_START:
      return {...state, isFetching: true, error: null};

    case actionTypes.FETCH_PHOTO_DETAIL_SUCCESS:
      return {
        ...state,
        photoDetail: payload.photoDetail,
        isFetching: false,
        error: null,
      };

    case actionTypes.FETCH_PHOTO_DETAIL_FAIL:
      return {...state, isFetching: false, error: payload.errors};

    // clean photo screen after leaving him
    case actionTypes.CLEAN_STATE_PHOTO_DETAIL:
      return {...state, photoDetail: null};

    // handle change current page
    case actionTypes.CHANGE_CURRENT_PAGE:
      return {...state, currentPage: payload.newPageNumber};

    default:
      return state;
  }
};

export default reducer;
