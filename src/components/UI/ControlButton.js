import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';
import * as colors from '../../colors/colors';

ControlButton.propTypes = {
  handlePress: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

ControlButton.defaultProps = {
  type: 'next',
};

function ControlButton({handlePress, type, disabled}) {
  const iconNames = {
    prev: 'chevron-left',
    random: 'random',
    next: 'chevron-right',
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => handlePress(type)}
      style={[styles.button, disabled && styles.disabled]}>
      <Icon name={iconNames[type]} size={22} fontWeight="bold" color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.DARK,
    alignItems: 'center',
    justifyContent: 'center',
    width: '31%',
    flexGrow: 1,
    marginTop: 2,
  },
  text: {
    color: colors.LIGHT,
    letterSpacing: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabled: {
    display: 'none',
  },
});

export default ControlButton;
