import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import serverAPI from '../api/server';
import { navigate } from '../navigationRef';

const businessReducer = (state, action) => {
  switch (action.type) {
    case 'submit_trip_form':
      return {...state, tripInfo: action.payload}
    default:
      return state;
  }
};

const submitNewOrder = dispatch => async ({ stPoint, midPoint, edPoint, tripTime}) => {
  const response = await serverAPI.post('/requesters/new', { stPoint, midPoint, edPoint, tripTime});
  dispatch({ type: "submit_trip_form", payload: response.data.tripInfo})
  navigate('Service');
}

export const { Provider, Context } = createDataContext(
  businessReducer,
  { submitNewOrder },
  { 
    historyOrders: null, 
    currentOrder: {
      stepState: 0, 
      tripInfo: null,  
      helperInfo: null,
    }, 
  }
);
