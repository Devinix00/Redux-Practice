import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const initialState: IToDo[] = [];

export const toDosSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },

    toggleToDo: (state, action: PayloadAction<number>) => {
      const toDo = state.find((toDo) => toDo.id === action.payload);
      if (toDo) {
        toDo.completed = !toDo.completed;
      }
    },

    deleteToDo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((toDo) => toDo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    updateToDo: (
      state,
      action: PayloadAction<{ id: number; newText: string }>
    ) => {
      const toDo = state.find((toDo) => toDo.id === action.payload.id);
      if (toDo) {
        toDo.text = action.payload.newText;
      }
    },
  },
});

export const selectTodos = createSelector(
  (state: RootState) => state.toDos,
  (data) => data.toDos
);

export const toDosActions = toDosSlice.actions;

export default toDosSlice.reducer;
