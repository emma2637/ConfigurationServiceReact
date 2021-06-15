import { createStore, applyMiddleware } from 'redux';
// import {persistStore} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../redux/root-reducer';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
        // middlewares
    )
);
