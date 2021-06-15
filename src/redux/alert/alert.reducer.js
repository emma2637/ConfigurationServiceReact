import { alertConstantsTypes } from './alert.types';

export function alertReducer(state = {}, action) {
     console.log('alert reducer'+ JSON.stringify(action));
     console.log(action);
  switch (action.type) {
    case alertConstantsTypes.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstantsTypes.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstantsTypes.CLEAR:
      return {};
    default:
      return state
  }
}