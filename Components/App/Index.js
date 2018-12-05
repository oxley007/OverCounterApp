import React, {
  Component
} from 'react';

import App from './App.js';

import { Provider } from "react-redux";
import { store, persistor } from "../../Store/index";
import { PersistGate } from 'redux-persist/integration/react'




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
