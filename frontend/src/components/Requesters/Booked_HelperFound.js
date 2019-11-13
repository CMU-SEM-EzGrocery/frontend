import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { Image, SearchBar, Button, ListItem } from 'react-native-elements';

const Booked_HelperFound = props => {

  return (
    <View>
      <Text style={styles.headline}>Your Request is Taken!</Text>
      <Text>The driver is glad to see you! Please take a moment for coming out what’s your shopping list. Say a warm hello to the helper!</Text>
      <Image
         style={{width: 400, height: 350,marginLeft:80,marginTop:20,marginBottom:10,}}
          source={require('../../../assets/onTheWay.jpeg')}
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
    // justifyContent: 'center',
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
    textAlign: "center",
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

export default Booked_HelperFound;