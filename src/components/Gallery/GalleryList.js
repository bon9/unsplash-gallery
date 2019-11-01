import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import PropTypes from 'prop-types';

import GalleryListItem from './GalleryListItem';
import Error from './../UI/Error';

GalleryList.propTypes = {
  photos: PropTypes.array,
  navigation: PropTypes.object.isRequired,
  orientanion: PropTypes.string,
};

GalleryList.defaultProps = {
  orientanion: 'vertical',
};

function GalleryList({
  photos,
  navigation,
  orientanion,
  widthWND,
  heightWND,
  onLayout,
}) {
  if (!photos.length) {
    return <Error error={['refresh']} />;
  }

  const numColumn = widthWND > heightWND ? '5' : '3';

  return (
    <View style={styles.container} onLayout={onLayout}>
      <FlatList
        data={photos}
        keyExtractor={item => item.id}
        numColumns={numColumn}
        key={numColumn}
        columnWrapperStyle={styles.flatList}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Photo', {id: item.id})}>
            <GalleryListItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  flatList: {
    justifyContent: 'space-between',
  },
});

export default withNavigation(GalleryList);
