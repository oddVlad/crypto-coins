import axios from "axios";
import { AppDispatch } from "../store";
import { COIN_API, COIN_EXCHANGES_LIMIT } from "../constans/values";
import { getExchangeDetailsFailure, getExchangeDetailsPending, getExchangeDetailsSuccess, getExchangesFailure, getExchangesPending, getExchangesSuccess } from "../store/reducers/exchangesSlice";
import { IExchangeResponse, IExchangesRequest, IExchangesResponse } from "../types/exchanges";

export const fetchExchagnes = ({ limit = COIN_EXCHANGES_LIMIT, offset }: IExchangesRequest) => async (dispatch: AppDispatch) => {
    try {
        dispatch(getExchangesPending())
        const { data } = await axios.get<IExchangesResponse>(`${COIN_API}/exchanges?limit=${limit}&offset=${offset}`);
        dispatch(getExchangesSuccess(data.data));
    } catch (error: any) {
        dispatch(getExchangesFailure(error));
    }
}
export const fetchExchagnesDetails = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(getExchangeDetailsPending());
        const { data } = await axios.get<IExchangeResponse>(`${COIN_API}/exchanges/${id}`);
        dispatch(getExchangeDetailsSuccess(data.data));
    } catch (error: any) {
        dispatch(getExchangeDetailsFailure(error));
    }
}


