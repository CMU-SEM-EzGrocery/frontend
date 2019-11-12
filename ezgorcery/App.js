import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';

import HelloScreen from './src/screens/HelloScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MapScreen from './src/screens/MapScreen';
import HistoryOrdersScreen from './src/screens/HistoryOrders';
import DetailOrderScreen from './src/screens/DetailOrder'
import DetailOrder from './src/screens/DetailOrder';
import MapScreenTest from './src/screens/MapScreenTest';

const navigator = createStackNavigator(
  {
    Hello: HelloScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Map: MapScreen,
    HistoryOrders: HistoryOrdersScreen,
    Detail: DetailOrder,
    MapTest: MapScreenTest,
  },
  {
    initialRouteName: 'Hello',
    defaultNavigationOptions: {
      title: 'EzGrocery'
    }
  }
);

export default createAppContainer(navigator);
