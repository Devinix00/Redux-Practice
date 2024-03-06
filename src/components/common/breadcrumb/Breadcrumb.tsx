import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";
import { Breadcrumbs } from "@mui/material";
import classNames from "classnames";

function Breadcrumb(): JSX.Element {
  const location = useLocation();

  const getLinkClass = (path: string): string =>
    classNames(styles.link, { [styles.active]: location.pathname === path });

  return (
    <div className={styles.container}>
      <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbs}>
        <Link to="/" className={getLinkClass("/")}>
          Home
        </Link>
        <Link to="/to-do-list" className={getLinkClass("/to-do-list")}>
          To Do List
        </Link>
        <Link to="/pokemon-ajax" className={getLinkClass("/pokemon-ajax")}>
          Pokemon Ajax
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
