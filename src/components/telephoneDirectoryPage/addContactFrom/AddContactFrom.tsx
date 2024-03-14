import useAddContract from "../../../hooks/useAddContract";
import styles from "./AddContactFrom.module.scss";

function AddContactFrom() {
  const { inputValue, onChange, handleSubmit } = useAddContract();

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <section className={styles.input_section}>
        <input
          type="text"
          placeholder="이름을 입력해주세요."
          name="name"
          value={inputValue.name}
          onChange={(e) => onChange(e, "text")}
        />
        <input
          type="text"
          placeholder="전화번호를 입력해주세요."
          name="number"
          maxLength={11}
          value={inputValue.number}
          onChange={(e) => onChange(e, "number")}
        />
      </section>
      <button>입력</button>
    </form>
  );
}

export default AddContactFrom;
