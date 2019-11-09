import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession } from 'expo';


const HelloScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>EZGrocery</Text>
      <Text style={styles.label}> Login with</Text>
      <TouchableOpacity style={styles.buttonS} onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.labelBtn}>Phone</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        disabled={true} style={styles.buttonDisabled}
        onPress={()=> props.navigation.navigate('HistoryOrders')}
      >
        <Text style={styles.labelBtn}>Email</Text>
      </TouchableOpacity>
      <Text style={styles.labelAsk}>
        Are you new? Register now! 
      </Text>      
      <TouchableOpacity 
        onPress={()=> props.navigation.navigate('Register')}
        style={styles.buttonS}>
        <Text style={styles.labelBtn}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
HelloScreen.navigationOptions = () => {
  return {
    header:null
  };
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom:50,
    },
    headline: {
      fontSize: 50,
      textAlign:"center",
      padding: 10, 
      margin: 10,
      fontWeight:'bold',    
  },
  labelBtn: {
    fontSize: 20,
    textAlign:"left",
    marginLeft: -2, 
    fontWeight:'bold',
    color:'white',
  },
  label: {
    fontSize: 30,
    textAlign:"center",
    padding: 10, 
    margin: 8,
    fontWeight:'bold',  
  },
  labelAsk: {
    fontSize: 20,
    textAlign:"center",
    padding: 10, 
    margin: 10,
    fontWeight:'bold',  
  },
  buttonS: {
    backgroundColor: '#15C872',
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
    position:"relative"
    
  },
  buttonDisabled: {
    backgroundColor: 'grey',
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
    
  },
  linkStyle:{
    fontSize: 20,
    fontWeight:'bold', 
    backgroundColor:'blue', 
    color: '#fff',
    marginLeft:300,
    marginTop:-39,
  
  },

});

export default HelloScreen;
