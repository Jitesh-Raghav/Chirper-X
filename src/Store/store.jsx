import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import {thunk} from 'redux-thunk';
import { authReducer } from './Auth/Reducer';
import { tweetReducer } from './Tweet/Reducer';

const rootReducres= combineReducers({

    auth : authReducer,
    tweet: tweetReducer,
});

export  const store= legacy_createStore(rootReducres, applyMiddleware(thunk));  
            
// export const store = createStore(rootReducer, applyMiddleware(thunk));           