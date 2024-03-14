import { Link } from "react-router-dom";
import styles from "./Contract.module.scss";

interface IProps {
  contract: IContract;
}

interface IContract {
  id: number;
  name: string;
  number: string;
  url: string;
}

function Contract({ contract }: IProps) {
  return (
    <Link to="" className={styles.link}>
      {contract.name}
    </Link>
  );
}

export default Contract;
