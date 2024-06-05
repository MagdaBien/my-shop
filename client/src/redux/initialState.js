const initialState = {
  user: {
    data: [],
    isLoading: true,
    error: false,
  },
  product: {
    data: [],
    isLoading: true,
    error: false,
  },
  order: {
    data: JSON.parse(localStorage.getItem('basket')),
    isLoading: true,
    error: false,
  },
};

export default initialState;
