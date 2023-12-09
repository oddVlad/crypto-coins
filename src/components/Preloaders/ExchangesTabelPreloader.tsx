import React from 'react'
import { COIN_EXCHANGES_LIMIT } from '../../constans/values'

const ExchangesTabelPreloader: React.FC = () => {
    return (
        <div className='animate-pulse'>
            {Array.from({ length: COIN_EXCHANGES_LIMIT }).map((item, index) =>
                <div key={index} className='h-12 md:h-10 sm:h-9 w-full bg-bg-100 my-1 dark:bg-bg-200 hover:dark:bg-bg-100 ' />
            )}
        </div>
    )
}

export default ExchangesTabelPreloader;