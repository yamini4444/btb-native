import * as ActionTypes from '../constants/ActionTypes';

export function checkOfflineRes(data) {
    return {
        type: ActionTypes.CHECK_OFFLINE,
        data
    }
};