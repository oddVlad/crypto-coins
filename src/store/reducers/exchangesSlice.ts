import { createSlice } from "@reduxjs/toolkit"
import { IExchange } from "../../types/exchanges";
import type { PayloadAction } from "@reduxjs/toolkit";
import { COIN_EXCHANGES_LIMIT } from "../../constans/values";


interface IExchangeDetails {
    data: IExchange | null,
    isLoading: boolean,
    error: string,
}

interface IExchangesState {
    isLoading: boolean;
    list: IExchange[],
    isEndList: boolean,
    error: string,
    details: IExchangeDetails,
}

const initialState: IExchangesState = {
    isLoading: false,
    list: [],
    isEndList: false,
    error: "",
    details: {
        data: null,
        isLoading: false,
        error: "",
    }
}

const exchangesSlice = createSlice({
    name: "exchangesSlice",
    initialState,
    reducers: {
        getExchangesPending(state) {
            state.isLoading = true;
        },
        getExchangesSuccess(state, { payload }: PayloadAction<IExchange[]>) {
            state.isLoading = false;
            state.isEndList = payload.length < COIN_EXCHANGES_LIMIT;
            state.list = [...state.list, ...payload].sort((current: IExchange, next: IExchange) => +current.rank - +next.rank);
        },
        getExchangesFailure(state, { payload }: PayloadAction<string>) {
            state.isLoading = false;
            state.error = payload;
        },
        getExchangeDetailsPending(state) {
            state.details.isLoading = true;
        },
        getExchangeDetailsSuccess(state, { payload }: PayloadAction<IExchange>) {
            state.details.isLoading = false;
            state.details.data = payload;
        },
        getExchangeDetailsFailure(state, { payload }: PayloadAction<string>) {
            state.details.isLoading = false;
            state.details.error = payload;
        },

        resetExchangesState: () => initialState,
    }
})

export const {
    getExchangesPending,
    getExchangesSuccess,
    getExchangesFailure,
    getExchangeDetailsPending,
    getExchangeDetailsSuccess,
    getExchangeDetailsFailure,
    resetExchangesState
} = exchangesSlice.actions;
export default exchangesSlice.reducer;

