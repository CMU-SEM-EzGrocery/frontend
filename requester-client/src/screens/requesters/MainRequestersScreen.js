import React, { useState, useContext } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession, Location } from 'expo';
import { Image, SearchBar, Button, ListItem } from 'react-native-elements';
import MapView from 'react-native-maps';

// Import Context



// Import Components
import MapForm from '../../components/Requesters/Map_Form';
import MapComp from '../../components/Requesters/MapComp';

const MainRequestersScreen = props => {

  return (
    <View>
      {/* <Text>Requesters Main Page!</Text> */}
      
      {/* <MapComp
        style={styles.mapStyle}
      /> */}
      <MapForm
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  // buttonS: {
  //   backgroundColor: 'green',
  //   borderColor: 'white',
  //   borderWidth: 2,
  //   borderRadius: 12,
  //   color: '#fff',
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   overflow: 'hidden',
  //   paddingLeft: 80,
  //   paddingTop: 20,
  //   paddingBottom: 20,
  //   textAlign: 'center',
  //   color: '#fff',
  //   width: "50%",
  //   marginLeft: 100,
  //   marginTop: 20,
  // },

  // image: {
  //   width: 250,
  //   height: 120,
  //   borderRadius: 4,
  //   marginBottom: 5
  // },
  // mapStyle: {
  //   width: 400,
  //   height: 200,
  //   borderRadius: 4,
  //   marginBottom: 5
  // },
});

export default MainRequestersScreen;
