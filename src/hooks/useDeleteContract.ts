import { useDispatch } from "react-redux";
import { deleteContract } from "../redux/slices/telephoneDirectorySlice";

function useDeleteContract() {
  const dispatch = useDispatch();

  const handleDeleteContract = (id: number) => {
    dispatch(deleteContract(id));
  };

  return handleDeleteContract;
}

export default useDeleteContract;
