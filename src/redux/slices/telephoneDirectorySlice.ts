import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const contract: IContract[] = [];

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
        url: Date.now().toString(),
      };
      state.push(newContract);
    },

    deleteContract: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(
        (contract) => contract.id === action.payload
      );

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addContract, deleteContract } = telephoneDirectorySlice.actions;

export default telephoneDirectorySlice.reducer;
