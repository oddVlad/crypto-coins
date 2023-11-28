export interface IExchange {
    exchangeId: string,
    name: string,
    rank: string,
    percentTotalVolume: string,
    volumeUsd: string,
    tradingPairs: string,
    socket: boolean,
    exchangeUrl: string,
    updated: number
}

export interface IExchangesRequest {
    limit?: number,
    offset: number,
}

export interface IExchangesResponse {
    data: IExchange[],
    timestamp: number,
}

export interface IExchangeRequest {
    id: string,
}

export interface IExchangeResponse {
    data: IExchange,
    timestamp: number,
}