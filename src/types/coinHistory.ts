export interface ICoinHistory {
  priceUsd: string;
  circulatingSupply: string;
  date: string;
  time: number;
}

export interface ICoinHistoryRequestData {
  coinId: string;
  interval?: string;
  period: {
    start: number;
    end: number;
  };
}

export interface ICoinHistoryResponseData {
  data: ICoinHistory[];
  timestamp: number;
}
