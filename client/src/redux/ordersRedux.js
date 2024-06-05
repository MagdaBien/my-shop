import initialState from './initialState';
import { API_URL } from '../config';

//selectors
export const getAllOrders = (state) => state.order.data;
export const getOrderById = (state, id) =>
  state.order.data.find((order) => order.id === id);
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
const createActionName = (actionName) => `app/orders/${actionName}`;
const START_REQUEST = createActionName('START_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const LOAD_DATA = createActionName('LOAD_DATA');
const END_REQUEST = createActionName('END_REQUEST');
const UPDATE_ORDERS = createActionName('UPDATE_ORDER');
const EDIT_ORDER = createActionName('EDIT_ORDER');
const REMOVE_ORDER = createActionName('REMOVE_ORDER');
const CLEAR_ORDER = createActionName('CLEAR_ORDER');

// action creators
export const startRequest = () => ({ type: START_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const loadData = (payload) => ({ payload, type: LOAD_DATA });
export const endRequest = () => ({ type: END_REQUEST });
export const updateOrders = (payload) => ({ type: UPDATE_ORDERS, payload });
export const editOrder = (payload) => ({ type: EDIT_ORDER, payload });
export const removeOrder = (payload) => ({ type: REMOVE_ORDER, payload });
export const clearOrder = (payload) => ({ type: CLEAR_ORDER, payload });

// save basket (one item "basket") in localstorage and redux store
export const updateLocalOrders = (basket) => {
  return (dispatch) => {
    localStorage.setItem('basket', JSON.stringify(basket));
    dispatch(updateOrders(basket));
  };
};

export const editLocalOrder = (basket) => {
  return (dispatch) => {
    const orders = JSON.parse(localStorage.getItem('basket'));
    const newBasket = orders.map((order) =>
      order.productId === basket.productId ? { ...order, ...basket } : order,
    );
    localStorage.setItem('basket', JSON.stringify(newBasket));
    dispatch(updateOrders(newBasket));
  };
};

export const removeLocalOrder = (id) => {
  return (dispatch) => {
    const orders = JSON.parse(localStorage.getItem('basket'));
    const newBasket = orders.filter((order) => order.productId !== id);
    localStorage.setItem('basket', JSON.stringify(newBasket));
    dispatch(updateOrders(newBasket));
  };
};

// saving to DB
export const addOrderRecord = (order) => {
  return (dispatch) => {
    console.log('hello froma Redux  addOrderRecord ', order);
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    };
    fetch(API_URL + '/orders', options)
      .then((res) => {
        if (res.status !== 201) {
          throw Error('Adding order failed ');
        }
      })
      .catch((e) => {
        dispatch(errorRequest({ error: e.message }));
      });
  };
};

// action creators
const ordersReducer = (statePart = initialState, action) => {
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
    case UPDATE_ORDERS:
      return {
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case EDIT_ORDER:
      return {
        data: statePart.data.map((order) =>
          order.productId === action.payload.productId
            ? { ...order, ...action.payload }
            : order,
        ),
        isLoading: false,
        error: null,
      };
    case REMOVE_ORDER:
      return {
        data: statePart.data.filter(
          (order) => order.productId !== action.payload,
        ),
        isLoading: false,
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
    case CLEAR_ORDER:
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

export default ordersReducer;
