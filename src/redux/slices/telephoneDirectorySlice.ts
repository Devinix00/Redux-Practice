import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const contract: IContract[] = [];

export interface IContract {
  id: number;
  name: string;
  number: string;
  url: string;
  imageUrl: string;
}

const initialImageUrl =
  "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg";

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
        imageUrl: initialImageUrl,
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

    updateContract: (
      state,
      action: PayloadAction<{
        id: number | undefined;
        type: "name" | "number";
        content: string;
      }>
    ) => {
      const contract = state.find(
        (contract) => contract.id === action.payload.id
      );

      if (!contract) return;
      if (action.payload.type === "name") {
        contract.name = action.payload.content;
      } else if (action.payload.type === "number") {
        contract.number = action.payload.content;
      }
    },

    updateContractImage: (
      state,
      action: PayloadAction<{
        id: number | undefined;
        imageUrl: string;
      }>
    ) => {
      const contract = state.find(
        (contract) => contract.id === action.payload.id
      );

      if (!contract) return;
      contract.imageUrl = action.payload.imageUrl;
    },

    deleteContractImage: (state, action: PayloadAction<number | undefined>) => {
      const contract = state.find((contract) => contract.id === action.payload);
      if (!contract) return;
      contract.imageUrl = initialImageUrl;
    },
  },
});

export const selectContracts = createSelector(
  (state: RootState) => state.telephoneDirectory,
  (data) => data.telephoneDirectory
);

export const {
  addContract,
  deleteContract,
  updateContract,
  updateContractImage,
  deleteContractImage,
} = telephoneDirectorySlice.actions;

export default telephoneDirectorySlice.reducer;
