import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app/App';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export type RootState = ReturnType<typeof store.getState>;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);