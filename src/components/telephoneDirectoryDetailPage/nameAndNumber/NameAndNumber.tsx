import styles from "./NameAndNumber.module.scss";
import useUpdateContractNameAndNumber from "../../../hooks/useUpdateContractNameAndNumber";

interface IProps {
  content: string | undefined;
  type: "name" | "number";
  id: number | undefined;
}

function NameAndNumber({ content, type, id }: IProps) {
  const { isEditing, setIsEditing, inputValue, onChange, handleSubmit } =
    useUpdateContractNameAndNumber();

  return (
    <div className={styles.container}>
      {isEditing ? (
        <form onSubmit={(e) => handleSubmit(e, type, id)}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              onChange(e, type);
            }}
            placeholder={content}
          />
          <button type="submit">수정</button>
        </form>
      ) : (
        <p onClick={() => setIsEditing(true)} className={styles.user_text}>
          {content}
        </p>
      )}
    </div>
  );
}

export default NameAndNumber;
