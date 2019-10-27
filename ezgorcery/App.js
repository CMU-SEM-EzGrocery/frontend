import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import  LoginScreen  from './src/screens/LoginScreen';
import  UserAuthenticateScreen  from './src/screens/UserAuthenticateScreen';
import  UserTypeScreen  from './src/screens/UserTypeScreen';
import  UserProfileScreen  from './src/screens/UserProfileScreen';
import  UserPreferenceScreen  from './src/screens/UserPreferenceScreen';
import  UserVerificationScreen  from './src/screens/UserVerificationScreen';

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Authenticate: UserAuthenticateScreen,
    UserType: UserTypeScreen,
    UserProfile: UserProfileScreen,
    UserPreference: UserPreferenceScreen,
    UserVerification: UserVerificationScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'EzGrocery'
    }
  }
);

export default createAppContainer(navigator);
