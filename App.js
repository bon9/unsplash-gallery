import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import GalleryScreen from './src/screens/GalleryScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import * as colors from './src/colors/colors';

const AppNavigator = createStackNavigator(
  {
    Gallery: GalleryScreen,
    Photo: {
      screen: PhotoScreen,
    },
  },
  {
    initialRouteName: 'Gallery',
    defaultNavigationOptions: {
      title: 'Unsplash Gallery',
      headerStyle: {
        backgroundColor: colors.DARK,
        height: 40,
      },
      headerTintColor: colors.LIGHT,
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
