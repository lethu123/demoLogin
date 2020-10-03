// return api
import axios from 'axios';
import {login_API, headers, logout_API, current_user_API} from '../constants/constantApi';
import {_headers} from '../components/auths/authAction'


// note: Tên function trong này không trùng với tên function trong Action 

const signin = async (data) => {
    return await axios.post(login_API, data);
}

const getCurrentUser = (user_url) => {
    return axios.get(current_user_API + user_url + "/", {headers: _headers ? _headers : headers});
}


const logout = () => {
    return axios.post(logout_API, {}, {headers: _headers ? _headers : headers});
}

export const AuthsApi = {
    signin,
    getCurrentUser,
    logout
}