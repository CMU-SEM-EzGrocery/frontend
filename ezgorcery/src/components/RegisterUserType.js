import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


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
      <Text></Text>
      <TouchableOpacity
        onPress={() => {
          props.changeUserType('helper')
          props.toUserProfile()
        }
        } 
        style={styles.buttonS}>
        <Text style={styles.labelBtn}>Helper</Text>
      </TouchableOpacity>
      
      {/* <Image
          style={{width: 50, height: 50}}
          source={require('../../assets/usertype.PNG')}
        />  */}
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
// labelBtn1: {
//   fontSize: 20,
//   textAlign:"left",
//   fontWeight:'bold',
//   color:'white',
//   marginRight:-40,
// },
labelBtn: {
  fontSize: 20,
  textAlign:"left",
  fontWeight:'bold',
  color:'white',
},
  label: {
    fontSize: 20,
    textAlign:"left",
    marginLeft: 100, 
    fontWeight:'bold',  
  },
  labelSmall: {
    fontSize: 20,
    textAlign:"left",
    marginLeft: 110, 
    fontWeight:'bold',  
  },  
// buttonR: {
//   backgroundColor: 'green',
//   borderColor: 'white',
//   borderWidth: 2,
//   borderRadius: 12,
//   color: '#fff',
//   fontSize: 14,
//   fontWeight: 'bold',
//   overflow: 'hidden',
//   paddingLeft:58,
//   paddingTop:20,
//   paddingBottom:20,
//   textAlign:'center',
//   color:'#fff',
//   width:"50%",
//   marginLeft:100,
//   marginBottom:50,
//   marginTop:50,
// },
// buttonH: {
//   backgroundColor: 'green',
//   borderColor: 'white',
//   borderWidth: 2,
//   borderRadius: 12,
//   color: '#fff',
//   fontSize: 14,
//   fontWeight: 'bold',
//   overflow: 'hidden',
//   paddingLeft:68,
//   paddingTop:20,
//   paddingBottom:20,
//   textAlign:'center',
//   color:'#fff',
//   width:"50%",
//   marginLeft:100,  
// },
buttonS: {
  backgroundColor: '#15C872',
  borderColor: 'white',
  borderWidth: 2,
  borderRadius: 12,
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
  overflow: 'hidden',
  paddingLeft:60,
  paddingTop:20,
  paddingBottom:20,
  textAlign:'center',
  color:'#fff',
  width:"50%",
  marginLeft:100,
  position:"relative"    
},

});

export default RegisterUserType;
