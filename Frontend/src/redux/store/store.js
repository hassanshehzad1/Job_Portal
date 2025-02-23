// Configure store

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice.js";
import jobsSlice from "../slices/jobsSlice.js";
import companySlice from "../slices/companySlice.js";
import applicantsSlice from "../slices/applicantsSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice,
  job: jobsSlice,
  company: companySlice,
  applications: applicantsSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;
