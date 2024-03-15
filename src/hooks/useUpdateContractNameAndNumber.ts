import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { updateContract } from "../redux/slices/telephoneDirectorySlice";
import validateNumberInput from "../utils/validateNumberInput";

function useUpdateContractNameAndNumber() {
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const onChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "name" | "number"
  ) => {
    const { value } = e.target;

    if (type === "name") {
      setInputValue(value);
    } else if (type === "number")
      if (validateNumberInput(value)) {
        setInputValue(value);
      }
  };

  const handleSubmit = (
    e: FormEvent,
    type: "name" | "number",
    id: number | undefined
  ) => {
    e.preventDefault();

    dispatch(
      updateContract({
        id: id,
        type: type,
        content: inputValue,
      })
    );

    setIsEditing(false);
  };

  return {
    isEditing,
    setIsEditing,
    onChange,
    inputValue,
    handleSubmit,
  };
}
export default useUpdateContractNameAndNumber;
