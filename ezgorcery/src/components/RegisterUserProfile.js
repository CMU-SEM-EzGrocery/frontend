import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput } from 'react-native';

const RegisterUserProfile = (props) => {
  return (
    <View>
      <Text style={styles.text}>Tell us something about yourself</Text>

      <Text>First Name</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        onChangeText={newText => props.changeFirstName(newText)}
        placeholder='First Name'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

      <Text>Last Name</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        onChangeText={newText => props.changeLastName(newText)}
        placeholder='Last Name'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

      <Text>Phone Number</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        onChangeText={newText => props.changePhone(newText)}
        placeholder='(xxx) xxx - xxxx'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

      <Text>Password</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        onChangeText={newText => props.changePassword(newText)}
        placeholder='Password'
        secureTextEntry={true}
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
        
      <Button
        onPress={() => props.toUserType()}
        title="Go Back"
      ></Button>
      <Button
        onPress={() => props.toUserPreference()}
        title="Next"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default RegisterUserProfile;
