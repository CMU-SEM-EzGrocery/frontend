import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, ScrollView } from 'react-native';
// import { BorderlessButton } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../context/AuthContext';

import mainHelperScreen from './helpers/MainHelpersScreen';
import MainRequestersScreen from './requesters/MainRequestersScreen';

// [ BUG FIXED ] : I Don't know why. Really don't know why... If add Main Page, cannot use searchable textinput. Maybe it's <ScroolView>
const MainScreen = props => {
  const { state } = useContext(AuthContext);

  return (
    <View>
      <ScrollView>
        {/* <Text>
          Main Screen!
        </Text> */}
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
        </ScrollView>
      </View>
      
  );
};

const styles = StyleSheet.create({

});

export default MainScreen;
