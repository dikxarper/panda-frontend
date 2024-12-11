import { configureStore, Store } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import authReducer from './slices/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store: Store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});

const persistor = persistStore(store);

export { store, persistor };