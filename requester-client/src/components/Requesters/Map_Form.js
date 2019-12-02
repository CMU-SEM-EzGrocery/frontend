import React, { useState, useContext } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput, ScrollView, Image ,TouchableHighlight, DatePickerIOS } from 'react-native';
import { Input } from 'react-native-elements'

import { Context as BusinessContext } from '../../context/BusinessContext';
import StandardDropdown from './Dropdown';
import DatePicker from './DatePicker';
import Err from './Err';

import MapComp from './MapComp';

const MapForm = (props) => {

  const [stPoint, setStPoint] = useState('');
  const [midPoint, setMidPoint] = useState('');
  const [edPoint, setEdPoint] = useState('');
  const [tripTime, setTripTime] = useState('');
  const [chosenDate, setChosenDate] = useState(new Date());

  const [errMessage, setErr] = useState(false);

  const { submitNewOrder } = useContext(BusinessContext);

  updateStPoint = (newStPoint) => {
    setStPoint(newStPoint);
  }
  updateMidPoint = (newMidPoint) => {
    setMidPoint(newMidPoint);
  }
  updateEdPoint = (newEdPoint) => {
    setEdPoint(newEdPoint);
  }

  updateTime = (newTime) => setTripTime(newTime);


  checkError = () => {
    flag = false;
    if(!stPoint) flag = true;
    if(!midPoint) flag = true;
    if(!edPoint) flag = true;
    setErr(flag);
    return flag;
  }
  
  UserPress = () => {
    if(!checkError())
      submitNewOrder({stPoint, midPoint, edPoint, tripTime});
  }

  return (
    <View style={styles.container}>

      
      <StandardDropdown
        style={styles.dropDown}
        changeFunc={this.updateStPoint}
        titleStr={"Your Start Point"}
      />
      
      <StandardDropdown
        style={styles.dropDown}
        changeFunc={this.updateMidPoint}
        titleStr={"Which Shop?"}
      />
      
      <StandardDropdown
        style={styles.dropDown}
        changeFunc={this.updateEdPoint}
        titleStr={"Drop-off Point"}
      />

      <Text style={styles.label}> Time </Text>
      
      <DatePicker
        updateTime={this.updateTime}
      />
      
      {
        errMessage && <Err/>
      }

      <TouchableOpacity 
        onPress={() => UserPress()}
      >
        <Text style={styles.buttonS}>Place Your Order!</Text>
      </TouchableOpacity>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <MapComp
        stPoint={stPoint}
        midPoint={midPoint}
        edPoint={edPoint}
      />
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
  dropDown: {
    marginTop: 10,
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

export default MapForm;