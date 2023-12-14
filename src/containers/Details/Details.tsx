import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { fetchCoinDetails, fetchCoinHistory } from "../../api/coins";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { numberAug, priceFormater } from "../../utils/stringParser";
import CoinChart from "../../components/CoinChart";
import { ICoinHistoryRequestData } from "../../types/coinHistory";
import { calculateDate } from "../../utils/timeFormatter";
import {
    DATA_INTERVALS,
    HISTORY_INTERVALS,
    COIN_MARKETS_OFFSET,
    COIN_MARKETS_LIMIT,
} from "../../constans/values";
import { fetchCoinMarkets } from "../../api/markets";
import MarketsTable from "../../components/MarketsTable";
import { resetDetailsState } from "../../store/reducers/detailsSlice";
import { resetHistoryState } from "../../store/reducers/historySlice";
import { resetMarketsState } from "../../store/reducers/marketsSlice";
import DetailsHeaderPreloader from "../../components/Preloaders/DetailsHeaderPreloader";
import DetailsHistoryPreloader from "../../components/Preloaders/DetailsHistoryPreloader";
import ExchangesTabelPreloader from "../../components/Preloaders/ExchangesTabelPreloader";
import Button from "../../components/Button";

const Details: React.FC = () => {
    const { id: paramId } = useParams<string>();
    const {
        data: {
            rank,
            name,
            symbol,
            priceUsd,
            marketCapUsd,
            volumeUsd24Hr,
            supply,
            explorer = "#",
        },
        isLoading: isDetailLoading,
    } = useAppSelector((state) => state.details);
    const {
        data,
        isPositive,
        low,
        high,
        average,
        changes,
        isLoading: isHistoryLoading,
    } = useAppSelector((state) => state.history);
    const { list: marketList, isLoading: isMarketsLoading } = useAppSelector(state => state.markets);
    const [chartInterval, setChatInterval] = useState<string>(HISTORY_INTERVALS.DAY);
    const [exchangesOffset, setExchangesOffset] = useState<number>(COIN_MARKETS_OFFSET);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const requestData: ICoinHistoryRequestData = {
            coinId: paramId ?? "",
            interval: DATA_INTERVALS[chartInterval],
            period: {
                start: calculateDate(chartInterval),
                end: new Date().getTime(),
            },
        };

        dispatch(fetchCoinDetails(paramId));
        dispatch(fetchCoinHistory(requestData));
        dispatch(fetchCoinMarkets(paramId, exchangesOffset));

        return () => {
            dispatch(resetDetailsState());
            dispatch(resetHistoryState());
            dispatch(resetMarketsState());
        }
    }, []);

    useEffect(() => {
        const requestData: ICoinHistoryRequestData = {
            coinId: paramId ?? "",
            interval: DATA_INTERVALS[chartInterval],
            period: {
                start: calculateDate(chartInterval),
                end: new Date().getTime(),
            },
        };
        dispatch(fetchCoinHistory(requestData))
    }, [chartInterval]);

    const changeInterval = (event: any) => {
        setChatInterval(event.target.value);
    };

    const loadExchangesClickHandler = () => {
        const nextOffsetValue = exchangesOffset + COIN_MARKETS_LIMIT;
        dispatch(fetchCoinMarkets(paramId, nextOffsetValue));
        setExchangesOffset(nextOffsetValue);
    };

    const renderChartIntervals = () => Object.values(HISTORY_INTERVALS).map((item, index) =>

        <div key={item}>
            <input
                id={`radio-${index}`}
                type="radio"
                name="interval"
                value={item}
                className="hidden peer"
                checked={chartInterval === item}
                onChange={changeInterval}
            />
            <label
                htmlFor={`radio-${index}`}
                className="block w-12 py-2 text-center transition-all cursor-pointer shadow-md peer-hover:bg-accent-100 peer-checked:bg-accent-100 peer-active:scale-95 peer-hover:dark:bg-bg-100 rounded-lg peer-checked:dark:bg-accent-200 md:text-base sm:text-sm sm:w-10"
            >
                {item}
            </label>

        </div>
    );

    return (
        <div className="container">
            {isDetailLoading ? <DetailsHeaderPreloader /> :
                <div className="flex justify-between flex-wrap gap-3 items-center mb-8">
                    <div className="flex gap-3 items-stretch sm:w-full">
                        <div className="text-center bg-white shadow-md dark:shadow-none dark:bg-bg-200 p-3 rounded-lg md:p-2">
                            <p className="text-3xl mb-2 md:text-2xl">{rank}</p>
                            <div className="uppercase font-light text-xs">rank</div>
                        </div>

                        <div className="flex flex-col justify-evenly">
                            <div className="flex items-center">
                                <h2 className="text-2xl mr-4 md:text-xl">
                                    {name} ({symbol})
                                </h2>
                                <a href={explorer} rel="nofollow" target="blank" title={`${name} website`}>
                                    <BsBoxArrowUpRight size={20} className=" transition-transform hover:scale-110" />
                                </a>

                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xl md:text-lg">${numberAug(priceUsd)}</span>
                                <span
                                    className={`${isPositive ? "text-chart-1" : "text-chart-0"}`}
                                >
                                    {isPositive ? "▲" : "▼"}
                                    {priceFormater(changes)}%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 items-stretch sm:justify-between sm:w-full">
                        <div className="bg-white shadow-md dark:shadow-none dark:bg-bg-200 p-3 rounded-lg md:p-2">
                            <div className="text-xs font-light mb-2">Market Cap</div>
                            <div className="text-xl md:text-base sm:text-sm">${priceFormater(marketCapUsd)}</div>
                        </div>
                        <div className="bg-white shadow-md dark:shadow-none dark:bg-bg-200 p-3 rounded-lg md:p-2">
                            <div className="text-xs font-light mb-2">Volume (24Hr)</div>
                            <div className="text-xl md:text-base sm:text-sm">${priceFormater(volumeUsd24Hr)}</div>
                        </div>
                        <div className="bg-white shadow-md dark:shadow-none dark:bg-bg-200 p-3 rounded-lg md:p-2">
                            <div className="text-xs font-light mb-2">Supply</div>
                            <div className="text-xl md:text-base sm:text-sm">{`${priceFormater(
                                supply
                            )} ${symbol}`}</div>
                        </div>
                    </div>
                </div>
            }

            {isHistoryLoading || isDetailLoading ? <DetailsHistoryPreloader /> : <div className="flex items-stretch justify-between gap-3 md:flex-col md:items-center md:justify-center">
                <div className="w-3/4 md:w-full">
                    <CoinChart data={data} isPositive={isPositive} interval={chartInterval} />
                </div>

                <div className="px-3 w-[30%] flex flex-col justify-between md:w-full md:items-start md:my-4 md:flex-row-reverse gap-4 sm:flex-wrap-reverse">
                    <div className="mb-4 md:mb-0 sm:w-full">
                        <div className='text-lg mb-2 md:text-base sm:text-sm'>
                            <span className='mr-3 text-primary-200 font-semibold uppercase'>Low</span>
                            <span>${numberAug(low, 5)}</span>
                        </div>
                        <div className='text-lg mb-2 md:text-base sm:text-sm'>
                            <span className='mr-3 text-primary-200 font-semibold uppercase'>Hight</span>
                            <span>${numberAug(high, 5)}</span>
                        </div>
                        <div className='text-lg mb-2 md:text-base sm:text-sm'>
                            <span className='mr-3 text-primary-200 font-semibold uppercase'>Average</span>
                            <span>${numberAug(average, 5)}</span>
                        </div>
                    </div>

                    <div className="sm:w-full">
                        <div className="mb-3 text-primary-200 font-semibold uppercase md:text-base sm:text-sm">Data period</div>
                        <div className="flex items-center justify-between flex-wrap gap-1 sm:w-full">
                            {renderChartIntervals()}
                        </div>
                    </div>
                </div>
            </div>}

            <div className="mt-20 lg:mt-14 md:mt-6">
                <MarketsTable markets={marketList} />
                {isMarketsLoading && <ExchangesTabelPreloader />}
                <div className="flex items-center justify-center my-4">
                    <Button
                        clickHandler={loadExchangesClickHandler}>
                        load more
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Details;
