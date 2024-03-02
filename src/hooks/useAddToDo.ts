import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { toDosActions } from "../redux/slices/toDosSlice";

function useAddToDos() {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (!inputValue) return;

    dispatch(toDosActions.addToDo(inputValue));
    setInputValue("");
  };

  return { inputValue, setInputValue, handleSubmit };
}

export default useAddToDos;
