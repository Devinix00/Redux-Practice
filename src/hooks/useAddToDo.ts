import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../redux/actions/toDosActions";

function useAddToDos() {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (!inputValue) return;

    dispatch({ type: ADD_TODO, payload: inputValue });
    setInputValue("");
  };

  return { inputValue, setInputValue, handleSubmit };
}

export default useAddToDos;
