import { combineReducers, createStore } from "redux";

import loginReducer from "./login";
import addDateReducer from "./addDate";
import listDateReducer from "./listDate";
import deleteDateReducer from "./deleteDate";
import listBuyerReducer from "./listBuyer";

const reducers = combineReducers({
    loginReducer,
    addDateReducer,
    listDateReducer,
    deleteDateReducer,
    listBuyerReducer,
});

const store = createStore(reducers);

export default store;