import React from 'react'
import MarketsTableRow from './MarketsTableRow'
import { ICoinMarkets } from '../../types/coinMarkets'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constans/values'

interface IExchangesTableProps {
    markets: ICoinMarkets[],
}

const MarketsTable: React.FC<IExchangesTableProps> = ({ markets }) => {
    const navigate = useNavigate();

    const marketRowClickHandler = (id: string) => {
        navigate(`${ROUTES.EXCHANGES_ID}/${id}`,)
    }

    const renderMarketsTableRow = (list: ICoinMarkets[]) =>
        list.map((item, index) => <MarketsTableRow key={index} market={item} clickHandler={marketRowClickHandler} />)

    return (
        <table className="table-auto w-full mx-auto relative border-collapse">
            <thead className='bg-bg-300 sticky top-0'>
                <tr className=''>
                    <th className='text-start p-4'>Exchange</th>
                    <th className='text-start p-4'>Pair</th>
                    <th className='text-start p-4 md:hidden'>Price</th>
                    <th className='text-start p-4 '>Volume(24Hr)</th>
                    <th className='text-end p-4 md:hidden'>Volume(%)</th>
                </tr>
            </thead>
            <tbody>
                {renderMarketsTableRow(markets)}
            </tbody>
        </table>
    )
}

export default MarketsTable