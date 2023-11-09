import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinDetails, fetchCoinHistory } from "../../api/coins";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { numberAug, priceFormater } from "../../utils/stringParser";
import CoinChart from "../../components/CoinChart";
import { ICoinHistoryRequestData } from "../../models/coinHistory";
import { calculateDate } from "../../utils/timeFormatter";
import {
    DATA_INTERVALS,
    HISTORY_INTERVALS,
} from "../../constans/values";

interface IChartSettings {
    interval: string;
}

const Details: React.FC = () => {
    const { id: paramId } = useParams<string>();
    const {
        data: {
            rank,
            name,
            symbol,
            priceUsd,
            marketCapUsd,
            changePercent24Hr,
            volumeUsd24Hr,
            supply,
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
    } = useAppSelector((state) => state.history);
    const [chartSettings, setChartSettings] = useState<IChartSettings>({
        interval: HISTORY_INTERVALS.DAY,
    });

    const dispatch = useAppDispatch();

    useEffect(() => {
        const requestData: ICoinHistoryRequestData = {
            coinId: paramId ?? "",
            interval: DATA_INTERVALS[chartSettings.interval],
            period: {
                start: calculateDate(chartSettings.interval),
                end: new Date().getTime(),
            },
        };

        const fetchData = async () => {
            await dispatch(fetchCoinHistory(requestData));
            await dispatch(fetchCoinDetails(paramId));
        };

        fetchData();
    }, []);

    useEffect(() => {
        const requestData: ICoinHistoryRequestData = {
            coinId: paramId ?? "",
            interval: DATA_INTERVALS[chartSettings.interval],
            period: {
                start: calculateDate(chartSettings.interval),
                end: new Date().getTime(),
            },
        };
        dispatch(fetchCoinHistory(requestData))
    }, [chartSettings.interval])

    const changeInterval = (event: any) => {
        setChartSettings({
            interval: event.target.value,
        });
    };

    const { interval } = chartSettings;

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
                            <h2 className="text-2xl">
                                {name} ({symbol})
                            </h2>
                            <div className="flex items-center gap-3">
                                <span className="text-xl">${numberAug(priceUsd)}</span>
                                <span
                                    className={`${isPositive ? "text-chart-1" : "text-chart-0"}`}
                                >
                                    {isPositive ? "▲" : "▼"}
                                    {priceFormater(changePercent24Hr)}%
                                </span>
                            </div>
                        </div>

                        { }
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

            <div className="flex items-stretch justify-between gap-3">
                <div className="w-[70%]">
                    {isHistoryLoading ? <div className="text-center">"Loading . . ."</div> :
                        <CoinChart data={data} isPositive={isPositive} interval={chartSettings.interval} />
                    }
                </div>

                <div className="px-3 w-[30%] flex flex-col justify-between">
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
                        {Object.values(HISTORY_INTERVALS).map((item, index) =>

                            <div key={item}>
                                <input
                                    id={`radio-${index}`}
                                    type="radio"
                                    name="interval"
                                    value={item}
                                    className="hidden peer"
                                    checked={interval === item}
                                    onChange={changeInterval}
                                />
                                <label
                                    htmlFor={`radio-${index}`}
                                    className="px-3 py-2 transition-colors cursor-pointer peer-hover:bg-bg-100 bg-bg-200 rounded-lg peer-checked:bg-accent-200"
                                >
                                    {item}
                                </label>

                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Details;
