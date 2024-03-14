import { Link } from "react-router-dom";
import styles from "./Contract.module.scss";
import useDeleteContract from "../../../hooks/useDeleteContract";

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
  const deleteContract = useDeleteContract();

  return (
    <Link to={contract.url} className={styles.link}>
      {contract.name}
      <button onClick={() => deleteContract(contract.id)}>삭제</button>
    </Link>
  );
}

export default Contract;
