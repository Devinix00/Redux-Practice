import { useSelector } from "react-redux";
import styles from "./Counter.module.scss";

function Counter(): JSX.Element {
  const count = useSelector((state: IRootState) => state.counter);

  return <p className={styles.counter}>{count}</p>;
}

export default Counter;
