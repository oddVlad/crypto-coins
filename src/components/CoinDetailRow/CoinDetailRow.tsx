import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { ICoin } from '../../types/coins';
import { getFormatedCurrentDate } from '../../utils/timeFormatter';
import { numberAug } from '../../utils/stringParser';
import CoinChart from '../CoinChart';
import { Link } from 'react-router-dom';
import { HISTORY_INTERVALS, ROUTES } from '../../constans/values';
import { resetHistoryState } from '../../store/reducers/historySlice';

interface ICoinDetailRowProps {
    coin: ICoin,
};

const CoinDetailRow: React.FC<ICoinDetailRowProps> = ({ coin: { id, name, symbol } }) => {
    const {
        isLoading,
        data: historyList,
        low,
        high,
        average,
        isPositive
    } = useAppSelector(state => state.history);
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(resetHistoryState());
        }
    }, []);

    return (
        <tr className='bg-bg-200'>
            <td colSpan={8}>
                <div className="p-5 flex flex-col items-stretch justify-center">
                    <div className='flex mb-5 items-center flex-wrap justify-between'>
                        <div className='flex items-center flex-wrap justify-center'>
                            <img
                                width="70"
                                src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                                alt={name}
                                className='mr-5'

                            />
                            <div className=''>
                                <p className='text-2xl mb-1'>{name} ({symbol})</p>

                                <span className='block'>{getFormatedCurrentDate()}</span>
                            </div>
                        </div>

                        <div className='flex items-center justify-between flex-wrap gap-4'>
                            <div className='text-lg'>
                                <span className='m-3 text-primary-200 font-semibold uppercase'>High</span>
                                <span>${numberAug(high, 5)}</span>
                            </div>
                            <div className='text-lg'>
                                <span className='m-3 text-primary-200 font-semibold uppercase'>Low</span>
                                <span>${numberAug(low, 5)}</span>
                            </div>
                            <div className='text-lg'>
                                <span className='m-3 text-primary-200 font-semibold uppercase'>Average</span>
                                <span>${numberAug(average, 5)}</span>
                            </div>
                        </div>
                    </div>
                    <div className='px-20 mb-5'>
                        <CoinChart data={historyList} interval={HISTORY_INTERVALS.DAY} isPositive={isPositive} />
                    </div>
                    <Link
                        to={`${ROUTES.DETAILS}/${id}`}
                        className='px-6 py-4 mx-auto text-center transition-colors rounded-full bg-bg-100 hover:bg-accent-200'
                    >
                        More Details
                    </Link>
                </div>
            </td>
        </tr>
    )
};

export default CoinDetailRow;