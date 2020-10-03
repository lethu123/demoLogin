import * as type from '../types/types';
import isEmpty from '../../../../helpers/func-js/is-empty';
const initialState = {
    isAuthenticated: false,
    user: {}

}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case type.SET_CURRENT_USER: {
            return {
                ...state,
                isAuthenticated: !isEmpty(action.res_api),
                user: action.res_api
            }
        }
        default: return state
    }
}
export default authReducer;