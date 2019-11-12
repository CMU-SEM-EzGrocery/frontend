import React, { useContext } from 'react';
import {  StyleSheet, View, Button, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession, MapView, Location } from 'expo';
import { Text, ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

import { Context as BusinessContext } from '../../context/BusinessContext';

const HistoryOrdersScreen = ({ navigation }) => {

  const { state, updateOrderList, enterSpecificOrder } = useContext(BusinessContext);

  return (
    <View>
      <Text >History Orders Page!</Text>
      <Text h4> Lastest Order: </Text>
      <NavigationEvents onWillFocus={updateOrderList} />
      <FlatList
        data={state.historyOrders}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                enterSpecificOrder({item})
                // console.log(item)
                // console.log("[ITEM]")
              }}
            >
              <ListItem chevron title={item.tripInfo.tripTime} />
            </TouchableOpacity>
          );
        }}
      />
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

export default HistoryOrdersScreen;
