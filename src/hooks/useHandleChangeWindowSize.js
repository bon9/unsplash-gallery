import {useState} from 'react';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default () => {
  const [widthWND, setWidthWND] = useState(width);
  const [heightWND, setHeightWND] = useState(height);

  const onLayout = e => {
    setWidthWND(e.nativeEvent.layout.width);
    setHeightWND(e.nativeEvent.layout.height);
  };

  return [widthWND, heightWND, onLayout];
};
