import React, { useState, useContext } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput, ScrollView, Image ,TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements'
import ModalDropdown from 'react-native-modal-dropdown';

import { Context as BusinessContext } from '../../context/BusinessContext';

const dropdown_6_icon = require('./images/heart.png');

const DEMO_OPTIONS_2 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];

const MapForm = (props) => {

  const [stPoint, setStPoint] = useState('');
  const [midPoint, setMidPoint] = useState('');
  const [edPoint, setEdPoint] = useState('');
  const [tripTime, setTripTime] = useState('');

  const { submitNewOrder } = useContext(BusinessContext);

  stPointChange = (text) => {
    setStPoint(text);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}> Start Position</Text>
      {/* <ModalDropdown
        style={styles.dropdown}
        options={DEMO_OPTIONS_2}
      /> */}
      <TextInput style={styles.input}
        returnKeyType="next"
        onChangeText={text => stPointChange(text)}
        autoFocus={true}
        placeholder='Please input your start position'
        placeholderTextColor='rgba(225,225,225,0.7)'>
      </TextInput>


      <Text style={styles.label}> Shop Position</Text>
      <TextInput style={styles.input}
        returnKeyType="next"
        onChangeText={setMidPoint}
        autoFocus={true}
        placeholder='Please input which shop you want to go'
        placeholderTextColor='rgba(225,225,225,0.7)'>
      </TextInput>

      <Text style={styles.label}> Drop-off Position</Text>
      <TextInput style={styles.input}
        returnKeyType="next"
        onChangeText={setEdPoint}
        autoFocus={true}
        placeholder='Please input where do you want to get off'
        placeholderTextColor='rgba(225,225,225,0.7)'>
      </TextInput>

      <Text style={styles.label}> Time </Text>
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
  dropdown: {
    flex: 1,
    left: 8,
  },
});

export default MapForm;