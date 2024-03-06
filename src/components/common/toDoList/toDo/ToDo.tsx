import useToDo from "../../../../hooks/useToDo";
import UpdateToDoForm from "../updateToDoForm/UpdateToDoForm";
import styles from "./ToDo.module.scss";

interface IProps {
  toDo: IToDo;
  type: string;
}

function ToDo({ toDo, type }: IProps): JSX.Element {
  const {
    handleToggleToDo,
    handleDeleteToDo,
    setShowUpdateForm,
    showUpdateForm,
  } = useToDo({ toDo, type });

  return (
    <li className={styles.toDo}>
      {showUpdateForm ? (
        <UpdateToDoForm
          toDo={toDo}
          setShowUpdateForm={setShowUpdateForm}
          type={type}
        />
      ) : (
        <p className={styles.to_do_text}>{toDo.text}</p>
      )}

      <section className={styles.button_section}>
        <p className={styles.completed}>{toDo.completed ? "했음" : "안했음"}</p>
        <input
          type="checkbox"
          checked={toDo.completed}
          onChange={handleToggleToDo}
        />
        <button
          onClick={() => {
            setShowUpdateForm(!showUpdateForm);
          }}
        >
          {showUpdateForm ? "취소" : "수정"}
        </button>
        <button onClick={handleDeleteToDo}>삭제</button>
      </section>
    </li>
  );
}

export default ToDo;
