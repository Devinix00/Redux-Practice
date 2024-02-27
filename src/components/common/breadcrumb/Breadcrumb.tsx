import styles from "./Breadcrumb.module.scss";
import { Breadcrumbs, Link } from "@mui/material";

function Breadcrumb(): JSX.Element {
  return (
    <div className={styles.container}>
      <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbs}>
        <Link underline="hover" color="inherit" href="/">
          Count
        </Link>
        <Link underline="hover" color="inherit" href="/to-do-list">
          To Do List
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
