import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const UserProfileScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Tell us something about yourself</Text>
      <Text style={styles.label}>First Name</Text>
      <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='' 
               returnKeyType="next" 
               placeholder='Enter First Name' 
               placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Last Name</Text>
      <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='' 
               returnKeyType="next" 
               placeholder='Enter Last Name' 
               placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Phone</Text>
      <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='' 
               returnKeyType="next" 
               placeholder='+1 XXX - XXX - XXX' 
               placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Password</Text>
      <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='' 
               returnKeyType="next" 
               placeholder='Enter Password' 
               placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

     
      <TouchableOpacity onPress={()=> props.navigation.navigate('UserPreference')} style={styles.buttonS}><Text style={styles.labelBtn}>Next</Text></TouchableOpacity>
      
    </View>
  );
};
// UserProfileScreen.navigationOptions = () => {
//   return {
//     header:'EzGrocery'
//   };
// }
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

export default UserProfileScreen;
