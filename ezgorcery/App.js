import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    // Authenticate: AuthenticateScreen,
    // UserType: UserTypeScreen,
    // UserProfile: UserProfileScreen,
    // UserPreference: UserPreferencesScreen,
    // UserVerification: UserVerificationScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'EzGorcery'
    }
  }
);

export default createAppContainer(navigator);
