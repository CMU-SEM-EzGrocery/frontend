import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession } from 'expo';


const HelloScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>EZGrocery</Text>
      <Text style={styles.label}> Login with</Text>
      <TouchableOpacity style={styles.buttonS}>
        <Text style={styles.labelBtn}>PHONE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonS}>
        <Text style={styles.labelBtn}>EMAIL</Text>
      </TouchableOpacity>
      <Text style={styles.labelAsk}>
        Are you new? Register 
      </Text>      
      <TouchableOpacity 
        onPress={()=> props.navigation.navigate('Register')}
        style={styles.linkStyle}>
        <Text>here</Text>
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
  text: {
    fontSize: 80
  },
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
  marginLeft: 5, 
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
  backgroundColor: 'green',
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
  fontSize: 10,
  fontWeight:'bold',  
  color:"blue",
  marginLeft:300,
  marginTop:-40,

},

});

export default HelloScreen;
