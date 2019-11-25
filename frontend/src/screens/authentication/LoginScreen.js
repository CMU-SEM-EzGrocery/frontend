import React, { useContext, useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession } from 'expo';

import { Context as AuthContext} from '../../context/AuthContext';

const LoginScreen = props => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const { signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>EZGrocery</Text>
      <Text style = {styles.label} >Phone Number</Text>
      <TextInput style = {styles.input} 
        autoCapitalize="none" 
        onSubmitEditing={() => this.passwordInput.focus()} 
        autoCorrect={false} 
        keyboardType='email-address' 
        returnKeyType="next" 
        onChangeText={setPhoneNumber}
        placeholder='Enter Phone' 
        placeholderTextColor='rgba(225,225,225,0.7)'>
      </TextInput>
      <Text style = {styles.label}>Password</Text>
      <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onChangeText={setPassword}
               onSubmitEditing={() => this.passwordInput.focus()} 
               passwordInput={true}
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Enter Password' 
               placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

        <TouchableOpacity
          style={styles.buttonS}
          onPress={() => signin({ phoneNumber, password })}
        >
          <Text style={styles.labelBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity  
          style={styles.buttonReg}
          onPress={() => props.navigation.navigate("Register")}  
        ><Text style={styles.labelBtn}>Register</Text></TouchableOpacity>
        <Text style={styles.labelAsk}>
        Are you new? 
      </Text> 
        
    </View>
  );
};

LoginScreen.navigationOptions = () => {
  return {
    header:null
  };
}

const styles = StyleSheet.create({
  text: {
    fontSize: 80
  },
  input:{
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
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom:50,
    },
    headline: {
      fontSize: 50,
      textAlign:"center",
      padding: 10, 
      margin: 10,
      fontWeight:'bold',      
  },
  labelBtn: {
    fontSize: 20,
    textAlign:"center",
    fontWeight:'bold',
    color:'white',
  },
  label: {
    fontSize: 20,
    textAlign:"left",
    padding: 10, 
    fontWeight:'bold',  
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
    paddingTop:10,
    paddingBottom:10,
    textAlign:'center',
    color:'#fff',
    width:"40%",
    marginLeft:10,
    marginTop:20,    
  },
  buttonReg: {
    backgroundColor: '#005AEE',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 35,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    paddingTop:10,
    paddingBottom:10,
    textAlign:'center',
    color:'#fff',
    width:"40%",
    marginLeft:200,
    marginTop:-45,    
  },
  linkStyle:{
    fontSize: 20,
    fontWeight:'bold',  
    color:"blue",
    marginLeft:151,
    marginTop:-22,
  
  },
  labelAsk: {
    fontSize: 20,
    textAlign:"center",
    padding: 10, 
    marginLeft: 160,
    fontWeight:'bold',  
  },
  buttonStart: {
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
    textAlign:'right',
    color:'#fff',
    width:"50%",
    marginLeft:180,
    marginTop:180,    
  },
});

export default LoginScreen;
