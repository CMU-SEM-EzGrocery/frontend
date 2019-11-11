import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { Image, SearchBar, Button, ListItem } from 'react-native-elements';

const Booked_HelperFound = props => {

  return (
    <View>
      <Text>Your Request is Taken!</Text>
      <Text>The driver is glad to see you! Please take a moment for coming out what’s your shopping list. Say a warm hello to the helper!</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Booked_HelperFound;