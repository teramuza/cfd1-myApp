import {DECREMENT_COUNT, INCREMENT_COUNT} from '../../Redux';

const initialState = {
  loading: false,
  error: false,
  count: 0,
};

export const homeStore = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: action.payload + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return {...state};
  }
};
