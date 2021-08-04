import { combineReducers } from 'redux';
import Login from "./Login";
import CheckOfflineReducer from './CheckOfflineReducer';

export default combineReducers({
    login: Login,
    checkOfflineFeature:CheckOfflineReducer
})