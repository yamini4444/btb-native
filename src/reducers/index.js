import { combineReducers } from 'redux';
import Login from "./Login";
import CheckOfflineReducer from './CheckOfflineReducer';
import SignUpReducer from './SignUpReducer';

export default combineReducers({
    login: Login,
    checkOfflineFeature:CheckOfflineReducer,
    signUpReduscer:SignUpReducer
})