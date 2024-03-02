import { useDispatch } from "react-redux";
import Counter from "../counter/Counter";
import CounterButton from "../counterButton/CounterButton";
import styles from "./CounterExample.module.scss";
import { counterActions } from "../../redux/slices/counterSlice";

function CounterExample(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <section className={styles.container}>
      <Counter />
      <section className={styles.button_section}>
        <CounterButton
          type="+"
          onClick={() => dispatch(counterActions.increment())}
        />
        <CounterButton
          type="-"
          onClick={() => dispatch(counterActions.decrement())}
        />
      </section>
    </section>
  );
}

export default CounterExample;
