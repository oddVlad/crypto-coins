import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICoin } from "../../types/coins";

interface ICoinState {
  list: ICoin[] | [];
  error: string;
  isLoading: boolean;
}

const initialState: ICoinState = {
  list: [],
  error: "",
  isLoading: false,
};

const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    getCoinListPending(state) {
      state.isLoading = true;
    },
    getCoinListSuccess(state, { payload }: PayloadAction<ICoin[]>) {
      state.isLoading = false;
      state.list = [...state.list, ...payload];
    },
    getCoinListFailure(state, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },

    resetState(state) {
      state = initialState;
    },
  },
});

export const {
  getCoinListPending,
  getCoinListSuccess,
  getCoinListFailure,
  resetState,
} = coinSlice.actions;
export default coinSlice.reducer;
