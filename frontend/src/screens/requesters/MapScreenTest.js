import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import { Image, SearchBar, Button, ListItem } from 'react-native-elements';
import MapView from 'react-native-maps';

import DestinationButton from '../../components/Requesters/DestinationButton';
import CurrentLocationButton from '../../components/Requesters/CurrentLocationButton';

export default class MapScreenTest extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        //   region: null,
        region: {
          latitude: 37.78825,
          longitude: -122.4324,

          // latitude: 37.4190049,
          // longitude: -122.0579198,

          latitudeDelta: 0.922,
          longitudeDelta: 0.0421,
        }
      }
      this._getLocationAsync();
    }

    _getLocationAsync = async () => {
       let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if(status !== 'granted') {
            console.log('Permission to access location was denied.');
        }
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        console.log('latitude' + location.coords.latitude);
        console.log('longitude' + location.coords.longitude);
        let region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.045,
        }
        this.setState({region: region})
    }

      centerMap() {
        const {
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta
        } = this.state.region;
  
        this.map.animateToRegion({
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta,
        })
      }

    render() {
      return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <DestinationButton />
            <CurrentLocationButton cb={() => { this.centerMap() }}/>
            <MapView
                initialRegion={this.state.region}
                showsUserLocation={true}
                ref={(map) => {this.map = map}}
                rotateEnabled={false}
                style={styles.mapStyle}
            />
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
