import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession } from 'expo';


const HelloScreen = props => {
  return (
    
     <View style={styles.container}>
        <Text style={styles.headline}>EZGrocery</Text>
        <Text style={styles.label}> Login</Text>
        <TouchableOpacity style={styles.buttonS} onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.labelBtn}>PHONE</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity 
          disabled={true} style={styles.buttonDisabled}
          onPress={()=> props.navigation.navigate('HistoryOrders')}
        >
          <Text style={styles.labelBtn}>EMAIL</Text>
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
    textAlign:"center",
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
    backgroundColor: '#03a557',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 35,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    paddingTop:10,
    paddingBottom:10,
    textAlign:'center',
    color:'#fff',
    width:"70%",
    marginLeft:60,
    position:"relative"    
  },
  buttonDisabled: {
    backgroundColor: 'grey',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 35,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    paddingTop:10,
    paddingBottom:10,
    textAlign:'center',
    color:'#fff',
    width:"70%",
    marginLeft:60,
    position:"relative" 
    
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
