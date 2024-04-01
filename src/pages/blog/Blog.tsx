import { Link } from "react-router-dom";
import Post from "../../components/blogPage/post/Post";
import { useGetPostsQuery } from "../../redux/api/postsApi";
import styles from "./Blog.module.scss";

function Blog() {
  const { data: posts } = useGetPostsQuery();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Blog</h2>
        <Link to="/blog/add-post" className={styles.link}>
          글 작성
        </Link>
      </header>

      <ul className={styles.posts}>
        {posts?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}

export default Blog;
