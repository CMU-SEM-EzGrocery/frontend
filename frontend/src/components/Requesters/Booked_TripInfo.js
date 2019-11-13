import React, { useState, useEffect, useContext } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { Image, SearchBar, Button, ListItem } from 'react-native-elements';

import { Context as BusinessContext } from '../../context/BusinessContext';

const Booked_TripInfo = props => {

  const { State } = useContext(BusinessContext);

  return (
    <View >
      <Text></Text>
      <Image
         style={{width: 400, height: 150,marginLeft:80,marginTop:20,marginBottom:10,}}
          source={require('../../../assets/red_car.png')}
      />
      <Text></Text>
      <Text style={styles.labelSmall}>Trip Details</Text>
      
      
      <View style={styles.container}>
        <Text style={styles.startptLbl}>Start Point</Text>
        <Text style={styles.startpt}>Nasa Ames</Text>
        <Text style={styles.starttimeLbl}>Start Time</Text>
        <Text style={styles.starttime}>6.08PM</Text>
      </View>

     
        <View style={styles.containerBottom}>
          <Text style={styles.destinationLbl}>Destination</Text>
          <Text style={styles.destination}>Safeway</Text>
          <Text style={styles.finishtimeLbl}>Finish Time</Text>
          <Text style={styles.finishtime}>7.30PM</Text>
        </View>
        
      </View>
      
  );
  
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    marginTop: 50,
    marginLeft:10,
  },
  containerBottom: {
    marginTop: 50,
    marginLeft:10,
  },
  startptLbl:{
    fontSize: 20,
    textAlign: "left",
    fontWeight: 'bold',
    marginLeft:10,
    
  },
  starttimeLbl:{
    fontSize: 20,
    textAlign: "right",
    fontWeight: 'bold',
    marginTop:-40,
    marginRight:40,
  },
  destinationLbl:{
    fontSize: 20,
    textAlign: "left",
    fontWeight: 'bold',
    marginLeft:10,
  },
  finishtimeLbl:{
    fontSize: 20,
    textAlign: "right",
    fontWeight: 'bold',
    marginTop:-40,
    marginRight:30,
  },

  startpt:{
    fontSize: 10,
    textAlign: "left",
    fontWeight: 'bold',
    marginLeft:10,
  },
  starttime:{
    fontSize: 10,
    textAlign: "right",
    fontWeight: 'bold',
    marginRight:105,
  },
  destination:{
    fontSize: 10,
    textAlign: "left",
    fontWeight: 'bold',
    marginLeft:10,
  },
  finishtime:{
    fontSize: 10,
    textAlign: "right",
    fontWeight: 'bold',
    marginRight:105,
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
    textAlign: "center",
    // marginLeft: 110,
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

export default Booked_TripInfo;
