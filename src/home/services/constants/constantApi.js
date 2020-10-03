// define constant url api

import {PROXY} from "../../../environment";

let user_url = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token'))['user_url'] : "";
export const login_API = PROXY + "/accounts/api/login/";
export const logout_API = PROXY + "/accounts/api/logout/";
export const current_user_API = PROXY + "/user/";

let userLogin = JSON.parse(localStorage.getItem("token"));
export const headers = {
    'Content-Type': 'application/json',
    'Authorization': userLogin ? `Token ${userLogin._token}` : ''
}