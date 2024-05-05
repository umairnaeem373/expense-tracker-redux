import { combineReducers } from "redux";
import { createStore } from "redux";
import { expenseTracker } from "./Reducers/Reducers";

const allReducers=combineReducers({
    expenseTracker
})

const store=createStore(allReducers)

export default store