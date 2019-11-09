import React from 'react';
import {  StyleSheet, View, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession, MapView, Location } from 'expo';
import { Text, ListItem } from 'react-native-elements';

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

      {/* <Text h4> History Order 1</Text>
      <Text> Driver: Haitong </Text>
      <Text> Date: 2019-9-24 18:20:51 </Text>
      <Text> Price: $ 3.47 </Text>
      <Text> St: CMU-SV, Mountain View </Text>
      <Text> Shop: # Ranch 99, Mountain View </Text>
      <Text> Ed: # Homestead Rd, Santa Clara </Text>

      <Text h4> History Order 2</Text>
      <Text> Driver: Lynch </Text>
      <Text> Date: 2019-10-8 6:28:39 </Text>
      <Text> Price: $ 2.28 </Text>
      <Text> St: CMU-SV, Mountain View </Text>
      <Text> Shop: # Korean Shop, Mountain View </Text>
      <Text> Ed: # SJSU, San Jose </Text>

      <Text h4> History Order 3</Text>
      <Text> Driver: Lynch </Text>
      <Text> Date: 2019-10-25 10:42:34 </Text>
      <Text> Price: $ 5.28 </Text>
      <Text> St: CMU-SV, Mountain View </Text>
      <Text> Shop: # Korean Shop, Mountain View </Text>
      <Text> Ed: # SJSU, San Jose </Text>

      <Text h4> History Order 4</Text>
      <Text> Driver: Lynch </Text>
      <Text> Date: 2019-10-25 20:41:52 </Text>
      <Text> Price: $ 5.48 </Text>
      <Text> St: CMU-SV, Mountain View </Text>
      <Text> Shop: # Korean Shop, Mountain View </Text>
      <Text> Ed: # SJSU, San Jose </Text> */}

    <Text h4> Lastest Order: </Text>
    <View>
      {
        list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
            onPress={() => props.navigation.navigate("Detail")}
          />
        ))
      }
    </View>

    </View>
  );
};

const styles = StyleSheet.create({

  buttonS: {
    backgroundColor: '#03a557',
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

export default MapScreen;
