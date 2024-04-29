import { combineReducers, configureStore } from '@reduxjs/toolkit';
import catalogSlice from './catalog/catalog-slice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
   catalog: catalogSlice,
});

const persistConfig = {
   key: 'casul-store',
   storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
   return configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== 'production',
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            serializableCheck: false,
         }),
   });
};

export const store = makeStore();
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
