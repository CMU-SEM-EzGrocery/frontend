import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput  } from 'react-native';

const RegisterUserPreference = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Shopping Preference</Text>
      <Text style={styles.label}>Language</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onChangeText= {newValue => props.changeLanguage(newValue) } 
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        placeholder='Language'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Currency</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText= {newValue => props.changeCurrency(newValue) } 
        keyboardType=''
        returnKeyType="next"
        placeholder='Enter Currency'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Preferred Market</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText= {newValue => props.changePreferredMarket(newValue) } 
        keyboardType=''
        returnKeyType="next"
        placeholder='Preferred Market'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Payment</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onChangeText= {newValue => props.changePayMethod(newValue) }         
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        placeholder='By Cash'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

      <TouchableOpacity 
        onPress={() => props.toUserVerification()} 
        style={styles.buttonS}>
        <Text style={styles.labelBtn}>Next</Text>
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
    marginTop: 50,
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
});

export default RegisterUserPreference;
