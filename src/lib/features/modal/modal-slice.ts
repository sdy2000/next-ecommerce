import { createSlice } from "@reduxjs/toolkit";

interface IModalType {
  modalId: string;
}

const initialState: IModalType = {
  modalId: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, { payload }) => {
      console.log(payload)
      state.modalId = payload === state.modalId ? "" : payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
