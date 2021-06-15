import { userTypesConstants } from './user.types';

//get item from localStorage
let user = JSON.parse(localStorage.getItem('user'));

const INITIAL_STATE = user ? { loggedIn: true, user } : {};

 export function userReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case userTypesConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userTypesConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userTypesConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
      };
    case userTypesConstants.LOGOUT:
      return {};
    default:
      return state
    }
}

