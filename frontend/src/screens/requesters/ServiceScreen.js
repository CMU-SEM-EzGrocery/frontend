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

const ServiceScreen = props => {

  const { state } = useContext(Context);

  return (
    <View>
      <Text>Booked Page!</Text>
      
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
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ServiceScreen;
