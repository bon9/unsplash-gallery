import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {slicePhrase} from '../../shared/utilities';
import * as colors from '../../colors/colors';

GalleryListItem.propTypes = {
  item: PropTypes.object,
};

function GalleryListItem({item}) {
  const {
    urls: {thumb},
    description,
    all_description: allDescription,
    user: {name},
  } = item;

  const descr = slicePhrase(
    description || allDescription || "It's just a foto",
    16,
  );

  const authorName = slicePhrase(name, 16);

  return item ? (
    <View style={styles.container}>
      <Image source={{uri: thumb}} style={styles.image} />
      <Text style={styles.photoDescr}>{descr}</Text>
      <Text style={styles.author}>{authorName}</Text>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  photoDescr: {
    color: colors.LIGHT,
    fontWeight: 'bold',
  },
  author: {
    color: colors.LIGHT,
  },
});

export default GalleryListItem;
