import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { toDosActions } from "../redux/slices/toDosSlice";

interface IProps {
  toDo: IToDo;
  setShowUpdateForm: Dispatch<SetStateAction<boolean>>;
}

function useUpdateToDo({ toDo, setShowUpdateForm }: IProps) {
  const [inputValue, setInputValue] = useState(toDo.text);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!inputValue) return;

    dispatch(
      toDosActions.updateToDo({
        id: toDo.id,
        newText: inputValue,
      })
    );

    setShowUpdateForm(false);
  };

  return { inputValue, setInputValue, handleSubmit };
}

export default useUpdateToDo;
