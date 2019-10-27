import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const onRequesterSubmit = () => {

}

const RegisterUserType = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>What do you want to be?</Text>
      <Text style={styles.labelSmall}>Requester or Helper?</Text>
      
      <TouchableOpacity 
        onPress={() => {
          props.changeUserType('requester')
          props.toUserProfile()
        }
        } 
        style={styles.buttonS}>
        <Text style={styles.labelBtn1}>Requester</Text>
      </TouchableOpacity>
      
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
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   marginBottom: 200,
  // },
  headline: {
    fontSize: 50,
    textAlign: "center",
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
  },
  labelBtn1: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: 'bold',
    color: 'white',
    marginRight: 35,
  },
  labelBtn: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: 'bold',
    color: 'white',
    marginRight: 20,
  },
  label: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 100,
    fontWeight: 'bold',
  },
  labelSmall: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 110,
    fontWeight: 'bold',
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
    paddingLeft: 80,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    color: '#fff',
    width: "50%",
    marginLeft: 100,
    marginTop: 20,
  },
});

export default RegisterUserType;
