import { combineReducers, createStore } from "redux";

import loginReducer from "./login";
import addDateReducer from "./addDate";
import listDateReducer from "./listDate";
import deleteDateReducer from "./deleteDate";
import listBuyerReducer from "./listBuyer";
import searchReducer from "./search";

const reducers = combineReducers({
    loginReducer,
    addDateReducer,
    listDateReducer,
    deleteDateReducer,
    listBuyerReducer,
    searchReducer
});

const store = createStore(reducers);

export default store;