import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import ControlButton from './../UI/ControlButton';

ControlButtons.propTypes = {
  handlePress: PropTypes.func.isRequired,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
};

ControlButtons.defaultProps = {
  currentPage: 1,
  totalPages: 1,
};

function ControlButtons({handlePress, totalPages, currentPage}) {
  return (
    <View style={styles.container}>
      <ControlButton
        handlePress={handlePress}
        type="prev"
        disabled={currentPage === 1}
      />
      <ControlButton handlePress={handlePress} type="random" />
      <ControlButton
        handlePress={handlePress}
        type="next"
        disabled={currentPage === totalPages}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 35,
  },
});

export default ControlButtons;
