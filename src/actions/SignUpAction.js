import * as ActionTypes from '../constants/ActionTypes';
import { BaseUrl } from '../constants/api';
import {Alert} from 'react-native';
// export function signUp(data) {
//     return {
//         type: ActionTypes.LOGIN,
//         data
//     }
// };

export function signUp(data) {
    console.log("datadatda", data);
    return (dispatch) => {
        fetch( `https://app.bookbtb.com/api/v1/Auth/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then(res => {
                console.log(res)
                if (res.success === true || res.success === "true") {
                    dispatch({type: 'SHOW_SIGNUP_RESPONSE', payload: res});
                    

                } else {
                    Alert.alert(res.message);
                    
                }
            })
            .catch((e) => {
                //  console.warn(e);
            });
    }
};

