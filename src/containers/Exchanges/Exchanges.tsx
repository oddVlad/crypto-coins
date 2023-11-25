import React, { useEffect, useState } from 'react'
import ExchangesTable from '../../components/ExchangesTable/ExchangesTable'
import { COIN_EXCHANGES_LIMIT, COIN_EXCHANGES_OFFSET } from '../../constans/values';
import { IExchangesRequest } from '../../types/exchanges';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchExchagnes } from '../../api/exchanges';

const Exchanges: React.FC = () => {
    const [offset, setOffset] = useState<number>(COIN_EXCHANGES_OFFSET);
    const { id: exchangeId } = useParams<string>();
    const { isLoading, list, error, details } = useAppSelector(state => state.exchanges)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchExchagnes({
            limit: COIN_EXCHANGES_LIMIT,
            offset: COIN_EXCHANGES_OFFSET,
        }))
    }, [])

    const loadButtonClickHandler = () => {
        const newOffset = offset + COIN_EXCHANGES_LIMIT;
        dispatch(fetchExchagnes({ offset: newOffset }));
        setOffset(newOffset);
    }

    return (
        <div>
            <ExchangesTable exchanges={list} />
            <button
                onClick={loadButtonClickHandler}
                className="mx-auto block px-6 capitalize py-4 my-5 text-center transition-colors rounded-full bg-bg-100 hover:bg-accent-200">
                load more
            </button>
        </div>
    )
}

export default Exchanges