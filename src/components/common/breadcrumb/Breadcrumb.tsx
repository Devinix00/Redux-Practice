import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";
import { Breadcrumbs } from "@mui/material";
import classNames from "classnames";

function Breadcrumb(): JSX.Element {
  const location = useLocation();

  const links = [
    { path: "/", label: "Counter" },
    { path: "/to-do-list", label: "To Do List" },
    { path: "/pokemon-ajax", label: "Pokemon Ajax" },
    { path: "/to-do-list-ajax", label: "To Do List Ajax" },
    { path: "/telephone-directory", label: "Telephone Directory" },
    { path: "/blog", label: "Blog" },
  ];

  const getLinkClass = (path: string): string =>
    classNames(styles.link, { [styles.active]: location.pathname === path });

  return (
    <div className={styles.container}>
      <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbs}>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={getLinkClass(link.path)}
          >
            {link.label}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
