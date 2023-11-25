import { createSlice } from "@reduxjs/toolkit"
import { IExchange } from "../../types/exchanges";
import type { PayloadAction } from "@reduxjs/toolkit";


interface IExchangeDetails {
    data: IExchange | null,
    isLoading: boolean,
    error: string,
}

interface IExchangesState {
    isLoading: boolean;
    list: IExchange[],
    error: string,
    details: IExchangeDetails,
}

const initialState: IExchangesState = {
    isLoading: false,
    list: [],
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
            state.list = [...state.list, ...payload];
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

    }
})

export const {
    getExchangesPending,
    getExchangesSuccess,
    getExchangesFailure,
    getExchangeDetailsPending,
    getExchangeDetailsSuccess,
    getExchangeDetailsFailure,
} = exchangesSlice.actions;
export default exchangesSlice.reducer;

