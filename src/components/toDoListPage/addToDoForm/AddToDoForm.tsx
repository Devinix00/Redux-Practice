import { ChangeEvent } from "react";
import styles from "./AddToDoForm.module.scss";
import useAddToDos from "../../../hooks/useAddToDo";

function AddToDoForm(): JSX.Element {
  const { inputValue, setInputValue, handleSubmit } = useAddToDos();

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <section>
        <input
          type="text"
          name="toDo"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
        <button type="submit">추가</button>
      </section>
    </form>
  );
}

export default AddToDoForm;
