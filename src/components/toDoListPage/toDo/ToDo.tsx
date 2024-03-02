import useToDo from "../../../hooks/useToDo";
import UpdateToDoForm from "../updateToDoForm/UpdateToDoForm";
import styles from "./ToDo.module.scss";

interface IProps {
  toDo: IToDo;
}

function ToDo({ toDo }: IProps): JSX.Element {
  const { toggleToDo, deleteToDo, setShowUpdateForm, showUpdateForm } = useToDo(
    { toDo }
  );

  return (
    <li className={styles.toDo}>
      {showUpdateForm ? (
        <UpdateToDoForm toDo={toDo} setShowUpdateForm={setShowUpdateForm} />
      ) : (
        <p className={styles.to_do_text}>{toDo.text}</p>
      )}

      <section className={styles.button_section}>
        <p className={styles.completed}>{toDo.completed ? "했음" : "안했음"}</p>
        <input type="checkbox" checked={toDo.completed} onChange={toggleToDo} />
        <button
          onClick={() => {
            setShowUpdateForm(!showUpdateForm);
          }}
        >
          {showUpdateForm ? "취소" : "수정"}
        </button>
        <button onClick={deleteToDo}>삭제</button>
      </section>
    </li>
  );
}

export default ToDo;
