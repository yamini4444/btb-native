import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
    checkOfflineFeature: null,
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case ActionTypes.CHECK_OFFLINE:
      return action.data;
    default:
      return state;
  }
};