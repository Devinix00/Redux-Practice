import { useDispatch } from "react-redux";
import Counter from "../counter/Counter";
import CounterButton from "../counterButton/CounterButton";
import styles from "./CounterExample.module.scss";
import {
  decrementCount,
  incrementCount,
} from "../../redux/actions/counterActions";

function CounterExample(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <section className={styles.container}>
      <Counter />
      <section className={styles.buttonSection}>
        <CounterButton type="+" onClick={() => dispatch(incrementCount())} />
        <CounterButton type="-" onClick={() => dispatch(decrementCount())} />
      </section>
    </section>
  );
}

export default CounterExample;
