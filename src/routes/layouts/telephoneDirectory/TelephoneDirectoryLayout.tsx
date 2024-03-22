import { Outlet } from "react-router-dom";
import styles from "./TelephoneDirectoryLayout.module.scss";

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
