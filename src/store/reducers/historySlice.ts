import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICoinHistory } from "../../models/coinHistory";

interface IHistoryState {
    isLoading: boolean;
    error: string;
    data: ICoinHistory[];
    low: number;
    high: number;
    average: number;
    isPositive: boolean;
}


const initialState: IHistoryState = {
    isLoading: false,
    error: "",
    data: [],
    low: 0,
    high: 0,
    average: 0,
    isPositive: false,
};

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        getCoinHistoryPending(state) {
            state.isLoading = true;
        },
        getCoinHistorySuccess(state, { payload }: PayloadAction<ICoinHistory[]>) {
            const lowesPrice = Math.max(...payload.map((coin) => +coin.priceUsd));
            const biggestPrice = Math.min(...payload.map((coin) => +coin.priceUsd));

            state.isLoading = false;
            state.data = payload;
            state.low = lowesPrice;
            state.high = biggestPrice;
            state.average = (lowesPrice + biggestPrice) / 2;
            state.isPositive =
                +payload[0].priceUsd < +payload[payload.length - 1].priceUsd;
        },
        getCoinHistoryFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        resetHistoryState(state) {
            state = initialState;
        },
    },
});

export const {
    getCoinHistoryPending,
    getCoinHistorySuccess,
    getCoinHistoryFailure,
    resetHistoryState,
} = historySlice.actions;
export default historySlice.reducer;
