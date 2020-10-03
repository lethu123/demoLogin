import {combineReducers} from 'redux';
import authReducer from './auths/authReducer';

const rootReducer = combineReducers({
    authReducer
})
export default rootReducer;