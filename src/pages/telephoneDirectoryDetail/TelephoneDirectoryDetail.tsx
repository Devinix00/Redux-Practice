import styles from "./TelephoneDirectoryDetail.module.scss";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import useDeleteContract from "../../hooks/useDeleteContract";
import { selectContracts } from "../../redux/slices/telephoneDirectorySlice";

function TelephoneDirectoryDetail() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const contracts = useSelector(selectContracts);
  const deleteContract = useDeleteContract();
  const userData = contracts?.find((contract) => contract.id.toString() === id);

  return (
    <div className={styles.container}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
        alt="delete-icon"
        className={styles.delete_icon}
        onClick={() => {
          if (!userData) return;
          deleteContract(userData.id);
          navigate("/telephone-directory");
        }}
      />
      <img
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        alt={userData?.name}
        className={styles.user_image}
      />
      <input ref={inputRef} type="file" className={styles.file_input} />
      <section className={styles.button_section}>
        <button
          onClick={() => {
            inputRef.current?.click();
          }}
          className={styles.upload_image_button}
        >
          이미지 수정
        </button>
        <button className={styles.delete_image_button}>이미지 삭제</button>
      </section>

      <p className={styles.user_name}>{userData?.name}</p>
      <p className={styles.user_number}>{userData?.number}</p>
    </div>
  );
}

export default TelephoneDirectoryDetail;
