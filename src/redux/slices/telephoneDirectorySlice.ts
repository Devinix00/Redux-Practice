import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const contract: IContract[] = [
  {
    id: 1,
    name: "김범수",
    number: "01056052258",
    url: "",
  },
  {
    id: 2,
    name: "김범수2",
    number: "01056052258",
    url: "",
  },
  {
    id: 3,
    name: "김범수3",
    number: "01056052258",
    url: "",
  },
  {
    id: 4,
    name: "김범수4",
    number: "01056052258",
    url: "",
  },
  {
    id: 5,
    name: "김범수2",
    number: "01056052258",
    url: "",
  },
];

export interface IContract {
  id: number;
  name: string;
  number: string;
  url: string;
}

const initialState: IContract[] = contract;

export const telephoneDirectorySlice = createSlice({
  name: "telephoneDirectorySlice",
  initialState,
  reducers: {
    addContract: (
      state,
      action: PayloadAction<{
        name: string;
        number: string;
      }>
    ) => {
      const newContract = {
        id: Date.now(),
        name: action.payload.name,
        number: action.payload.number,
        url: action.payload.name,
      };
      state.push(newContract);
    },
  },
});

export const { addContract } = telephoneDirectorySlice.actions;

export default telephoneDirectorySlice.reducer;
