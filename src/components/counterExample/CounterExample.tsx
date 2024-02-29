import { useDispatch } from "react-redux";
import Counter from "../counter/Counter";
import CounterButton from "../counterButton/CounterButton";
import styles from "./CounterExample.module.scss";
import { DECREMENT, INCREMENT } from "../../redux/actions/counterActions";

function CounterExample(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <section className={styles.container}>
      <Counter />
      <section className={styles.button_section}>
        <CounterButton type="+" onClick={() => dispatch({ type: INCREMENT })} />
        <CounterButton type="-" onClick={() => dispatch({ type: DECREMENT })} />
      </section>
    </section>
  );
}

export default CounterExample;
