import { combineReducers } from "redux";
import tradesReducer from "../trades";
import lpReducer from "../lp";
export default combineReducers({
  trades: tradesReducer,
  lp: lpReducer
});
