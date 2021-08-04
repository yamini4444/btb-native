import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    isLogged: false,
    hasError: false,
    isLoading: false,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.LOGIN:
            return action.data;
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, {
                isLogged: false,
            });
        default:
            return state
    }
}
