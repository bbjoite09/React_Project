import {createStore, combineReducers} from "redux";
import quiz from "./quiz"
import rank from "./rank"

import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

const rootReducer = combineReducers({quiz, rank});
const store = createStore(rootReducer);

export default store;