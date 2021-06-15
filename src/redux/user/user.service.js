import axios from 'axios';
import * as ApiConfiguration from "../web-api-configuration";

export const iUserService = {
    login,
    logout
};


let serviceBaseUrl = '';
if (process.env.NODE_ENV === 'development') {
    serviceBaseUrl = ApiConfiguration.localhostBaseUrl;
}
else {
    serviceBaseUrl = ApiConfiguration.serverBaseUrl;
}

function login(email, password) {
    console.log(`Login function from user.service.js file with params: email:${email}`);

    const requestOptions = {
        headers: {
            'Accept': "*/*",
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },   // mode: 'no-cors',
    };


    return axios.post(`${serviceBaseUrl}api/Account/authenticate`, JSON.stringify({ email, password }), requestOptions)
        .then(handleResponse)
        .then(response => {
            //store user detail and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(response.data));
            console.log(`user saved into local storage ${response.data.email}`)
            return response.data;
        }).catch((error) => {
            handleResponse(error.response)
        })

}

function logout() {
    //remove user from local storate to log user out
    localStorage.removeItem('user');
}


export function handleResponse(response) {
    console.log(`response from Login user.service.js file: ${JSON.stringify(response)}`);

    response = ConvertResponseToLowerCase(response);
    if (!response.data.succeeded ) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            window.location.reload(true);
        }
        const error = (response && response.data.message) || response.statusText;
        console.error(error);
        return Promise.reject(error);
    }


    return response.data;
}

function ConvertResponseToLowerCase(response) {
    var json = JSON.stringify(response);
    var newJson = json.replace(/"([\w]+)":/g, function ($0, $1) {
        return ('"' + $1.toLowerCase() + '":');
    });
    return JSON.parse(newJson);

}