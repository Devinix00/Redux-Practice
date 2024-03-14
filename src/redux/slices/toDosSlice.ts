import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadToDosFromLocalStorage = (): IToDo[] => {
  const toDos = localStorage.getItem("toDos");
  if (toDos) {
    return JSON.parse(toDos);
  }
  return [];
};

const initialState: IToDo[] = loadToDosFromLocalStorage();

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
      localStorage.setItem("toDos", JSON.stringify(state));
    },

    toggleToDo: (state, action: PayloadAction<number>) => {
      const toDo = state.find((toDo) => toDo.id === action.payload);
      if (toDo) {
        toDo.completed = !toDo.completed;
        localStorage.setItem("toDos", JSON.stringify(state));
      }
    },

    deleteToDo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((toDo) => toDo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("toDos", JSON.stringify(state));
      }
    },

    updateToDo: (
      state,
      action: PayloadAction<{ id: number; newText: string }>
    ) => {
      const toDo = state.find((toDo) => toDo.id === action.payload.id);
      if (toDo) {
        toDo.text = action.payload.newText;
        localStorage.setItem("toDos", JSON.stringify(state));
      }
    },
  },
});

export const toDosActions = toDosSlice.actions;

export default toDosSlice.reducer;
