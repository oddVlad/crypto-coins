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
            explorer,
        },
        isLoading: isDetailLoading,
        error: detailError,
    } = useAppSelector((state) => state.details);
    const {
        data,
        isLoading: isHistoryLoading,
        error: historyError,
        isPositive,
        low,
        high,
        average,
        changes
    } = useAppSelector((state) => state.history);
    const { list: marketList } = useAppSelector(state => state.markets)
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
            dispatch(resetDetailsState())
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
    }, [chartInterval])

    const changeInterval = (event: any) => {
        setChatInterval(event.target.value);
    };

    const loadExchangesClickHandler = (event: any) => {
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
                className="px-3 py-2 transition-colors cursor-pointer peer-hover:bg-bg-100 bg-bg-200 rounded-lg peer-checked:bg-accent-200"
            >
                {item}
            </label>

        </div>
    )

    return (
        <>
            {isDetailLoading ? <div className="text-center">"Loading . . ."</div> :
                <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-3 items-stretch">
                        <div className="text-center bg-bg-200 p-3 rounded-lg">
                            <p className="text-3xl mb-2">{rank}</p>
                            <div className="uppercase font-light text-xs">rank</div>
                        </div>

                        <div className="flex flex-col justify-evenly">
                            <div className="flex items-center">
                                <h2 className="text-2xl mr-4">
                                    {name} ({symbol})
                                </h2>
                                {explorer && <a href={explorer} rel="nofollow" target="blank" title={`${name} website`}>
                                    <BsBoxArrowUpRight size={20} className=" transition-transform hover:scale-110" />
                                </a>}

                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xl">${numberAug(priceUsd)}</span>
                                <span
                                    className={`${isPositive ? "text-chart-1" : "text-chart-0"}`}
                                >
                                    {isPositive ? "▲" : "▼"}
                                    {priceFormater(changes)}%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 items-stretch">
                        <div className="bg-bg-200 p-3 rounded-lg">
                            <div className="text-xs font-light mb-2">Market Cap</div>
                            <div className="text-xl">${priceFormater(marketCapUsd)}</div>
                        </div>
                        <div className="bg-bg-200 p-3 rounded-lg">
                            <div className="text-xs font-light mb-2">Volume (24Hr)</div>
                            <div className="text-xl">${priceFormater(volumeUsd24Hr)}</div>
                        </div>
                        <div className="bg-bg-200 p-3 rounded-lg">
                            <div className="text-xs font-light mb-2">Supply</div>
                            <div className="text-xl">{`${priceFormater(
                                supply
                            )} ${symbol}`}</div>
                        </div>
                    </div>
                </div>
            }

            <div className="flex items-stretch justify-between gap-3 md:flex-col md:items-center md:justify-center">
                <div className="w-[70%] md:w-full">
                    <CoinChart data={data} isPositive={isPositive} interval={chartInterval} />
                </div>

                <div className="px-3 w-[30%] flex flex-col justify-between md:w-full md:items-start md:my-10">
                    <div className="mb-4">
                        <div className='text-lg mb-2'>
                            <span className='m-3 text-primary-200 font-semibold uppercase'>Low</span>
                            <span>${numberAug(low, 5)}</span>
                        </div>
                        <div className='text-lg mb-2'>
                            <span className='m-3 text-primary-200 font-semibold uppercase'>Hight</span>
                            <span>${numberAug(high, 5)}</span>
                        </div>
                        <div className='text-lg mb-2'>
                            <span className='m-3 text-primary-200 font-semibold uppercase'>Average</span>
                            <span>${numberAug(average, 5)}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        {renderChartIntervals()}
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <MarketsTable markets={marketList} />
                <button
                    onClick={loadExchangesClickHandler}
                    className="mx-auto block px-6 capitalize py-4 my-5 text-center transition-colors rounded-full bg-bg-100 hover:bg-accent-200">
                    load more
                </button>
            </div>
        </>
    );
};

export default Details;
