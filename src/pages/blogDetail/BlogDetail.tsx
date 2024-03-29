import { useParams } from "react-router-dom";
import styles from "./BlogDetail.module.scss";
import { useGetIndividualPostQuery } from "../../redux/api/postsApi";

function BlogDetail() {
  const { id } = useParams();
  const { data: post } = useGetIndividualPostQuery(id);

  return (
    <div className={styles.container}>
      <section className={styles.title_container}>
        <h2 className={styles.title}>{post?.title}</h2>
        <p className={styles.name}>{post?.name}</p>
      </section>
      <p className={styles.content}>{post?.content}</p>
    </div>
  );
}

export default BlogDetail;
