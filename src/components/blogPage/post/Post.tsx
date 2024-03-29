import styles from "./Post.module.scss";

interface IProps {
  post: IPost;
}

function Post({ post }: IProps) {
  return (
    <li className={styles.link}>
      <p>{post.title}</p>
      <p>{post.name}</p>
    </li>
  );
}

export default Post;
