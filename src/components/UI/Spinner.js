import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import * as colors from '../../colors/colors';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.LIGHT} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
