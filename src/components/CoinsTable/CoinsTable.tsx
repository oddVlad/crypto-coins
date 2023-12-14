import React, { useState } from 'react';
import { ICoin } from '../../types/coins';
import CoinTableRow from './CoinTableRow';

interface CoinsTableProps {
    coins: ICoin[],
}

const CoinsTable: React.FC<CoinsTableProps> = ({ coins }) => {
    const [selectedCoinId, setSelectedId] = useState<string | null>(null);

    const setSelectedIdCoin = (coinId: string): void => {
        if (selectedCoinId === coinId) {
            setSelectedId(null);
        }
        else {
            setSelectedId(coinId);
        }
    };

    const renderTableRow = (coinsList: ICoin[]) => {
        return coinsList.map(coin => <CoinTableRow
            key={coin.id}
            coin={coin}
            handleSelectCoin={setSelectedIdCoin}
            selectedId={selectedCoinId}
        />
        )
    };

    return (
        <table className="table-auto w-full mx-auto relative border-collapse shadow-lg">
            <thead className='bg-accent-100  dark:bg-bg-300 sticky top-0'>
                <tr>
                    <th className='text-start p-4 sm:hidden'>Rank</th>
                    <th className='text-start p-4 sm:text-sm sm:p-2'>Name</th>
                    <th className='text-start p-4 sm:text-sm sm:p-2'>Price</th>
                    <th className='text-start p-4 md:hidden'>Market Cap</th>
                    <th className='text-start p-4 lg:hidden'>Supply</th>
                    <th className='text-start p-4 lg:hidden'>VWAP(24)</th>
                    <th className='text-start p-4 md:hidden'>Volume(24)</th>
                    <th className='text-end p-4 sm:text-sm sm:p-2'>Change(24)</th>
                </tr>
            </thead>
            <tbody>
                {renderTableRow(coins)}
            </tbody>
        </table>
    )
};

export default CoinsTable;