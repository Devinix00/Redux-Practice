import { useNavigate } from "react-router-dom";
import styles from "./Post.module.scss";
import { useDeletePostMutation } from "../../../redux/api/postsApi";

interface IProps {
  post: IPost;
}

function Post({ post }: IProps) {
  const navigate = useNavigate();
  const [deletePost] = useDeletePostMutation();

  return (
    <li
      onClick={() => {
        navigate(post.id);
      }}
      className={styles.link}
    >
      <p>{post.title}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deletePost(post.id);
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default Post;
