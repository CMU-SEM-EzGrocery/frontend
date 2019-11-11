import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { Image, SearchBar, Button, ListItem } from 'react-native-elements';

const Booked_ThankYou = props => {

  return (
    <View>
      <Text>Thank you for Booking!</Text>
      <Text>Usually, our system takes 10 minutes to match your potential shopping partner. We appreciate your pateince and interest in using our APP.</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Booked_ThankYou;
