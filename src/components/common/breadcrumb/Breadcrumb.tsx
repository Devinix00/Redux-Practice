import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";
import { Breadcrumbs } from "@mui/material";

function Breadcrumb(): JSX.Element {
  const location = useLocation();

  const getLinkClass = (path: string): string => {
    return location.pathname === path
      ? `${styles.link} ${styles.active}`
      : styles.link;
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbs}>
        <Link to="/" className={getLinkClass("/")}>
          Count
        </Link>
        <Link to="/to-do-list" className={getLinkClass("/to-do-list")}>
          To Do List
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
