import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession, MapView, Location } from 'expo';

// _getLocationAsync = async () => {
//   let { status } = await PermissionRequest.askAsync(Permissions.Location);

//   let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true})
//   let region = {
//     latitude: location.coords.latitude,
//     longitude: location.coords.longitude,
//   }
// }

const MapScreen = props => {

  // this.state = {
  //   region: {
  //     latitude: 37.78825,
  //     longitude: -122.4324,
  //     latitudeDelta: 0.922,
  //     longitudeDelta: 0.0421,
  //   }
  // }

  return (
    <View>
      <Text>Map Page!</Text>
      <MapView
        // initialRegion={this.state.region}
        showsUserLocation={true}
        showsCompass={true}
        rotateEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default MapScreen;
