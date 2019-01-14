import { combineReducers } from "redux";
import tradesReducer from "../trades";

export default combineReducers({
  trades: tradesReducer
});
