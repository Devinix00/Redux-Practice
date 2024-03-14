import { useSelector } from "react-redux";
import AddContactFrom from "../../components/telephoneDirectoryPage/addContactFrom/AddContactFrom";
import Contract from "../../components/telephoneDirectoryPage/contract/Contract";
import styles from "./TelephoneDirectory.module.scss";
import { RootState } from "../../redux/store/store";
import React from "react";

function TelephoneDirectory() {
  const contracts = useSelector(
    (state: RootState) => state.telephoneDirectorty
  );

  return (
    <React.Fragment>
      <h2 className={styles.title}>전화번호부</h2>

      <ul className={styles.main}>
        {contracts.map((contract) => (
          <Contract contract={contract} key={contract.id} />
        ))}
      </ul>

      <AddContactFrom />
    </React.Fragment>
  );
}

export default TelephoneDirectory;
