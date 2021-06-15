import { alertConstantsTypes } from "./alert.types";

export const iAlertActions={
    success,
    error,
    clear
};

function success(message){
    return {type:alertConstantsTypes.SUCCESS, message}
}
function  error(message){
    return {type:alertConstantsTypes.ERROR, message}
}
function clear(){
    return {type:alertConstantsTypes.CLEAR}
}