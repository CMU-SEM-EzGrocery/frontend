import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Text, View } from 'react-native';

// Import Context
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as BusinessProvider } from './src/context/BusinessContext';

// Import Navigation Ref
import { setNavigator } from './src/navigationRef';

// Import Authentication Related Pages
import HelloScreen from './src/screens/authentication/HelloScreen';
import LoginScreen from './src/screens/authentication/LoginScreen';
import RegisterScreen from './src/screens/authentication/RegisterScreen';
import ResolveAuthScreen from './src/screens/authentication/ResolveAuthScreen';

// Import Main Pages
import MainScreen from './src/screens/MainScreen';
import MainHelpersScreen from './src/screens/helpers/MainHelpersScreen';
import MainRequestersScreen from './src/screens/requesters/MainRequestersScreen';

// Import Requester Related Pages
import RatingScreen from './src/screens/requesters/RatingScreen';
import HistoryOrdersScreen from './src/screens/requesters/HistoryOrdersScreen';
import ServiceScreen from './src/screens/requesters/ServiceScreen';

// Import Helper Related Pages

// Import Setting Related Pages
import AccountScreen from './src/screens/setting/AccountScreen';

// Import Screens in lab
import ChatScreen from './src/screens/lab/ChatScreen';

const firstMainScreenFlow = createStackNavigator({
  Main: MainScreen,
  MainHelpers: MainHelpersScreen,
  MainRequesters: MainRequestersScreen,
  
});

const secondMainScreenFlow = createStackNavigator({
  HistoryOrders: HistoryOrdersScreen,
  Service: ServiceScreen,
});

const navigator = createSwitchNavigator({
    // Authentication Related Pages
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
      Hello: HelloScreen,
      Login: LoginScreen,
      Register: RegisterScreen,
    }),  
    // Main Page
    mainFlow: createBottomTabNavigator({
      Map: firstMainScreenFlow,
      // Requester Related Pages
      Orders: secondMainScreenFlow,
      // Helper Related Pages
      Account: AccountScreen,
      Chat: ChatScreen
    })
  }, {
    initialRouteName: 'ResolveAuth',
    defaultNavigationOptions: {
      title: 'EzGrocery'
    }
});

const App = createAppContainer(navigator)

export default () => {
  return (
    <AuthProvider>
      <BusinessProvider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </BusinessProvider>
    </AuthProvider>
  );
};
