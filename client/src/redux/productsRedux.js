import initialState from './initialState';
import { API_URL } from '../config';

//selectors
export const getAllProducts = (state) => state.product.data;
export const getProductById = (state, id) =>
  state.product.data.find((product) => product.id === id);
export const isLoadingData = (state) => state.product.isLoading;
export const isErrorData = (state) => state.product.error;
export const isDataReady = (state) => {
  if (state.product.isLoading !== false || state.product.error !== null) {
    return false;
  } else {
    return true;
  }
};

// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const START_REQUEST = createActionName('START_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const LOAD_DATA = createActionName('LOAD_DATA');
const END_REQUEST = createActionName('END_REQUEST');

// action creators
export const startRequest = () => ({ type: START_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const loadData = (payload) => ({ payload, type: LOAD_DATA });
export const endRequest = () => ({ type: END_REQUEST });

export const loadProductsRequest = () => {
  return (dispatch) => {
    dispatch(startRequest());
    const options = {
      method: 'GET',
    };

    fetch(API_URL + '/products/extended', options)
      .then((res) => {
        if (res.status !== 200) {
          throw Error('Loading products failed1 ' + res.error.message);
        }
        return res.json();
      })
      .then((dataRes) => {
        dispatch(loadData([...dataRes]));
        dispatch(endRequest());
      })
      .catch((e) => {
        dispatch(errorRequest({ error: e.message }));
      });
  };
};

export const getAllFoundProducts = (searchPhrase) => {
  return (dispatch) => {
    dispatch(startRequest());
    const options = {
      method: 'GET',
    };

    fetch(API_URL + '/products/search/' + searchPhrase, options)
      .then((res) => {
        if (res.status !== 200) {
          throw Error('Products not found ');
        }
        return res.json();
      })
      .then((dataRes) => {
        dispatch(loadData([...dataRes]));
        dispatch(endRequest());
      })
      .catch((e) => {
        dispatch(errorRequest({ error: e.message }));
      });
  };
};

export const loadProductRequest = (id) => {
  return (dispatch) => {
    dispatch(startRequest());
    const options = {
      method: 'GET',
    };

    fetch(API_URL + '/products/extended/' + id, options)
      .then((res) => {
        if (res.status !== 200) {
          throw Error('Loading product failed');
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

// action creators
const productsReducer = (statePart = initialState.product, action) => {
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
    default:
      return {
        data: statePart.data,
        isLoading: false,
        error: null,
      };
  }
};

export default productsReducer;
