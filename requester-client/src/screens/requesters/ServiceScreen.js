import React, { useState, useEffect, useContext } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { Image, SearchBar, Button, ListItem } from 'react-native-elements';

import { Context } from '../../context/BusinessContext';

// Import Related Messages
import Booked_ThankYou from '../../components/Requesters/Booked_ThankYou';
import Booked_HelperFound from '../../components/Requesters/Booked_HelperFound';
import Booked_TripInfo from '../../components/Requesters/Booked_TripInfo';
import Booked_HelperInfo from '../../components/Requesters/Booked_HelperInfo';
import DriverComing from '../../components/Requesters/DriverComing';
import Finished from '../../components/Requesters/Finished';

const ServiceScreen = props => {

  const { state } = useContext(Context);

  return (
    <View style={styles.container}>
      {/* <Text>Booked Page!</Text> */}
      
      { 
        state.currentOrder.stepState == 1 ?
        (
          <>
            <Booked_ThankYou/>
            <Booked_TripInfo/>
          </>
          ) :
        null
      }

      {
        state.currentOrder.stepState == 2 ?
        (
          <>
            <Booked_HelperFound/>
            <Booked_HelperInfo/>
            <Booked_TripInfo/>
          </>
          ) :
        null
      }
    
      {
        state.currentOrder.stepState == 3 ?
        (
          <>
            <DriverComing/>
            <Booked_HelperInfo/>
            <Booked_TripInfo/>
          </>
          ) :
        null
      }
      {
        state.currentOrder.stepState == 6 ?
        (
          <>
            <Finished/>
          </>
          ) :
        null
      }
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
});

export default ServiceScreen;
