import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { toDosActions } from "../redux/slices/toDosSlice";
import { useUpdateToDoMutation } from "../redux/api/toDosApi";

interface IProps {
  toDo: IToDo;
  setShowUpdateForm: Dispatch<SetStateAction<boolean>>;
  type: string;
}

function useUpdateToDo({ toDo, setShowUpdateForm, type }: IProps) {
  const [inputValue, setInputValue] = useState(toDo.text);
  const [updateToDo] = useUpdateToDoMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!inputValue) return;

    if (type === "withOutAjax") {
      dispatch(
        toDosActions.updateToDo({
          id: toDo.id,
          newText: inputValue,
        })
      );
    } else if (type === "ajax") {
      try {
        await updateToDo({
          ...toDo,
          text: inputValue,
        }).unwrap();
      } catch (error) {
        console.error(error);
      }
    }

    setShowUpdateForm(false);
  };

  return { inputValue, setInputValue, handleSubmit };
}

export default useUpdateToDo;
