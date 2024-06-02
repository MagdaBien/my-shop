import initialState from './initialState';

//selectors
export const getUser = (state) => state.user;

// action creators
const usersReducer = (statePart = initialState.user, action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default usersReducer;
