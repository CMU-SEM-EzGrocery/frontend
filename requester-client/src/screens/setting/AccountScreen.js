import React, { useContext } from 'react';
import {  StyleSheet, View, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession, MapView, Location } from 'expo';
import { Text, ListItem } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Context as authContext } from '../../context/AuthContext';

const AccountScreen = props => {

  const { signout } = useContext(authContext);

  return (
    <View>
      <Text >  </Text>
      <Text >  </Text>
      <Text >  </Text>
      <Text >  </Text>
      <Text style={styles.headline}>Account Setting</Text>
      <TouchableOpacity 
        onPress={signout}
      >
        <Text style={styles.buttonS}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

AccountScreen.navigationOptions = {
  title: 'Accounts',
  tabBarIcon: <MaterialCommunityIcons name="account" size={20} />
};

const styles = StyleSheet.create({
  buttonS: {
    backgroundColor: '#FF0000',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 35,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: '#fff',
    width:"70%",
    marginLeft:60,
    position:"relative"  
  },
  headline: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
  },
});

export default AccountScreen;
