import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput  } from 'react-native';

const RegisterUserPreference = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Shopping Preference</Text>
      <Text style={styles.label}>Language</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
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
        keyboardType=''
        returnKeyType="next"
        placeholder='Enter Currency'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Preferred Market</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        placeholder='Preferred Market'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      <Text style={styles.label}>Payment</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        placeholder='By Cash'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

      <TouchableOpacity 
        onPress={() => props.toUserVerification()} 
        style={styles.buttonS}>
        <Text style={styles.labelBtn}>Next Step</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default RegisterUserPreference;
