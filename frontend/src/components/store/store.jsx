// import {  createSlice, configureStore  } from '@reduxjs/toolkit';
// import { persistStore,persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { applyMiddleware } from 'redux';


// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {isLoggedIn: false},
//     reducers: {
//         login(state) {
//             state.isLoggedIn = true
//         },
//         logout(state) {
//             state.isLoggedIn = false
//         },
//     }
// });


// // const store = configureStore({
// //     reducer: authSlice.reducer
// // });



// const persistConfig = {
//     key:'main-root',
//     storage,
// }


// const persistingReducer =  persistReducer(persistConfig, {reducer: authSlice.reducer})

// const store = configureStore( persistingReducer ,applyMiddleware());

// const Persistor = persistStore(store);



// export{Persistor};

// export const authActions = authSlice.actions;


// export  default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.jsx";
import storage from 'redux-persist/lib/storage';
import { persistStore,persistReducer } from 'redux-persist';



const rootReducer = combineReducers({ user: userSlice });

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