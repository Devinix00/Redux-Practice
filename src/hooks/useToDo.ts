import { useDispatch } from "react-redux";
import { DELETE_TODO, TOGGLE_TODO } from "../redux/actions/toDosActions";
import { useState } from "react";

interface IProps {
  toDo: IToDo;
}

function useToDo({ toDo }: IProps) {
  const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);

  const dispatch = useDispatch();

  const toggleToDo = () => {
    dispatch({ type: TOGGLE_TODO, payload: toDo.id });
  };

  const deleteToDo = () => {
    dispatch({ type: DELETE_TODO, payload: toDo.id });
  };

  return { toggleToDo, deleteToDo, showUpdateForm, setShowUpdateForm };
}

export default useToDo;
