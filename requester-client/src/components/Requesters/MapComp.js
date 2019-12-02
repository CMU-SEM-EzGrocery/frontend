import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import HaversineGeolocation from 'haversine-geolocation';

import { Image, SearchBar, Button, ListItem } from 'react-native-elements';
import MapView, { Marker, Polyline } from 'react-native-maps';
import getDirections from 'react-native-google-maps-directions'

import DestinationButton from './DestinationButton';
import CurrentLocationButton from './CurrentLocationButton';

import { Entypo } from '@expo/vector-icons';

export default class MapComp extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        //   region: null,
        region: {
          latitude: 37.4190049,
          longitude: -122.0579198,
          latitudeDelta: 0.065,
          longitudeDelta: 0.055,
          routeCoordinates: [],
          distanceTravelled: 0,
          prevLatLng: {}
        },

        requesterRegion: {
          latitude: 37.4016985,
          longitude: -122.0579198,
          latitudeDelta: 0.922,
          longitudeDelta: 0.0421,
        }
      }
      // this._getLocationAsync();
    }

    getMapRegion = () => ({
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude,
      latitudeDelta: this.state.region.latitudeDelta,
      longitudeDelta: this.state.region.longitudeDelta
     });

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

      handleGetDirections = () => {
        const data = {
           source: {
            latitude: -33.8356372,
            longitude: 18.6947617
          },
          destination: {
            latitude: -33.8600024,
            longitude: 18.697459
          },
          params: [
            {
              key: "travelmode",
              value: "driving"        // may be "walking", "bicycling" or "transit" as well
            },
            {
              key: "dir_action",
              value: "navigate"       // this instantly initializes navigation using the given travel mode
            }
          ],
        }
     
        getDirections(data)
      }
    
      componentDidMount() {
        // navigator.geolocation.getCurrentPosition(
        //   position => {
        //    console.log(position);
        //    console.log("routeCoordinates type: " + typeof(this.state.region.routeCoordinates));
        //    const newPosition = {
        //     latitude: position.coords.latitude,
        //     longitude: position.coords.longitude,
        //   };
        //     this.setState({
        //      region: {
        //        latitude: position.coords.latitude,
        //        longitude: position.coords.longitude,
        //        latitudeDelta: 0.045,
        //        longitudeDelta: 0.045,
        //       //  routeCoordinates: this.state.region.routeCoordinates + newPosition,
        //       // routeCoordinates: this.state.region.routeCoordinates.concat(newPosition),
        //       routeCoordinates: [...this.state.region.routeCoordinates, newPosition],
        //     },
        //    });
        //  },
        //  error => this.setState({ error: error.message }),
        //   { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
        //   );
          
        navigator.geolocation.watchPosition(
          position => {
          const newPosition = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
           this.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.045,
              longitudeDelta: 0.045,
              routeCoordinates: [...this.state.region.routeCoordinates, newPosition],
              distanceTravelled: this.state.region.distanceTravelled + this.calcDistance(newPosition),
              prevLatLng: newPosition,
            },
          });
          }, 
          error => console.log(error),
          { 
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
            distanceFilter: 100
          }
         );
        
       }
       calcDistance = newLatLng => {
        const { prevLatLng } = this.state.region;
        if(Object.keys(prevLatLng).length === 0) {
          console.log("The original prevLatLng is undefined");
          return 0;
        }
        const distacnt = HaversineGeolocation.getDistanceBetween(prevLatLng, newLatLng, 'm');
        console.log(distacnt);
        return distacnt || 0;
      };
      
    
    render() {
      return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {/* <DestinationButton /> */}
            
            <CurrentLocationButton cb={() => { this.centerMap() }}/>
            <MapView
                region={this.getMapRegion()}
                // showsUserLocation={true}
                ref={(map) => {this.map = map}}
                rotateEnabled={false}
                style={styles.mapStyle}
            >
              <Polyline coordinates={this.state.region.routeCoordinates} strokeWidth={5} />
              <Marker coordinate={this.state.region}> 
                <Image source={require("../../../assets/car.png")} style={{ height: 35, width: 35 }} />
              </Marker>
              <Marker 
                coordinate={this.state.requesterRegion}
                title="Safeway"
              > 
              </Marker>
            </MapView>
            <Button onPress={this.handleGetDirections} title="Get Directions" />
            {/* <View style={styles.distanceContainer}>
              <Text>{parseFloat(this.state.region.distanceTravelled / 1000).toFixed(2) } km</Text>
            </View> */}
          </View>
          
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // marginTop: 800,
    },
    mapStyle: {
      width: 400,
      height: 250,
      borderRadius: 4,
      marginBottom: 5
    },
    distanceContainer: {
      flexDirection: "row",
      marginVertical: 20,
      backgroundColor: "transparent"
    },
  
  });
