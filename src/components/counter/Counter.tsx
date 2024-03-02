import { useSelector } from "react-redux";
import styles from "./Counter.module.scss";
import { RootState } from "../../redux/store/store";

function Counter(): JSX.Element {
  const count = useSelector((state: RootState) => state.counter);

  return <p className={styles.counter}>{count}</p>;
}

export default Counter;
