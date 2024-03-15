import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const deleteContract = useDeleteContract();

  return (
    <div onClick={() => navigate(contract.url)} className={styles.link}>
      {contract.name}
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteContract(contract.id);
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default Contract;
