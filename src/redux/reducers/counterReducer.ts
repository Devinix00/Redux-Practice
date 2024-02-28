import { DECREMENT, INCREMENT } from "../actions/counterActions";

interface IAction {
  type: "INCREMENT" | "DECREMENT";
}

const initialState: number = 0;

const counterReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export default counterReducer;
