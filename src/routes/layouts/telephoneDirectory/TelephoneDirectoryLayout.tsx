import { Outlet } from "react-router-dom";
import styles from "./TelephoneDirectory.module.scss";

function TelephoneDirectoryLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Outlet />
      </div>
    </div>
  );
}

export default TelephoneDirectoryLayout;
