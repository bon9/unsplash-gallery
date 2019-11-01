import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import PropTypes from 'prop-types';

ProgressiveImage.propTypes = {
  thumbnailSource: PropTypes.object,
  source: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  props: PropTypes.object,
};

function ProgressiveImage({thumbnailSource, source, style, ...props}) {
  const thumbnailAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);

  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
    }).start();
  };

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
    }).start();
  };

  return (
    <View>
      <Animated.Image
        {...props}
        source={thumbnailSource}
        style={style}
        blurRadius={1}
        onLoad={handleThumbnailLoad}
      />
      <Animated.Image
        {...props}
        source={source}
        style={[styles.imageOverlay, style]}
        onLoad={onImageLoad}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default ProgressiveImage;
