import React, { useReducer, useContext } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession } from 'expo';

import { Context as AuthContext } from '../../context/AuthContext';

import RegisterUserPreference from '../../components/Authentication/RegisterUser_Preference';
import RegisterUserProfile from '../../components/Authentication/RegisterUser_Profile';
import RegisterUserType from '../../components/Authentication/RegisterUser_Type';
import RegisterUserVerification from '../../components/Authentication/RegisterUser_Verification';

const registerReducer = (state, action) => {
  switch (action.type) {
    // Decide which component to show in the screen
    case 'toUserType':
      return { ...state, step: 'UserType' };
    case 'toUserProfile':
      return { ...state, step: 'UserProfile' };
    case 'toUserPreference':
      return { ...state, step: 'UserPreference' };
    case 'toUserVerification':
      return { ...state, step: 'UserVerification' };

    // Methods to change value of textbox

    // UserType Page
    case 'changeUserType':
      return { ...state, userType: action.payload };

    // UserProfile
    case 'changeFirstName':
      return { ...state, firstName: action.payload };
    case 'changeLastName':
      return { ...state, lastName: action.payload };
    case 'changePhone':
      return { ...state, phone: action.payload };
    case 'changePassword':
      return { ...state, password: action.payload };

    // UserPreference
    case 'changeLanguage':
      return { ...state, language: action.payload };
    case 'changeCurrency':
      return { ...state, currency: action.payload };
    case 'changePreferredMarket':
      return { ...state, preferredMarket: action.payload };
    case 'changePayMethod':
      return { ...state, payMethod: action.payload };

    // UserVerification
    case 'changeDocumentType':
      return { ...state, documentType: action.payload };
    case 'changeIdNumber':
      return { ...state, IdNumber: action.payload };
    case 'changePhoto':
      return { ...state, photo: action.payload };

    default:
      return state;
  }
}

const RegisterScreen = props => {

  const { signup } = useContext(AuthContext);

  const [state, dispatch] = useReducer(registerReducer, { count: 0, step: 'UserType' });
  console.log(state);

  return (
    <View>

      {/* First Page: Choose User Type */}
      {
        state.step == 'UserType' &&
        <RegisterUserType
          changeUserType={newUserType =>
            dispatch({ type: 'changeUserType', payload: newUserType })
          }
          toUserProfile={() =>
            dispatch({ type: 'toUserProfile' })
          }
        />
      }

      {/* Second Page: Input FirstName LastName Phone Password */}
      {
        state.step == 'UserProfile' &&
        <RegisterUserProfile
          changeFirstName={newFirstName =>
            dispatch({ type: 'changeFirstName', payload: newFirstName })
          }
          changeLastName={newLastName =>
            dispatch({ type: 'changeLastName', payload: newLastName })
          }
          changePhone={newPhone =>
            dispatch({ type: 'changePhone', payload: newPhone })
          }
          changePassword={newPassword =>
            dispatch({ type: 'changePassword', payload: newPassword })
          }
          toUserType={() =>
            dispatch({ type: 'toUserType' })
          }
          toUserPreference={() =>
            dispatch({ type: 'toUserPreference' })
          }
        />
      }

      {/* Third Page: Input Language Currency PrefferedMarket PayMethod */}
      {
        state.step == 'UserPreference' &&
        <RegisterUserPreference
          changeLanguage={newLanguage =>
            dispatch({ type: 'changeLanguage', payload: newLanguage })
          }
          changeCurrency={newCurrency =>
            dispatch({ type: 'changeCurrency', payload: newCurrency })
          }
          changePreferredMarket={newPreferredMarket =>
            dispatch({ type: 'changePreferredMarket', payload: newPreferredMarket })
          }
          changePayMethod={newPayMethod =>
            dispatch({ type: 'changePayMethod', payload: newPayMethod })
          }
          toUserProfile={() =>
            dispatch({ type: 'toUserProfile' })
          }
          toUserVerification={() =>
            dispatch({ type: 'toUserVerification' })
          }
        />
      }

      {/* Forth Page: Input DocumentType IdNumber Photo */}
      {
        state.step == 'UserVerification' &&
        <RegisterUserVerification
          changeDocumentType={newDocumentType =>
            dispatch({ type: 'changeDocumentType', payload: newDocumentType })
          }
          changeIdNumber={newIdNumber =>
            dispatch({ type: 'changeIdNumber', payload: newIdNumber })
          }
          changePhoto={newPhoto =>
            dispatch({ type: 'changePhoto', payload: newPhoto })
          }
          toUserPreference={() =>
            dispatch({ type: 'toUserPreference' })
          }
        />
      }
      {
        state.step == 'UserVerification' &&
        <TouchableOpacity
          onPress={() => {
            signup({ 
              phoneNumber: state.phone,
              password: state.password, 
              firstName: state.firstName, 
              lastName: state.lastName, 
              roleId: "1", 
              currency: state.currency,
              language: state.language, 
              address: "CMU SV", 
              rating: "5", 
            })
          }} 
          style={styles.buttonS}>
          <Text style={styles.labelBtn}>Upload</Text>
        </TouchableOpacity>
      }

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    marginTop: 50,
  },
  input: {
    textAlign:'left',
    backgroundColor:'#F2F2F2',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 25,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding:10,
    marginTop:10,
    marginBottom:10,
    marginLeft:20,  
    width:"90%",
  },
  headline: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
  },
  labelBtn: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    fontSize: 20,
    textAlign: "left",
    marginLeft:25,
    fontWeight: 'bold',
  },
  labelSmall: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 110,
    fontWeight: 'bold',
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
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: '#fff',
    width:"70%",
    marginLeft:60,
    position:"relative"  
  },
});

export default RegisterScreen;
