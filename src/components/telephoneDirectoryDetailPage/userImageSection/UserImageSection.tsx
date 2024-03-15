import { useNavigate } from "react-router-dom";
import useDeleteContract from "../../../hooks/useDeleteContract";
import styles from "./UserImageSection.module.scss";
import React from "react";
import { IContract } from "../../../redux/slices/telephoneDirectorySlice";
import useUploadImage from "../../../hooks/useUploadImage";

interface IProps {
  userData: IContract | undefined;
}

function UserImageSection({ userData }: IProps) {
  const deleteContract = useDeleteContract();
  const navigate = useNavigate();
  const {
    imageInputRef,
    previewUrl,
    handleClickImageUploader,
    handleFileChange,
    handleDeleteImage,
  } = useUploadImage();

  const src = previewUrl
    ? `${previewUrl}`
    : "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg";

  return (
    <React.Fragment>
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

      <img src={src} alt={userData?.name} className={styles.user_image} />
      <input
        ref={imageInputRef}
        onChange={handleFileChange}
        type="file"
        className={styles.file_input}
      />
      <section className={styles.button_section}>
        <button
          onClick={handleClickImageUploader}
          className={styles.upload_image_button}
        >
          이미지 수정
        </button>
        <button
          onClick={handleDeleteImage}
          className={styles.delete_image_button}
        >
          이미지 삭제
        </button>
      </section>
    </React.Fragment>
  );
}

export default UserImageSection;
