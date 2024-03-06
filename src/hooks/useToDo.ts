import { useDispatch } from "react-redux";
import { useState } from "react";
import { toDosActions } from "../redux/slices/toDosSlice";
import {
  useDeleteToDoMutation,
  useToggleToDoMutation,
} from "../redux/api/toDosApi";

interface IProps {
  toDo: IToDo;
  type: string;
}

function useToDo({ toDo, type }: IProps) {
  const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);
  const [toggleToDo] = useToggleToDoMutation();
  const [deleteToDo] = useDeleteToDoMutation();
  const dispatch = useDispatch();

  const handleToggleToDo = async () => {
    if (type === "withOutAjax") {
      dispatch(toDosActions.toggleToDo(toDo.id));
    } else if (type === "ajax") {
      try {
        await toggleToDo({
          ...toDo,
          completed: !toDo.completed,
        }).unwrap();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeleteToDo = async () => {
    if (type === "withOutAjax") {
      dispatch(toDosActions.deleteToDo(toDo.id));
    } else if (type === "ajax") {
      try {
        await deleteToDo(toDo.id);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return {
    handleToggleToDo,
    handleDeleteToDo,
    showUpdateForm,
    setShowUpdateForm,
  };
}

export default useToDo;
