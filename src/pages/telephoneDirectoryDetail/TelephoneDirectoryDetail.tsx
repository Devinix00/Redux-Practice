import styles from "./TelephoneDirectoryDetail.module.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectContracts } from "../../redux/slices/telephoneDirectorySlice";
import UserImageSection from "../../components/telephoneDirectoryDetailPage/userImageSection/UserImageSection";
import NameAndNumber from "../../components/telephoneDirectoryDetailPage/nameAndNumber/NameAndNumber";

function TelephoneDirectoryDetail() {
  const { id } = useParams();
  const contracts = useSelector(selectContracts);
  const userData = contracts?.find((contract) => contract.id.toString() === id);

  return (
    <div className={styles.container}>
      <UserImageSection userData={userData}  />

      <NameAndNumber content={userData?.name} type="name" id={userData?.id} />
      <NameAndNumber content={userData?.number} type="number" id={userData?.id}/>
    </div>
  );
}

export default TelephoneDirectoryDetail;
