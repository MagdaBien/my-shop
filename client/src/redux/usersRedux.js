import initialState from './initialState';
import { API_URL } from '../config';

//selectors
export const getUser = (state) => state.user.data;
export const isLoadingData = (state) => state.order.isLoading;
export const isErrorData = (state) => state.order.error;
export const isDataReady = (state) => {
  if (state.order.isLoading !== false || state.order.error !== null) {
    return false;
  } else {
    return true;
  }
};

// actions
const createActionName = (actionName) => `app/users/${actionName}`;
const START_REQUEST = createActionName('START_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const LOAD_DATA = createActionName('LOAD_DATA');
const END_REQUEST = createActionName('END_REQUEST');
const ADD_USER = createActionName('ADD_USER');
const CLEAR_USER = createActionName('CLEAR_ORDER');

// action creators
export const startRequest = () => ({ type: START_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const loadData = (payload) => ({ payload, type: LOAD_DATA });
export const endRequest = () => ({ type: END_REQUEST });
export const addUser = (payload) => ({ type: ADD_USER, payload });
export const clearUser = (payload) => ({ type: CLEAR_USER, payload });

// get client by email
export const loadUserRequest = (email) => {
  //console.log('FIND user from userRedux: ', email);
  return (dispatch) => {
    dispatch(startRequest());
    const options = {
      method: 'GET',
    };

    fetch(API_URL + '/clients/email/' + email, options)
      .then((res) => {
        if (res.status !== 200) {
          throw Error('Loading user failed');
        }
        return res.json();
      })
      .then((dataRes) => {
        dispatch(loadData([dataRes]));
        dispatch(endRequest());
      })
      .catch((e) => {
        dispatch(errorRequest({ error: e.message }));
      });
  };
};

export const addUserRequest = (newUser) => {
  //console.log('new user from userRedux: ', newUser);
  return async (dispatch) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    };
    //await new Promise((resolve) => setTimeout(resolve, 5000));
    await fetch(API_URL + '/clients', options)
      .then((res) => {
        if (res.status !== 201) {
          throw Error('Adding ad failed ');
        }
        return res.json();
      })
      .then((dataRes) => {
        dispatch(loadData(dataRes));
        dispatch(endRequest());
      })
      .catch((e) => {
        dispatch(errorRequest({ error: e.message }));
      });
  };
};

// action creators
const usersReducer = (statePart = initialState.user, action) => {
  switch (action.type) {
    case START_REQUEST:
      return {
        data: statePart.data,
        isLoading: true,
        error: null,
      };
    case LOAD_DATA:
      return {
        data: action.payload,
        isLoading: true,
        error: null,
      };
    case END_REQUEST:
      return {
        data: statePart.data,
        isLoading: false,
        error: null,
      };
    case ERROR_REQUEST:
      return {
        data: statePart.data,
        isLoading: false,
        error: action.payload.error,
      };
    case ADD_USER:
      return {
        data: [action.payload],
        pending: true,
        error: action.payload.error,
      };
    case CLEAR_USER:
      return {
        data: [],
        isLoading: false,
        error: null,
      };
    default:
      return {
        data: statePart.data,
        isLoading: false,
        error: null,
      };
  }
};

export default usersReducer;
