import { combineReducers } from "redux";
import moviesSlice from "./moviesSlice";
import userSlice from "./userSlice";
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
    // if you do not want to persist this part of the state
    blacklist: ['moviesReducer']
};

const reducer = combineReducers({
    moviesReducer: moviesSlice.reducer,
    userReducer: userSlice.reducer,
})
const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;