import { configureStore, Store } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import authReducer from './slices/authSlice';
import menuReducer from './slices/menuSlice';

const authPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['isAuthenticated'],
};

const menuPersistConfig = {
    key: 'menu', 
    storage
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedMenuReducer = persistReducer(menuPersistConfig, menuReducer);

const store: Store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        menu: persistedMenuReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
});

const persistor = persistStore(store);

export { store, persistor };