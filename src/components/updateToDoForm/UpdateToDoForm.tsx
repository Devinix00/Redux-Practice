import { ChangeEvent, Dispatch, SetStateAction } from "react";
import useUpdateToDo from "../../hooks/useUpdateToDo";
import styles from "./UpdateToDoForm.module.scss";

interface IProps {
  toDo: IToDo;
  setShowUpdateForm: Dispatch<SetStateAction<boolean>>;
}

function UpdateToDoForm({ toDo, setShowUpdateForm }: IProps): JSX.Element {
  const { inputValue, setInputValue, handleSubmit } = useUpdateToDo({
    toDo,
    setShowUpdateForm,
  });

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
      />
      <button type="submit">제출</button>
    </form>
  );
}

export default UpdateToDoForm;
