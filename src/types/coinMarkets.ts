export interface ICoinMarkets {
    baseId: string,
    baseSymbol: string,
    exchangeId: string,
    priceUsd: string,
    quoteId: string,
    quoteSymbol: string,
    volumePercent: string,
    volumeUsd24Hr: string,
}

export interface ICoinMarketsRequestData {
    coinId: string,
    limit?: number,
    offset: number,
}

export interface ICoinMarketsResponseData {
    data: ICoinMarkets[],
    timestamp: number,
}