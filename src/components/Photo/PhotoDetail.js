import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import ProgressiveImage from './../UI/ProgressiveImage';
import * as colors from '../../colors/colors';

PhotoDetail.propTypes = {
  photo: PropTypes.object.isRequired,
  widthWND: PropTypes.number,
  heightWND: PropTypes.number,
  onLayout: PropTypes.func,
};

PhotoDetail.defaultProps = {
  widthWND: 1,
  heightWND: 2,
};

function PhotoDetail({photo, widthWND, heightWND, onLayout}) {
  const {
    urls: {regular: sourceImage, thumb},
  } = photo;

  return photo ? (
    <View style={styles.imageContainer} onLayout={onLayout}>
      <ProgressiveImage
        source={{uri: sourceImage}}
        thumbnailSource={{uri: thumb}}
        style={{width: widthWND, height: heightWND}}
        resizeMode="contain"
      />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.DARK,
  },
  buttonContainer: {
    flexDirection: 'column',
  },
});

export default PhotoDetail;
