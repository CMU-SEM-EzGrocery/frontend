import React, { useState, useContext } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput, ScrollView, Image ,TouchableHighlight, DatePickerIOS } from 'react-native';
import { Input } from 'react-native-elements'

const Err = () => {
  return (
    <Text style={{color: 'red'}}>
      Please input all the 3 positions
    </Text>
  )
}

export default Err;