import { ChangeEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  deleteContractImage,
  updateContractImage,
} from "../redux/slices/telephoneDirectorySlice";

function useContractImage() {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: number | undefined
  ): void => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        const resultUrl = reader.result as string;

        dispatch(updateContractImage({ id: id, imageUrl: resultUrl }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClickImageUploader = (): void => {
    imageInputRef.current?.click();
  };

  const handleDeleteImage = (id: number | undefined) => {
    dispatch(deleteContractImage(id));
  };

  return {
    imageInputRef,
    handleClickImageUploader,
    handleFileChange,
    handleDeleteImage,
  };
}

export default useContractImage;
