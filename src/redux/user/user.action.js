import { history } from "../../helpers/history";
import { iAlertActions } from "../alert/alert.actions";
import { iUserService } from "./user.service";
import { userTypesConstants } from "./user.types";


export const iUserActions = {
    login,
    logout
}

function login(email, password) {
    return dispatch => {
        console.log("before dispatching request")
        dispatch(request({ email }));

        //handle login action
        iUserService.login(email, password).then(
            user => {
                //handle when user is succeed
                dispatch(success(user));
                //redirect to main page
                history.push('/')

            },
            error => {
                dispatch(failure(error));
                //dispatch error
                dispatch(iAlertActions.error(error.toString()));
            }
        )
    };

    function request(user) { return { type: userTypesConstants.LOGIN_REQUEST,  user } }
    function success(user) { return { type: userTypesConstants.LOGIN_SUCCESS,  user } }
    function failure(error) { return { type: userTypesConstants.LOGIN_FAILURE,  error } }
}

function logout() {
    iUserService.logout();
    return { type: userTypesConstants.LOGOUT };
}