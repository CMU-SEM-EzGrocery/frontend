import React, { useContext } from 'react';
import {  StyleSheet, View, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession, MapView, Location } from 'expo';
import { Text, ListItem } from 'react-native-elements';

import { Context as authContext } from '../../context/AuthContext';

const AccountScreen = props => {

  const { signout } = useContext(authContext);

  return (
    <View>
      <Text >Account Setting</Text>
      <Text >Account Setting</Text>
      <Text >Account Setting</Text>
      <Text >Account Setting</Text>
      <Text >Account Setting</Text>
      <Text >Account Setting</Text>
      <Text >Account Setting</Text>
      <Text >Account Setting</Text>
      <TouchableOpacity 
        onPress={signout}
      >
        <Text style={styles.buttonS}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default AccountScreen;
