import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput } from 'react-native';

const RegisterUserProfile = (props) => {
  return (
    <View>
      <Text style={styles.text}>Tell us something about yourself</Text>

      <Text>Document Type</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        placeholder='Drivers license'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

      <Text>ID Number</Text>
      <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType=''
        returnKeyType="next"
        placeholder='Enter ID Number'
        placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>

      <Text>Upload Verification ID</Text>
      <TouchableOpacity onPress={this._onPressButton}>
        {/* <Image
          style={styles.button}
          source={require('../../assets/verificationimage.ico')}
        /> */}
      </TouchableOpacity>
        
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
