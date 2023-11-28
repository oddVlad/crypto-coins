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
        <tr className='cursor-pointer dark:bg-bg-200 hover:dark:bg-bg-100 border-block-end' onClick={exchangeRowClickHandler}
        >
            <td className='text-start p-4 md:p-2 md:hidden'>{rank}</td>
            <td className='text-start p-4 md:p-2'>{name}</td>
            <td className='text-end p-4 md:p-2'>{tradingPairs}</td>
            <td className='text-end p-4 md:p-2'>${priceFormater(volumeUsd)}</td>
            <td className='text-end p-4 md:p-2 md:hidden'>{numberAug(percentTotalVolume)}%</td>
        </tr>
    )
}

export default ExchangesTableRow