import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../context/AuthContext';

import mainHelperScreen from './helpers/MainHelpersScreen';
import MainRequestersScreen from './requesters/MainRequestersScreen';

const MainScreen = props => {
  const { state } = useContext(AuthContext);

  return (
    <View>
      <Text>
        Main Screen!
      </Text>
        {
          state.userInfo && state.userInfo.roleId == 1 ?
          (
            <MainRequestersScreen/>
          ) :
          null
        }    
        {
          state.userInfo && state.userInfo.roleId == 2 ?
          (
            <MainHelperScreen/>
          ) :
          null
        }    
      </View>
  );
};

const styles = StyleSheet.create({

});

export default MainScreen;
