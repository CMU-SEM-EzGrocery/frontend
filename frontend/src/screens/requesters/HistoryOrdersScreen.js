import React, { useContext } from 'react';
import {  StyleSheet, View, Button, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession, MapView, Location } from 'expo';
import { Text, ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

import { Context as BusinessContext } from '../../context/BusinessContext';

const HistoryOrdersScreen = ({ navigation }) => {

  const { state, updateOrderList, enterSpecificOrder } = useContext(BusinessContext);

  return (
    <View style={styles.container}>
      <ScrollView>      
        <Text style={styles.headline}>History Orders Page</Text>
        <Image
            style={
              {
                width: 'auto', 
                height: 'auto',
                // marginLeft:-80,
                // marginTop:-50,
              }
            }
            // source={require('../ assets/commute.png')}
            source={require('../../../assets/schedule.png')}
          />
        <Text style={styles.label}> Lastest Scheduled Order: </Text>
        <NavigationEvents onWillFocus={updateOrderList} />
        <FlatList style={styles.order}
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    // marginTop: 50,
  },
  order:{
    fontSize: 20,
    textAlign: "left",
    fontWeight: 'bold',
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
    marginLeft:10,
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
});

export default HistoryOrdersScreen;
