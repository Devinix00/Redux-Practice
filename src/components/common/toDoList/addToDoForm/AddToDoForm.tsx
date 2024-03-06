import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import styles from "./AddToDoForm.module.scss";

interface IProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent) => void;
}

function AddToDoForm({
  inputValue,
  setInputValue,
  handleSubmit,
}: IProps): JSX.Element {
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
