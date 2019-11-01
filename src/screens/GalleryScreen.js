import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

import * as actions from '../store/actions/index';
import {randomInteger} from './../shared/utilities';
import GalleryList from './../components/Gallery/GalleryList';
import ControlButtons from './../components/Gallery/ControlButtons';
import Spinner from './../components/UI/Spinner';
import Error from './../components/UI/Error';
import * as colors from '../colors/colors';
import useHandleChangeWindowSize from '../hooks/useHandleChangeWindowSize';

GalleryScreen.propTypes = {
  onFetchPhotos: PropTypes.func.isRequired,
  onChangeCurrentPage: PropTypes.func.isRequired,
  photos: PropTypes.array,
  isFetching: PropTypes.bool,
  isError: PropTypes.string,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
};

GalleryScreen.defaultProps = {
  currentPage: 1,
  totalPages: 1,
};

function GalleryScreen({
  onFetchPhotos,
  onChangeCurrentPage,
  photos,
  isFetching,
  isError,
  totalPages,
  currentPage,
}) {
  const [widthWND, heightWND, onLayout] = useHandleChangeWindowSize();

  useEffect(() => {
    onFetchPhotos(currentPage);
  }, [onFetchPhotos, currentPage]);

  const handlePress = btnType => {
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;

    switch (btnType) {
      case 'next': {
        return nextPage > totalPages
          ? null
          : onChangeCurrentPage(currentPage + 1);
      }

      case 'prev': {
        return prevPage < 1 ? null : onChangeCurrentPage(currentPage - 1);
      }

      case 'random': {
        let randomPage;
        // рандом не совпадет с текущей НИ-КОГ-ДА
        do {
          randomPage = randomInteger(1, totalPages);
        } while (randomPage === currentPage);

        onChangeCurrentPage(randomPage);
        break;
      }

      default:
        return;
    }
  };

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <Error error={isError} />;
  }

  return photos ? (
    <View style={styles.container} onLayout={onLayout}>
      <GalleryList
        photos={photos}
        orientanion={widthWND > heightWND ? 'horizontal' : 'vertical'}
        widthWND={widthWND}
        heightWND={heightWND}
        onLayout={onLayout}
      />
      <ControlButtons
        handlePress={handlePress}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK,
  },
});

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    isError: state.error,
    photos: state.photos,
    totalPages: state.totalPages,
    currentPage: state.currentPage,
  };
};

export default connect(
  mapStateToProps,
  {
    onFetchPhotos: actions.fetchPhotos,
    onChangeCurrentPage: actions.changeCurrentPage,
  },
)(GalleryScreen);
