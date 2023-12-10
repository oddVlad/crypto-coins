import React from 'react'
import { ICoin } from '../../types/coins'
import { numberAug, priceFormater } from '../../utils/stringParser';
import CoinDetailRow from '../CoinDetailRow';
import { fetchCoinHistory } from '../../api/coins';
import { ICoinHistoryRequestData } from '../../types/coinHistory';
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
                className='cursor-pointer transition-all bg-white hover:bg-slate-100 dark:bg-bg-200 hover:dark:bg-bg-100 border-b border-primary-300 dark:border-bg-300'
                onClick={handleCoinClick}
            >
                <td className='text-start p-4 md:p-2 sm:hidden '>{rank}</td>
                <td className='flex text-start p-4 md:p-2 items-center '>
                    <img
                        src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                        alt={name}
                        className='mr-3 w-10 sm:w-8'

                    />
                    <div>
                        <div className='sm:text-sm'>
                            {name}
                        </div>
                        <div className='sm:text-sm'>
                            {symbol}
                        </div>
                    </div>

                </td>
                <td className='text-start p-4 md:p-2 sm:text-sm'>${numberAug(priceUsd)}</td>
                <td className='text-start p-4 md:p-2 md:hidden '>${priceFormater(marketCapUsd)}</td>
                <td className='text-start p-4 md:p-2 lg:hidden '>{priceFormater(supply)}</td>
                <td className='text-start p-4 md:p-2 lg:hidden '>${priceFormater(vwap24Hr)}</td>
                <td className='text-start p-4 md:p-2 md:hidden '>${priceFormater(volumeUsd24Hr)}</td>
                <td className={
                    `text-end p-4 md:p-2 sm:text-sm ${+changePercent24Hr <= 0
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