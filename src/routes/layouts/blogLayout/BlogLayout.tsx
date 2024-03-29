import { Outlet } from "react-router-dom";
import styles from "./BlogLayout.module.scss";

function BlogLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Outlet />
      </div>
    </div>
  );
}

export default BlogLayout;
