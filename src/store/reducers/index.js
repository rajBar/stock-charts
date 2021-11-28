import { combineReducers } from "redux";
import stocks from "./stocks";
import dates from "./dates";

export const rootReducer = combineReducers({
    stocks,
    dates,
})
