export interface ICoin {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer?: string,
}

export interface ICoinsListResponseData {
  data: ICoin[];
  timestamp: number;
}

export interface ICoinResponseData {
  data: ICoin;
  timestamp: number;
}
