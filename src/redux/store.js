import { contactsSlice } from './Contacts/contactSlice';
import { filterSlise } from './filterSlise';
import { authSlice } from './Auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlise.reducer,
        auth: persistReducer(authPersistConfig, authSlice.reducer),
    },
    middleware,
});

export const persistor = persistStore(store);