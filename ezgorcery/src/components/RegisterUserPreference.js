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
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        placeholder='Language'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Currency</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        onChangeText= {newValue => props.changeCurrency(newValue) } 
        keyboardType=''
        returnKeyType="next"
        placeholder='Enter Currency'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Preferred Market</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        onChangeText= {newValue => props.changePreferredMarket(newValue) } 
        keyboardType=''
        returnKeyType="next"
        placeholder='Preferred Market'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Payment</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
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
    marginLeft:5,  
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
    textAlign: "left",
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 10,
    fontWeight: 'bold',
  },
  labelSmall: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 110,
    fontWeight: 'bold',
  },
  buttonS: {
    backgroundColor: '#15C872',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 12,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    paddingLeft: 80,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    color: '#fff',
    width: "50%",
    marginLeft: 100,
    marginTop: 20,
  },
});

export default RegisterUserPreference;
