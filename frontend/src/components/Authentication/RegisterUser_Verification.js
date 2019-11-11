import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput } from 'react-native';

const RegisterUserVerification = (props) => {
  return (
    <View>
      <Text >Identification Verify</Text>
      <TextInput>Driver's Licence</TextInput>

      <Text>ID Number</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType='email-address'
        returnKeyType="next"
        placeholder='ID Number'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

      <TouchableOpacity
        onPress={() => props.finishRegister()} 
        style={styles.buttonS}>
        <Text style={styles.labelBtn}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default RegisterUserVerification;
