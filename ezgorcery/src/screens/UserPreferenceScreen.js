import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const UserPreferenceScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Shopping Preference</Text>
      <Text style={styles.label}>Language</Text>
      <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='' 
               returnKeyType="next" 
               placeholder='Language' 
               placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Currency</Text>
      <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='' 
               returnKeyType="next" 
               placeholder='Enter Currency' 
               placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Preferred Market</Text>
      <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='' 
               returnKeyType="next" 
               placeholder='Preferred Market' 
               placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Payment</Text>
      <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='' 
               returnKeyType="next" 
               placeholder='By Cash' 
               placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      
      <TouchableOpacity onPress={()=> props.navigation.navigate('UserVerification')} style={styles.buttonS}><Text style={styles.labelBtn}>Finish</Text></TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom:100,
    },
    input:{
      textAlign:'left',
      backgroundColor:'grey',
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 12,
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding:10,    
      width:"95%",
    },
    headline: {
      fontSize: 20,
      textAlign:"center",
      padding: 10, 
      margin: 10,
      fontWeight:'bold',      
  },
  labelBtn: {
    fontSize: 20,
    textAlign:"left",
    marginLeft: 5, 
    fontWeight:'bold',
    color:'white',
  },
    label: {
      fontSize: 20,
      textAlign:"left",
      marginLeft: 10, 
      fontWeight:'bold',  
    },
    labelSmall: {
      fontSize: 20,
      textAlign:"left",
      marginLeft: 110, 
      fontWeight:'bold',  
    },
  buttonS: {
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 12,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    paddingLeft:80,
    paddingTop:20,
    paddingBottom:20,
    textAlign:'center',
    color:'#fff',
    width:"50%",
    marginLeft:100,
    marginTop:20,    
  },
});

export default UserPreferenceScreen;
