import axios from "axios";
import { AppDispatch } from "../store";
import {
  getCoinListPending,
  getCoinListSuccess,
  getCoinListFailure,
} from "../store/reducers/coinSlice";
import { ICoinResponseData, ICoinsListResponseData } from "../models/coins";
import { GET_COIN_LIMIT, COIN_API } from "../constans/values";
import {
  ICoinHistoryRequestData,
  ICoinHistoryResponseData,
} from "../models/coinHistory";
import {
  getCoinHistoryFailure,
  getCoinHistoryPending,
  getCoinHistorySuccess,
} from "../store/reducers/historySlice";
import {
  getCoinDetailsFailure,
  getCoinDetailsPending,
  getCoinDetailsSuccess,
} from "../store/reducers/detailsSlice";

export const fetchCoinsList = (offset: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getCoinListPending());
    const coinList = await axios.get<ICoinsListResponseData>(
      `${COIN_API}/assets?limit=${GET_COIN_LIMIT}&offset=${offset}`
    );
    dispatch(getCoinListSuccess(coinList.data.data));
  } catch (error: any) {
    dispatch(getCoinListFailure(error.error));
  }
};

export const fetchCoinHistory =
  ({
    coinId,
    period: { start, end },
    interval = "h1",
  }: ICoinHistoryRequestData) =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(getCoinHistoryPending());
        const coinHistory = await axios.get<ICoinHistoryResponseData>(
          `${COIN_API}/assets/${coinId}/history?interval=${interval}&start=${start}&end=${end}`
        );
        dispatch(getCoinHistorySuccess(coinHistory.data.data));
      } catch (error: any) {
        dispatch(getCoinHistoryFailure(error));
      }
    };

export const fetchCoinDetails =
  (coinId: string = "") =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(getCoinDetailsPending());
        const coinDetail = await axios.get<ICoinResponseData>(
          `${COIN_API}/assets/${coinId}`
        );
        dispatch(getCoinDetailsSuccess(coinDetail.data.data));
      } catch (error: any) {
        dispatch(getCoinDetailsFailure(error));
      }
    };
