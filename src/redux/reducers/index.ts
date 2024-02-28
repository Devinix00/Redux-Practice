import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import toDosReducer from "./toDosReducer";

const rootReducer = combineReducers({
  counterReducer,
  toDosReducer,
});

export default rootReducer;
