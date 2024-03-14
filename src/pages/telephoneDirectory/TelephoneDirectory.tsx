import { useSelector } from "react-redux";
import AddContactFrom from "../../components/telephoneDirectoryPage/addContactFrom/AddContactFrom";
import Contract from "../../components/telephoneDirectoryPage/contract/Contract";
import styles from "./TelephoneDirectory.module.scss";
import { RootState } from "../../redux/store/store";

function TelephoneDirectory() {
  const contracts = useSelector((state: RootState) => state.telephoneDirectort);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 className={styles.title}>전화번호부</h2>

        <ul className={styles.main}>
          {contracts.map((contract) => (
            <Contract contract={contract} key={contract.id} />
          ))}
        </ul>

        <AddContactFrom />
      </div>
    </div>
  );
}

export default TelephoneDirectory;
