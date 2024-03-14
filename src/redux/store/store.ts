import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import toDosSlice from "../slices/toDosSlice";
import { pokemonApi } from "../api/pokemonApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { toDosApi } from "../api/toDosApi";
import telephoneDirectorySlice from "../slices/telephoneDirectorySlice";

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [toDosApi.reducerPath]: toDosApi.reducer,
    counter: counterSlice,
    toDos: toDosSlice,
    telephoneDirectorty: telephoneDirectorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(toDosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

setupListeners(store.dispatch);
