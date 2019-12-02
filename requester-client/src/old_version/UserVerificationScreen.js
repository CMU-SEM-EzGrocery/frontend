import React from 'react';
import { Text, StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const UserVerificationScreen = ({ navigation }) => {
  return (
    <View>
      <Text >Identification Verify</Text>
      <TextInput>Driver's Licence</TextInput>
      
      <Text>ID Number</Text>
      <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='ID Number' 
               placeholderTextColor='rgba(225,225,225,0.7)'></TextInput>
      
      <Button title="Upload"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default UserVerificationScreen;
