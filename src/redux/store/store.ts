import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import counterSlice from "../slices/counterSlice";
import toDosSlice from "../slices/toDosSlice";
import telephoneDirectorySlice from "../slices/telephoneDirectorySlice";
import { pokemonApi } from "../api/pokemonApi";
import { toDosApi } from "../api/toDosApi";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  counter: counterSlice,
  toDos: toDosSlice,
  telephoneDirectory: telephoneDirectorySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [toDosApi.reducerPath]: toDosApi.reducer,
    counter: counterSlice,
    toDos: persistedReducer,
    telephoneDirectory: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(pokemonApi.middleware)
      .concat(toDosApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
