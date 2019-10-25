import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <View>
      <Text style={styles.text}>EZGrocery</Text>
      <Text> Login with</Text>
      <Button>YOUR PHONE</Button>
      <Button>EMAIL</Button>
      <Text>
        Are you new? Register 
        <Button>
          here
        </Button>
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default LoginScreen;
