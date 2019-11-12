import React, { useState, useEffect, useContext } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { Image, SearchBar, Button, ListItem } from 'react-native-elements';

import { Context as BusinessContext } from '../../context/BusinessContext';

const Booked_TripInfo = props => {

  const { State } = useContext(BusinessContext);

  return (
    <View>
      <Text>TripInfo!</Text>

    </View>
  );
};

const styles = StyleSheet.create({

});

export default Booked_TripInfo;
