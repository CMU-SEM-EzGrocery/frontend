import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import serverAPI from '../api/server';
import { navigate } from '../navigationRef';

const businessReducer = (state, action) => {
  switch (action.type) {
    case 'submit_trip_form':
      return {...state, currentOrder: action.payload}
    case 'update_order_list':
      return {...state, historyOrders: action.payload}
    case 'choose_specific_order':
      return {...state, currentOrder: action.payload}
    default:
      return state;
  }
};

const submitNewOrder = dispatch => async ({ stPoint, midPoint, edPoint, tripTime}) => {
  const response = await serverAPI.post('/requesters/new', { stPoint, midPoint, edPoint, tripTime});
  // console.log("[ * Submit New Order * ]");
  // console.log(response.data);
  dispatch({ type: "submit_trip_form", payload: response.data})
  navigate('Service');
}

const updateOrderList = dispatch => async () => {
  const response = await serverAPI.get('/requesters/allorders');
  // console.log(response);
  // console.log('X');
  dispatch({ type: "update_order_list", payload: response.data});
}

const enterSpecificOrder = dispatch => async ({item}) => {
  await dispatch({ type: "choose_specific_order", payload: item});
  // console.log("order:");
  // console.log(item);
  // console.log(item);
  navigate('Service');
}

export const { Provider, Context } = createDataContext(
  businessReducer,
  { submitNewOrder, updateOrderList, enterSpecificOrder },
  { 
    historyOrders: null, 
    currentOrder: {
      stepState: 0, 
      tripInfo: null,  
      helper: null,
      requesters: null,
    }, 
  }
);
