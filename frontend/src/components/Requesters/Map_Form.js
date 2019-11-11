import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { Input } from 'react-native-elements'

const MapForm = (props) => {

  const [stPoint, setStPoint] = useState('');
  const [midPoint, setMidPoint] = useState('');
  const [edPoint, setEdPoint] = useState('');
  const [tripTime, setTripTime] = useState('');

  return (
    <View>
      <Text> Start Position</Text>
      <TextInput style={styles.input}
        returnKeyType="next"
        onChangeText={text => setStPoint(text)}
        placeholder='Please input your start position'
        placeholderTextColor='rgba(225,225,225,0.7)'>
      </TextInput>

      <Text> Shop Position</Text>
      <TextInput style={styles.input}
        returnKeyType="next"
        onChangeText={text => setMidPoint(text)}
        placeholder='Please input which shop you want to go'
        placeholderTextColor='rgba(225,225,225,0.7)'>
      </TextInput>

      <Text> Drop-off Position</Text>
      <TextInput style={styles.input}
        returnKeyType="next"
        onChangeText={text => setEdPoint(text)}
        placeholder='Please input where do you want to get off'
        placeholderTextColor='rgba(225,225,225,0.7)'>
      </TextInput>

      <Text> Time </Text>
      <TextInput style={styles.input}
        returnKeyType="next"
        onChangeText={text => setTripTime(text)}
        placeholder='Please input when do you want to have this trip'
        placeholderTextColor='rgba(225,225,225,0.7)'>
      </TextInput>
        
      <TouchableOpacity 
        onPress={
          () => props.onSubmitForm(stPoint, midPoint, edPoint, tripTime, () => props.navigation.natigate("Service"))
        }
      >
        <Text style={styles.buttonS}>Place Your Order!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default MapForm;