import thunk from "redux-thunk";

const rootReducres= combineReducers({

});

export const store= legacy_createStore(rootReducres, applyMiddleware(thunk));