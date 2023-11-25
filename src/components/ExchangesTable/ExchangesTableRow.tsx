import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constans/values'
import { IExchange } from '../../types/exchanges'
import { numberAug, priceFormater } from '../../utils/stringParser'
import { useAppDispatch } from '../../hooks/store'
import { fetchExchagnesDetails } from '../../api/exchanges'

interface IExchangesTableRow {
    exchange: IExchange,
}

const ExchangesTableRow: React.FC<IExchangesTableRow> = ({
    exchange: { id,
        name,
        rank,
        percentTotalVolume,
        volumeUsd,
        tradingPairs, }
}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const exchangeRowClickHandler = () => {
        dispatch(fetchExchagnesDetails(id));
        navigate(`${ROUTES.EXCHANGES_ID}`, { state: { id: id } });
    }
    return (
        <tr className='cursor-pointer dark:bg-bg-200 hover:dark:bg-bg-100 border-block-end'
            onClick={exchangeRowClickHandler}
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