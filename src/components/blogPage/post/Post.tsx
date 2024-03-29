import { useNavigate } from "react-router-dom";
import styles from "./Post.module.scss";

interface IProps {
  post: IPost;
}

function Post({ post }: IProps) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(post.id);
      }}
      className={styles.link}
    >
      <p>{post.title}</p>
      <p>{post.name}</p>
    </li>
  );
}

export default Post;
