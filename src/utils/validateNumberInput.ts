const validateNumberInput = (value: string): boolean => {
  const regex = /^\d*$/;
  return regex.test(value);
};

export default validateNumberInput;
