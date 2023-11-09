import React from 'react'
import { ICoin } from '../../models/coins'
import { numberAug, priceFormater } from '../../utils/stringParser';
import CoinDetailRow from '../CoinDetailRow';
import { fetchCoinHistory } from '../../api/coins';
import { ICoinHistoryRequestData } from '../../models/coinHistory';
import { useAppDispatch } from '../../hooks/store';
import { getDateDayAgo } from '../../utils/timeFormatter';


interface ICoinTableRowProps {
    coin: ICoin,
    selectedId: string | null,
    handleSelectCoin: (id: string) => void,
};

const CoinTableRow: React.FC<ICoinTableRowProps> = ({ coin, selectedId, handleSelectCoin }) => {
    const dispatch = useAppDispatch();

    const handleCoinClick = (): void => {
        handleSelectCoin(coin.id);
        const requestData: ICoinHistoryRequestData = {
            coinId: id,
            interval: "m5",
            period: {
                start: getDateDayAgo(),
                end: new Date().getTime(),
            },
        }
        dispatch(fetchCoinHistory(requestData));
    }

    const { id,
        rank,
        symbol,
        name,
        supply,
        marketCapUsd,
        volumeUsd24Hr,
        priceUsd,
        changePercent24Hr,
        vwap24Hr, } = coin;
    return (
        <>
            <tr
                className='cursor-pointer dark:bg-bg-200 hover:dark:bg-bg-100 border-block-end align-'
                onClick={handleCoinClick}
            >
                <td className='text-start p-4 md:p-2 sm:hidden '>{rank}</td>
                <td className='flex text-start p-4 md:p-2 items-center '>
                    <img
                        width={40}
                        src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                        alt={name}
                        className='mr-3'

                    />
                    <div>
                        <div className=''>
                            {name}
                        </div>
                        <div>
                            {symbol}
                        </div>
                    </div>

                </td>
                <td className='text-start p-4 md:p-2 '>${numberAug(priceUsd)}</td>
                <td className='text-start p-4 md:p-2 md:hidden '>${priceFormater(marketCapUsd)}</td>
                <td className='text-start p-4 md:p-2 lg:hidden '>{priceFormater(supply)}</td>
                <td className='text-start p-4 md:p-2 lg:hidden '>${priceFormater(vwap24Hr)}</td>
                <td className='text-start p-4 md:p-2 md:hidden '>${priceFormater(volumeUsd24Hr)}</td>
                <td className={
                    `text-end p-4 md:p-2 ${+changePercent24Hr <= 0
                        ? "text-chart-0"
                        : "text-chart-1"}`
                }>
                    {priceFormater(changePercent24Hr)}%
                </td>
            </tr>

            {selectedId === id && <CoinDetailRow coin={coin} />}
        </>
    )
}

export default CoinTableRow