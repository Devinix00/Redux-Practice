import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import toDosSlice from "../slices/toDosSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    toDos: toDosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
