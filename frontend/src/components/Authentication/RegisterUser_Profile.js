import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput } from 'react-native';

const RegisterUserProfile = (props) => {
  return (

    <View>
      <Text style={styles.headline}>Tell us something about yourself</Text>
      <Text style={styles.label}>First Name</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        onChangeText= {newValue => props.changeFirstName(newValue) } 
        keyboardType=''
        returnKeyType="next"
        placeholder='Enter First Name'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Last Name</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        onChangeText= {newValue => props.changeLastName(newValue) } 
        placeholder='Enter Last Name'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Phone</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        onChangeText= {newValue => props.changePhone(newValue) } 
        placeholder='+1 XXX - XXX - XXX'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        secureTextEntry={true}
        onChangeText= {newValue => props.changePassword(newValue) } 
        returnKeyType="next"
        placeholder='Enter Password'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

      <TouchableOpacity
        style={styles.buttonS}
        onPress={() => props.toUserType()}
      ><Text style={styles.labelBtn}>Go Back</Text></TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.buttonS}
        onPress={() => props.toUserPreference()}
      ><Text style={styles.labelBtn}>Next</Text></TouchableOpacity>
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
    // marginLeft: 10,
    fontWeight: 'bold',
    marginLeft:25,
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

export default RegisterUserProfile;
