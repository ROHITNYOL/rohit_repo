

import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice.jsx";
import storage from 'redux-persist/lib/storage';
import { persistStore,persistReducer } from 'redux-persist';
import userslice from "./userslice";



const rootReducer = combineReducers({ user: userslice });

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer =  persistReducer(persistConfig, rootReducer);

 const store =  configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),

  
})

export default store;

export const Persistor = persistStore(store);