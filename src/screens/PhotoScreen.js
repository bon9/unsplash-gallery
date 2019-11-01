import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../store/actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhotoDetail from './../components/Photo/PhotoDetail';
import Spinner from './../components/UI/Spinner';
import Error from './../components/UI/Error';
import useHandleChangeWindowSize from '../hooks/useHandleChangeWindowSize';

PhotoScreen.propTypes = {
  onFetchPhotoDetail: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  photo: PropTypes.object,
  onCleanStatePhotoDetail: PropTypes.func,
  isFetching: PropTypes.bool,
  isError: PropTypes.string,
};

function PhotoScreen({
  onFetchPhotoDetail,
  onCleanStatePhotoDetail,
  isFetching,
  isError,
  photo,
  navigation,
}) {
  const [widthWND, heightWND, onLayout] = useHandleChangeWindowSize();

  useEffect(() => {
    onFetchPhotoDetail(id);
    return onCleanStatePhotoDetail;
  }, [id, onFetchPhotoDetail, onCleanStatePhotoDetail]);

  const id = navigation.getParam('id');

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <Error error={isError} />;
  }

  return photo ? (
    <PhotoDetail
      photo={photo}
      widthWND={widthWND}
      heightWND={heightWND}
      onLayout={onLayout}
    />
  ) : null;
}

PhotoScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'one Photo - one Moment',
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={22} color="white" borderWidth="1" />
      </TouchableOpacity>
    ),
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
      paddingRight: 50,
    },
    headerLeftContainerStyle: {
      marginLeft: 15,
    },
  };
};

const mapStateToProps = state => {
  return {
    photo: state.photoDetail,
    isFetching: state.isFetching,
    isError: state.error,
  };
};

export default connect(
  mapStateToProps,
  {
    onFetchPhotoDetail: actions.fetchPhotoDetail,
    onCleanStatePhotoDetail: actions.cleanStatePhotoDetail,
  },
)(PhotoScreen);
