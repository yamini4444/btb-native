import * as ActionTypes from '../constants/ActionTypes';
import { BaseUrl } from '../constants/api';
import {Alert, AsyncStorage} from 'react-native';
export function loginRes(data) {
    return {
        type: ActionTypes.LOGIN,
        data
    }
};

export function loginAPI(data) {
    return (dispatch) => {
        fetch(BaseUrl + `/login`, {
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
                    dispatch(loginRes(res));
                    AsyncStorage.setItem('email',res.data.userName);

                } else {
                    Alert.alert(res.message);
                    dispatch(loginRes(res));
                }
            })
            .catch((e) => {
                //  console.warn(e);
            });
    }
};

