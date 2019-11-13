import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity, TextInput } from 'react-native';
import { Image, SearchBar, ListItem, Rating, AirbnbRating } from 'react-native-elements';

const Finished = props => {

  return (
    <View>
      <Text style={styles.headline}>Your Order is Completed!</Text>
      <Text style={styles.labelSmall}>Thank you so much for choosing EzGorcery! Please give your driver a rate! Are you quite satisfied with the journey?</Text>
      <AirbnbRating
        count={5}
        reviews={["Terrible", "Bad", "OK", "Good", "Amazing" ]}
        defaultRating={5}
        size={20}
      />
      <TouchableOpacity style={styles.buttonS} >
        <Text style={styles.labelBtn}>
          Submit!
        </Text>
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
    // fontWeight: 'bold',
    color:'grey'
    
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

export default Finished;