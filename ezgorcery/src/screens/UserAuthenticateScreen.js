import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const UserAuthenticateScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>EZGrocery</Text>
      <Text style = {styles.label} >Phone</Text>
      <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Enter Email/Phone' 
               placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
<Text style = {styles.label}>Password</Text>
<TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Enter Password' 
               placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

<TouchableOpacity onPress={()=> props.navigation.navigate('UserType')} style={styles.buttonS}><Text style={styles.labelBtn}>Login</Text></TouchableOpacity>
<Text style={styles.labelAsk}>
        Are you new? Start 
      </Text> 
        <TouchableOpacity onPress={()=> props.navigation.navigate('UserType')} style={styles.linkStyle}><Text>here</Text></TouchableOpacity>
    </View>
  );
};
UserAuthenticateScreen.navigationOptions = () => {
  return {
    header:null
  };
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30
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
    textAlign:"left",
    marginLeft: 5, 
    fontWeight:'bold',
    color:'white',
  },
  label: {
    fontSize: 30,
    textAlign:"left",
    padding: 10, 
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
  linkStyle:{
    fontSize: 20,
    fontWeight:'bold',  
    color:"blue",
    marginLeft:300,
    marginTop:-40,  
  },
  labelAsk: {
    fontSize: 20,
    textAlign:"center",
    padding: 10, 
    margin: 10,
    fontWeight:'bold',  
  },
});

export default UserAuthenticateScreen;
