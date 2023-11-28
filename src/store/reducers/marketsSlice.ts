import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICoinMarkets } from "../../types/coinMarkets";

interface IMarketsState {
    list: ICoinMarkets[],
    isLoading: boolean,
    errorMessage: string,
}

const initialState: IMarketsState = {
    list: [],
    isLoading: false,
    errorMessage: "",
}

const marketsSlice = createSlice({
    name: "markets",
    initialState,
    reducers: {
        getCoinMarketsPending(state) {
            state.isLoading = true;
        },

        getCoinMarketsSuccess(state, { payload }: PayloadAction<ICoinMarkets[]>) {
            state.isLoading = false;
            state.list = [...state.list, ...payload];
        },

        getCoinExchangesFailure(state, { payload }: PayloadAction<string>) {
            state.isLoading = false;
            state.errorMessage = payload;
        },

        resetMarketsState: () => initialState
    }
})

export const {
    getCoinMarketsPending,
    getCoinMarketsSuccess,
    getCoinExchangesFailure,
    resetMarketsState
} = marketsSlice.actions

export default marketsSlice.reducer;