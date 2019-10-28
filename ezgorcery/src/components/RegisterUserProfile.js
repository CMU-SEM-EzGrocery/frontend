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

      <Button
        style={styles.buttonS}
        onPress={() => props.toUserType()}
        title="Go Back"
      ></Button>
      <Button
        style={styles.buttonS}
        onPress={() => props.toUserPreference()}
        title="Next"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100,
  },
  input: {
    textAlign: 'left',
    backgroundColor: 'grey',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 12,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 10,
    width: "95%",
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
    marginLeft: 5,
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
    backgroundColor: 'green',
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

export default RegisterUserProfile;
