import React from 'react';
import {  StyleSheet, View, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession, MapView, Location } from 'expo';
import { Text, ListItem } from 'react-native-elements';

const DetailOrder = props => {

  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    ]

  return (
    <View>
      <Text >History Orders Page!</Text>

      <Text h4> History Order 1</Text>
      <Text> Driver: Haitong </Text>
      <Text> Date: 2019-9-24 18:20:51 </Text>
      <Text> Price: $ 3.47 </Text>
      <Text> St: CMU-SV, Mountain View </Text>
      <Text> Shop: # Ranch 99, Mountain View </Text>
      <Text> Ed: # Homestead Rd, Santa Clara </Text>

    </View>
  );
};

const styles = StyleSheet.create({

  buttonS: {
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 12,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    paddingLeft: 80,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    color: '#fff',
    width: "50%",
    marginLeft: 100,
    marginTop: 20,
  },

  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },

});

export default DetailOrder;
