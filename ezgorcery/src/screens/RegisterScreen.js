import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthSession } from 'expo';

import RegisterUserPreference from '../components/RegisterUserPreference';
import RegisterUserProfile from '../components/RegisterUserProfile';
import RegisterUserType from '../components/RegisterUserType';
import RegisterUserVerification from '../components/RegisterUserVerification';

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
          finishRegister={() => {
            console.log('**')
            console.log(state)
            console.log('**')
            props.navigation.navigate('Map')
          }
          }
        />
      }

    </View>
  );
};

export default RegisterScreen;
