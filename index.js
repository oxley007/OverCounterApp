/** @format */

import {AppRegistry} from 'react-native';
//import App from './App0';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import { Provider } from "react-redux";
import { store, persistor } from "./Store/index";
import { PersistGate } from 'redux-persist/integration/react'

import App from './Components/App/App.js';

class OverCounterApp extends Component {

render() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <App />
      </PersistGate>
    </Provider>
          );
        }
      }

AppRegistry.registerComponent('OverCounterApp', () => OverCounterApp);
//AppRegistry.registerComponent('ReactReduxApp', () => ReactReduxApp);

//export default Index;

/**
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app/App';
import counter from './app/reducers'
const store = createStore(counter);

export default class ReactReduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
       <App/>
     </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactReduxApp', () => ReactReduxApp);
**/

/**

import App from './Components/App/App.js';






class Index extends Component {

render() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <App />
      </PersistGate>
    </Provider>
          );
        }
      }

export default Index;

*/
