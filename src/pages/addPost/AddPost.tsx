import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./AddPost.module.scss";
import { useAddPostMutation } from "../../redux/api/postsApi";
import { useNavigate } from "react-router-dom";

type Inputs = {
  title: string;
  content: string;
};

function AddPost() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [addPost] = useAddPostMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await addPost(data).unwrap();
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>글 작성 페이지</h2>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>글의 제목을 입력해주세요.</label>
        <input {...register("title", { required: true })} type="text" />
        <label>글의 내용을 입력해주세요.</label>
        <textarea {...register("content", { required: true })} />
        <button type="submit">글 작성</button>
      </form>
    </div>
  );
}

export default AddPost;
