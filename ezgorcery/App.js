import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';

import HelloScreen from './src/screens/HelloScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MapScreen from './src/screens/MapScreen';

const navigator = createStackNavigator(
  {
    Hello: HelloScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Map: MapScreen,
  },
  {
    initialRouteName: 'Hello',
    defaultNavigationOptions: {
      title: 'EzGrocery'
    }
  }
);

export default createAppContainer(navigator);
