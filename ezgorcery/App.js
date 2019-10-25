import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Authenticate: AuthenticateScreen,
    UserType: UserTypeScreen,
    UserProfile: UserProfileScreen,
    UserPreference: UserPreferencesScreen,
    UserVerification: UserVerificationScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'EzGorcery'
    }
  }
);

export default createAppContainer(navigator);
