import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addContract } from "../redux/slices/telephoneDirectorySlice";
import validateNumberInput from "../utils/validateNumberInput";

function useAddContract() {
  const [inputValue, setInputValue] = useState({
    name: "",
    number: "",
  });

  const dispatch = useDispatch();

  const onChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "text" | "number"
  ) => {
    const { name, value } = e.target;

    if (type === "number") {
      if (validateNumberInput(value)) {
        setInputValue((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    } else {
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, number } = inputValue;

    if (!name || !number) return alert("모든 필드를 입력해주세요!");

    dispatch(addContract({ name, number }));

    setInputValue({
      name: "",
      number: "",
    });
  };

  return { inputValue, onChange, handleSubmit };
}

export default useAddContract;
