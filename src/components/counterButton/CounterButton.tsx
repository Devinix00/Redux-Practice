import styles from "./CounterButton.module.scss";

interface IProps {
  type: "+" | "-";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function CounterButton({ type, onClick }: IProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>
      {type}
    </button>
  );
}

export default CounterButton;
