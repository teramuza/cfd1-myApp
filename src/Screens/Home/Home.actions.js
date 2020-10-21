// @flow

import {DispatchProp} from 'react-redux';
import {DECREMENT_COUNT, INCREMENT_COUNT} from '../../Redux';

const increaseCount = () => (dispatch: DispatchProp) => {
  dispatch({
    type: INCREMENT_COUNT,
  });
};

const decreaseCount = () => (dispatch: DispatchProp) => {
  dispatch({type: DECREMENT_COUNT});
};

export {increaseCount, decreaseCount};
