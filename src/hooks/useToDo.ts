import { useDispatch } from "react-redux";
import { useState } from "react";
import { toDosActions } from "../redux/slices/toDosSlice";

interface IProps {
  toDo: IToDo;
}

function useToDo({ toDo }: IProps) {
  const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);
  const dispatch = useDispatch();

  const toggleToDo = () => {
    dispatch(toDosActions.toggleToDo(toDo.id));
  };

  const deleteToDo = () => {
    dispatch(toDosActions.deleteToDo(toDo.id));
  };

  return {
    toggleToDo,
    deleteToDo,
    showUpdateForm,
    setShowUpdateForm,
  };
}

export default useToDo;
