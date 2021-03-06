import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession, Location } from 'expo';
// import * as Permissions from 'expo-permissions'
import { Image, SearchBar, Button, ListItem } from 'react-native-elements';
import MapView from 'react-native-maps';

import DestinationButton from '../components/DestinationButton';
import CurrentLocationButton from '../components/CurrentLocationButton';

// _getLocationAsync = async () => {
//   let { status } = await PermissionRequest.askAsync(Permissions.Location);

//   let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true})
//   let region = {
//     latitude: location.coords.latitude,
//     longitude: location.coords.longitude,
//   }
// }



const MapScreen = props => {

  const [bn, setBn] = useState([]);

  this.state = {
    region: {
      latitude: '37.4190049',
      longitude: '-122.0579198',
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    },
  }

  // centerMap() {
  //   const {
  //     latitude,
  //     longitude,
  //     latitudeDelta,
  //     longitudeDelta
  //   } = this.state.region;
  
  //   this.map.animateToRegion({
  //     latitude,
  //     longitude,
  //     latitudeDelta,
  //     longitudeDelta,
  //   });
  // }
  // _getLocationAsync = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if(status !== 'granted') {
  //     console.log('Permission to access location was denied.');
  //   }
  //   let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
  //   let region = {
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude,
  //     latitudeDelta: 0.045,
  //     longitudeDelta: 0.045,
  //   }

  //   this.ListeningStateChangedEvent({region: region})
  // }
  
  // this._getLocationAsync();



  return (
    <View style={styles.container}>
      {/* <SearchBar
        placeholder="Please Input the Place You Want to Go"
      />             */}
      <DestinationButton />
      {/* <CurrentLocationButton cb={() => {this.centerMap() }} /> */}
      <CurrentLocationButton />
      <MapView
        initialRegion={this.state.region}
        showsUserLocation={true}
        rotateEnabled={false}
        // ref = {(map) => {this.map = map}}
        style={styles.mapStyle}
      />
      {/* <Text style={styles.label}> Start Position</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        placeholder='Start Position'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

      <Text style={styles.label}> Shop Position</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        placeholder='Shop Position'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

      <Text style={styles.label}> Drop-off Position</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        placeholder='Drop-off Position'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

      <TouchableOpacity style={styles.buttonS}
        onPress={()=> props.navigation.navigate('HistoryOrders')}
      >
        <Text style={styles.labelBtn}>History Orders</Text>
      </TouchableOpacity>
        
      <TouchableOpacity 
        onPress={()=> props.navigation.navigate('HistoryOrders')}
      >
        <Text style={styles.labelBtn}>Place Your Order!</Text>
      </TouchableOpacity> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // marginTop: 50,
  },
  input: {
    textAlign:'left',
    backgroundColor:'#F2F2F2',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 25,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding:10,
    marginTop:10,
    marginBottom:10,
    marginLeft:20,  
    width:"90%",
  },
  headline: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
  },
  labelBtn: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    fontSize: 20,
    textAlign: "left",
    marginLeft:25,
    fontWeight: 'bold',
  },
  labelSmall: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 110,
    fontWeight: 'bold',
  },
  buttonS: {
    backgroundColor: '#03a557',
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
  mapStyle: {
    width: 400,
    height: 700,
    borderRadius: 4,
    marginBottom: 5
  },

});

export default MapScreen;
