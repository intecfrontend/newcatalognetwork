
import { combineReducers } from "redux";
import general from "./GeneralReducer";
import account from "./AccountReducer";

export default combineReducers({ general, account });
