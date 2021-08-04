import React from 'react';
import AppRoot from "./src";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import cfgStore, { persistor } from './src/store/configureStore';
import OfflineMessage from './src/checkOffline';

const store = cfgStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoot />
          <OfflineMessage />
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
