import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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
import DetailOrderScreen from './src/screens/requesters/DetailOrder';
import ServiceScreen from './src/screens/requesters/ServiceScreen';

// Import Helper Related Pages


const navigator = createStackNavigator(
  {
    // Authentication Related Pages
    Hello: HelloScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    ResolveAuth: ResolveAuthScreen,

    // Main Page
    Main: MainScreen,
    MainHelpers: MainHelpersScreen,
    MainRequesters: MainRequestersScreen,

    // Requester Related Pages
    HistoryOrders: HistoryOrdersScreen,
    Detail: DetailOrderScreen,
    Service: ServiceScreen,

    // Helper Related Pages

  },
  {
    initialRouteName: 'ResolveAuth',
    defaultNavigationOptions: {
      title: 'EzGrocery'
    }
  }
);

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
