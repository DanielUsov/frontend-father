import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './services/auth';
import { roleApi } from './services/role';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [roleApi.reducerPath]: roleApi.reducer,
});

const apiMiddleware = [authApi.middleware, roleApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});

setupListeners(store.dispatch);
