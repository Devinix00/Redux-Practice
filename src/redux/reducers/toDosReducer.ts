import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "../actions/toDosActions";

type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "UPDATE_TODO"; payload: { id: number; newText: string } };

const initialState: IToDo[] = [];

const toDosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];

    case TOGGLE_TODO:
      return state.map((toDo) => {
        return toDo.id === action.payload
          ? { ...toDo, completed: !toDo.completed }
          : toDo;
      });

    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.payload);

    case UPDATE_TODO:
      return state.map((toDo) => {
        return toDo.id === action.payload.id
          ? { ...toDo, text: action.payload.newText }
          : toDo;
      });

    default:
      return state;
  }
};

export default toDosReducer;
