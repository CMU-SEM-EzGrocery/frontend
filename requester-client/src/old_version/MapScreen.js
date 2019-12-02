import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession, Location } from 'expo';
import { Image, SearchBar, Button, ListItem } from 'react-native-elements';
import MapView from 'react-native-maps';

import MapForm from '../components/Map_Form';

const MapScreen = props => {

  return (
    <View>
      <Text>Map Page!</Text>
      <SearchBar
        placeholder="Please Input the Place You Want to Go"
      />    
      <MapView
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
        style={styles.mapStyle}
      />
      <MapForm
        onSubmitForm={
          () => {
            props.navigation.natigate()
          }
        }
      />
      <TouchableOpacity 
        onPress={()=> props.navigation.navigate('HistoryOrders')}
      >
        <Text style={styles.buttonS}>History Orders</Text>
      </TouchableOpacity>
      
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
  mapStyle: {
    width: 400,
    height: 400,
    borderRadius: 4,
    marginBottom: 5
  },
});

export default MapScreen;
