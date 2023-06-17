import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobsReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
  jobs: jobsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
