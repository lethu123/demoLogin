// call res api return
import {toast} from 'react-toastify';
import {AuthsApi} from '../../https/auths';
import * as type from '../types/types';

// authorization 
export let _headers = ''
//export let is_auth = null
export let is_auth = window.localStorage.getItem("isAuthenticated") === 'true'
// TODO: sửa lạo biến toàn cục is_auth


// login
export const login = (data, history, remember) => dispatch => {
    AuthsApi.signin(data).then(res => {
        res.data.isRemember = remember;
        global.localStorage.setItem("token", JSON.stringify(res.data));
        _headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${res.data._token}`
        };
        is_auth = true;
        dispatch(setCurrentUser(res.data.user_url));
        history.push('/');

    }).catch(error => {
        console.log('ERROR_LOGIN', error);
        if (error.response && error.response.status === 401) {
            toast.error("Your accout is not actived. Please checkout our email!", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            toast.error("Please check your email or password again!", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    })
}

// setCurrentUser

export const setCurrentUser = (user_url) => dispatch => {
    AuthsApi.getCurrentUser(user_url).then(res => {
        is_auth = true;
        dispatch({
            type: type.SET_CURRENT_USER,
            res_api: res.data
        });
        window.localStorage.setItem('isAuthenticated', 'true');
    }).catch(error => {
        console.log(error.response);
        clearLocalStorage();
    })
}

// logout
export const log_out = () => {
    AuthsApi.logout().then(res => {
        if (res) {
            clearLocalStorage();
        }
    }).catch(() => clearLocalStorage());
}

const clearLocalStorage = () => {
    window.localStorage.clear();
    window.location.href = '/login';
}