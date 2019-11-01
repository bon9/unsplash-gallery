import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

Error.propTypes = {
  error: PropTypes.array,
};

function Error({error}) {
  if (error[0] === 'refresh') {
    error = ["Hmm, there's something wrong:(", 'Try refresh the page'];
  }
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.error}>{error[0]}</Text>
      <Text style={styles.error}>{error[1]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    fontSize: 22,
    color: 'red',
    letterSpacing: 1,
    marginVertical: 5,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Error;
