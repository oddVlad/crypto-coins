import React from 'react'
import { GET_COIN_LIMIT } from '../../constans/values'

const CoinsTablePreloader: React.FC = () => {
    return (
        <div className='animate-pulse'>
            {Array.from({ length: GET_COIN_LIMIT }).map((item, index) =>
                <div key={index} className='h-20 md:h-14 w-full bg-bg-100 my-1 dark:bg-bg-200 hover:dark:bg-bg-100 ' />
            )}
        </div>
    )
}

export default CoinsTablePreloader