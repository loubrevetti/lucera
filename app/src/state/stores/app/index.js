import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../../reducers/root";

const initialState = {};
const middleware = [thunk];
const AppStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);
export default AppStore;
