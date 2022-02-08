import { combineReducers, createStore } from "redux";

import loginReducer from "./login";
import addDateReducer from "./addDate";
import listDateReducer from "./listDate";
import deleteDateReducer from "./deleteDate";
import listSellerReducer from "./listSeller";

const reducers = combineReducers({
    loginReducer,
    addDateReducer,
    listDateReducer,
    deleteDateReducer,
    listSellerReducer,
});

const store = createStore(reducers);

export default store;