import { combineReducers } from "redux";
import { listReducer } from "./listReducers";

const rootReducer = combineReducers({
  list: listReducer
});

export default rootReducer;