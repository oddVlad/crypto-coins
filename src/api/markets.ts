import axios from "axios";
import { AppDispatch } from "../store";
import {
    getCoinExchangesFailure,
    getCoinMarketsPending,
    getCoinMarketsSuccess
} from "../store/reducers/marketsSlice";
import { COIN_API, COIN_EXCHANGES_LIMIT } from "../constans/values";
import { ICoinMarketsResponseData } from "../types/coinMarkets";

export const fetchCoinMarkets = (coinId: string = "", offset: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(getCoinMarketsPending());
        const { data } = await axios.get<ICoinMarketsResponseData>(`${COIN_API}/assets/${coinId}/markets?limit=${COIN_EXCHANGES_LIMIT}&offset=${offset}`);
        dispatch(getCoinMarketsSuccess(data.data));
    } catch (error: any) {
        dispatch(getCoinExchangesFailure(error));
    }
};