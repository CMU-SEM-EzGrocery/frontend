import React from 'react';
import { Text, StyleSheet, View,Image, Button, TouchableOpacity } from 'react-native';


const RegisterUserType = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>What do you want to be?</Text>
      <Text style={styles.labelSmall}>Requester or Helper?</Text>
      <Text></Text>
      <TouchableOpacity 
        onPress={() => {
          props.changeUserType('requester')
          props.toUserProfile()
        }
        } 
        style={styles.buttonS}>
        <Text style={styles.labelBtn}>Requester</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        disabled={true}
        onPress={() => {
          props.changeUserType('helper')
          props.toUserProfile()
        }} 
        style={styles.buttonD}>
        <Text style={styles.labelBtn}>Helper</Text>
      </TouchableOpacity>
      
      <Image
          style={{width: 300, height: 200,alignContent:"center",marginLeft:40,}}
          source={require('../../../assets/usertypepref.png')}
        />
      {/* <TouchableOpacity onPress={()=> props.navigation.navigate('UserProfile')} style={styles.buttonS}><Text>Next</Text></TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    marginTop:150,
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
    fontSize: 20,
    textAlign:"center",
    fontWeight:'bold',  
  },
  labelSmall: {
    fontSize: 20,
    textAlign:"center",
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
  width:"50%",
  marginLeft:100,
  position:"relative"    
},
buttonD: {
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
  width:"50%",
  marginLeft:100,
  position:"relative"  
},
});

export default RegisterUserType;
