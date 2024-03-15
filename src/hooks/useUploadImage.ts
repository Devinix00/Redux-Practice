import { ChangeEvent, useRef, useState } from "react";

function useUploadImage() {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickImageUploader = (): void => {
    imageInputRef.current?.click();
  };

  const handleDeleteImage = () => {
    setImageFile(null);
    setPreviewUrl(null);
  };

  return {
    imageInputRef,
    handleClickImageUploader,
    handleFileChange,
    previewUrl,
    handleDeleteImage,
  };
}

export default useUploadImage;
