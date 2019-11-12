import React, { useState, useContext } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { Input } from 'react-native-elements'

import { Context as BusinessContext } from '../../context/BusinessContext';

const MapForm = (props) => {

  const [stPoint, setStPoint] = useState('');
  const [midPoint, setMidPoint] = useState('');
  const [edPoint, setEdPoint] = useState('');
  const [tripTime, setTripTime] = useState('');

  const { submitNewOrder } = useContext(BusinessContext);

  return (
    <View>
      <Text> Start Position</Text>
      <TextInput style={styles.input}
        returnKeyType="next"
        onChangeText={setStPoint}
        placeholder='Please input your start position'
        placeholderTextColor='rgba(225,225,225,0.7)'>
      </TextInput>

      <Text> Shop Position</Text>
      <TextInput style={styles.input}
        returnKeyType="next"
        onChangeText={setMidPoint}
        placeholder='Please input which shop you want to go'
        placeholderTextColor='rgba(225,225,225,0.7)'>
      </TextInput>

      <Text> Drop-off Position</Text>
      <TextInput style={styles.input}
        returnKeyType="next"
        onChangeText={setEdPoint}
        placeholder='Please input where do you want to get off'
        placeholderTextColor='rgba(225,225,225,0.7)'>
      </TextInput>

      <Text> Time </Text>
      <TextInput style={styles.input}
        returnKeyType="next"
        onChangeText={setTripTime}
        placeholder='Please input when do you want to have this trip'
        placeholderTextColor='rgba(225,225,225,0.7)'>
      </TextInput>
        
      <TouchableOpacity 
        onPress={() => submitNewOrder({stPoint, midPoint, edPoint, tripTime})}
      >
        <Text style={styles.buttonS}>Place Your Order!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default MapForm;