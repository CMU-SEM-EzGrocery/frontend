import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import serverAPI from '../api/server';
import { navigate } from '../navigationRef';

// Define Reducer
const locationReducer = (state, action) => {
  switch(action.type) {
    case 'update_posible_st':
      return {...state, possibleSt: action.payload}
  }
};

// Define Functions
const updateStPoint = dispatch => async ({place}) => {
  try {
    // console.log({place});
    // console.log("********");
    const response = await serverAPI.post('/map/place', { place });
    dispatch({ type: "update_posible_st", payload: response.data.json.results});
    // console.log(response);
  } catch(err) {
    console.log(err);
  }
}

// Generate & Export
export const { Provider, Context } = createDataContext(
  locationReducer,
  { updateStPoint },
  {
    possibleSt: null,
  }
);