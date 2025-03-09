import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookSlice from "./Slices/bookSlice.js";

const rootReducer = combineReducers({
  books: bookSlice,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
