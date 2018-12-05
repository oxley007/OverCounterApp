// src/js/store/index.js
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "../Reducers/rootReducer";

import { AsyncStorage } from "react-native";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
//import createSecureStore from "redux-persist-expo-securestore";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

//const initialState = {};
const middleware = [thunk];

//const storage = createSecureStore();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

console.log(persistConfig);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer, composeEnhancers(applyMiddleware(...middleware))
);

console.log(store);


export const persistor = persistStore(store);
