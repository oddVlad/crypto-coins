import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICoinHistory } from "../../types/coinHistory";
import { getCostDifference } from "../../utils/stringParser";

interface IHistoryState {
    isLoading: boolean;
    error: string;
    data: ICoinHistory[];
    low: number;
    high: number;
    average: number;
    isPositive: boolean;
    changes: number;
}


const initialState: IHistoryState = {
    isLoading: false,
    error: "",
    data: [],
    low: 0,
    high: 0,
    average: 0,
    isPositive: false,
    changes: 0,
};

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        getCoinHistoryPending(state) {
            state.isLoading = true;
        },
        getCoinHistorySuccess(state, { payload }: PayloadAction<ICoinHistory[]>) {
            const payloadCoins = payload.map((coin) => +coin.priceUsd);
            const lowesPrice = Math.min(...payloadCoins);
            const biggestPrice = Math.max(...payloadCoins);
            const startCoinPrice = +payload[0].priceUsd;
            const endCoinPrice = +payload[payload.length - 1].priceUsd
            const priceDifference = getCostDifference(startCoinPrice, endCoinPrice);

            state.isLoading = false;
            state.data = payload;
            state.low = lowesPrice;
            state.high = biggestPrice;
            state.average = (lowesPrice + biggestPrice) / 2;
            state.isPositive = priceDifference >= 0;
            state.changes = priceDifference;
        },
        getCoinHistoryFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        resetHistoryState: () => initialState,

    },
});

export const {
    getCoinHistoryPending,
    getCoinHistorySuccess,
    getCoinHistoryFailure,
    resetHistoryState,
} = historySlice.actions;
export default historySlice.reducer;
