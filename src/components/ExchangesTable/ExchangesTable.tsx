import React from 'react';
import { IExchange } from '../../types/exchanges';
import ExchangesTableRow from './ExchangesTableRow';

interface IExchangesTable {
    exchanges: IExchange[],
}

const ExchangesTable: React.FC<IExchangesTable> = ({ exchanges }) => {
    const renderExchangeRows = (list: IExchange[]) => list.map(item =>
        <ExchangesTableRow key={item.exchangeId} exchange={item} />
    )

    return (
        <table className="table-auto w-full mx-auto relative border-collapse">
            <thead className='bg-bg-300 sticky top-0'>
                <tr className=''>
                    <th className='text-start p-4 md:hidden'>Rank</th>
                    <th className='text-start p-4 sm:text-sm sm:p-2'>Name</th>
                    <th className='text-end p-4 sm:text-sm sm:p-2'>Tranding Pairs</th>
                    <th className='text-end p-4 sm:text-sm sm:p-2'>Volume(24Hr)</th>
                    <th className='text-end p-4 md:hidden'>Total(%)</th>
                </tr>
            </thead>
            <tbody>
                {renderExchangeRows(exchanges)}
            </tbody>
        </table>
    )
}

export default ExchangesTable