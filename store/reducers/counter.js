import { ADD_COUNTER } from "../actions/counter";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_COUNTER:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default counterReducer;
