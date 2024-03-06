import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { toDosActions } from "../redux/slices/toDosSlice";
import { useAddToDoMutation } from "../redux/api/toDosApi";

function useAddToDos(type: string) {
  const [inputValue, setInputValue] = useState<string>("");
  const [addToDo] = useAddToDoMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (!inputValue) return;

    if (type === "withOutAjax") {
      dispatch(toDosActions.addToDo(inputValue));
    } else if (type === "ajax") {
      try {
        await addToDo(inputValue).unwrap();
      } catch (error) {
        console.error(error);
      }
    }

    setInputValue("");
  };

  return { inputValue, setInputValue, handleSubmit };
}

export default useAddToDos;
