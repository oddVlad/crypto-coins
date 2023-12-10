import React from 'react';
import { IExchange } from '../../types/exchanges';
import { numberAug, priceFormater } from '../../utils/stringParser';

interface IExchangesTableRow {
    exchange: IExchange,
}

const ExchangesTableRow: React.FC<IExchangesTableRow> = ({
    exchange: { exchangeUrl,
        name,
        rank,
        percentTotalVolume,
        volumeUsd,
        tradingPairs, }
}) => {

    const exchangeRowClickHandler = () => {
        window.open(exchangeUrl, '_blank');
    }

    return (
        <tr className='cursor-pointer transition-all hover:scale-105 hover:shadow-lg active:scale-100 dark:bg-bg-200 hover:dark:bg-bg-100 border-b border-primary-300 dark:border-bg-300 hover:border-transparent' onClick={exchangeRowClickHandler}
        >
            <td className='text-start p-4 md:p-3 md:hidden'>{rank}</td>
            <td className='text-start p-4 md:p-3 sm:text-sm sm:p-2'>{name}</td>
            <td className='text-end p-4 md:p-3 sm:text-sm sm:p-2'>{tradingPairs}</td>
            <td className='text-end p-4 md:p-3 sm:text-sm sm:p-2'>${priceFormater(volumeUsd)}</td>
            <td className='text-end p-4 md:p-3 md:hidden'>{numberAug(percentTotalVolume)}%</td>
        </tr>
    )
}

export default ExchangesTableRow