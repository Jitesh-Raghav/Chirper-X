import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import {thunk} from 'redux-thunk';
import { authReducer } from './Auth/Reducer';

const rootReducres= combineReducers({

    auth : authReducer,
});

export  const store= legacy_createStore(rootReducres, applyMiddleware(thunk));  
            
// export const store = createStore(rootReducer, applyMiddleware(thunk));           