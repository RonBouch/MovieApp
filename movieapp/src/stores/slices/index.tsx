import { combineReducers } from "redux";
import moviesSlice from "./moviesSlice";
import userSlice from "./userSlice";

export default combineReducers({
    moviesReducer: moviesSlice.reducer,
    userReducer: userSlice.reducer,
})