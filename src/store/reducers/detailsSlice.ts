import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICoin } from "../../types/coins";
import { ICoinMarkets } from "../../types/coinMarkets";

interface IDetailsState {
  isLoading: boolean;
  error: string;
  data: ICoin;
  market: {
    list: ICoinMarkets[],
    isLoading: boolean,
    errorMessage: string,
  }
}

const initialState: IDetailsState = {
  isLoading: false,
  error: "",
  data: {
    id: "",
    rank: "",
    symbol: "",
    name: "",
    supply: "",
    maxSupply: "",
    marketCapUsd: "",
    volumeUsd24Hr: "",
    priceUsd: "",
    changePercent24Hr: "",
    vwap24Hr: "",
    explorer: "",
  },
  market: {
    list: [],
    isLoading: false,
    errorMessage: "",
  }
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    getCoinDetailsPending(state) {
      state.isLoading = true;
    },

    getCoinDetailsSuccess(state, { payload }: PayloadAction<ICoin>) {
      state.isLoading = false;
      state.data = payload;
    },

    getCoinDetailsFailure(state, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },

    getCoinMarketsPending(state) {
      state.market.isLoading = true;
    },

    getCoinMarketsSuccess(state, { payload }: PayloadAction<ICoinMarkets[]>) {
      state.market.isLoading = false;
      state.market.list = [...state.market.list, ...payload];
    },

    getCoinExchangesFailure(state, { payload }: PayloadAction<string>) {
      state.market.isLoading = false;
      state.market.errorMessage = payload;
    },

    resetDetailsState(state) {
      state = initialState;
    },
  },
});

export const {
  getCoinDetailsPending,
  getCoinDetailsSuccess,
  getCoinDetailsFailure,
  getCoinMarketsPending,
  getCoinMarketsSuccess,
  getCoinExchangesFailure,
  resetDetailsState,
} = detailsSlice.actions;
export default detailsSlice.reducer;
