import React, { useEffect, useState } from 'react';
import ExchangesTable from '../../components/ExchangesTable/ExchangesTable';
import { COIN_EXCHANGES_LIMIT, COIN_EXCHANGES_OFFSET } from '../../constans/values';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchExchagnes } from '../../api/exchanges';
import { resetExchangesState } from '../../store/reducers/exchangesSlice';
import ExchangesTabelPreloader from '../../components/Preloaders/ExchangesTabelPreloader';
import Button from '../../components/Button';

const Exchanges: React.FC = () => {
    const [offset, setOffset] = useState<number>(COIN_EXCHANGES_OFFSET);
    const { list, isEndList, isLoading } = useAppSelector(state => state.exchanges);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchExchagnes({
            limit: COIN_EXCHANGES_LIMIT,
            offset: COIN_EXCHANGES_OFFSET,
        }))

        return () => {
            dispatch(resetExchangesState())
        }
    }, [])

    const loadButtonClickHandler = () => {
        const newOffset = offset + COIN_EXCHANGES_LIMIT;
        dispatch(fetchExchagnes({ offset: newOffset }));
        setOffset(newOffset);
    };

    return (
        <div className='container'>
            <ExchangesTable exchanges={list} />
            {isLoading && <ExchangesTabelPreloader />}
            {isEndList ||
                <div className="flex items-center justify-center my-4">
                    <Button
                        clickHandler={loadButtonClickHandler}
                    >
                        load more
                    </Button>
                </div>
            }

        </div>
    )
};

export default Exchanges;