import React from 'react';

const DetailsHistoryPreloader: React.FC = () => {
    return (
        <div className="animate-pulse flex items-stretch justify-between gap-3 md:flex-col md:items-center md:justify-center">
            <div className="w-[70%] md:w-full h-[450px] md:h-96 sm:h-52 bg-accent-100 dark:bg-bg-200">
            </div>

            <div className="px-3 w-[30%] flex flex-col justify-between md:w-full md:items-start md:my-4 md:flex-row-reverse gap-4 sm:flex-wrap-reverse">
                <div className="mb-4 md:mb-0 sm:w-full">
                    <div className='h-7 w-48  mb-2 bg-accent-100 dark:bg-bg-200'>
                    </div>
                    <div className='h-7 w-48  mb-2 bg-accent-100 dark:bg-bg-200'>
                    </div>
                    <div className='h-7 w-52  mb-2 bg-accent-100 dark:bg-bg-200'>
                    </div>
                </div>

                <div className="h-16 md:w-1/2 sm:w-full bg-accent-100 dark:bg-bg-200">

                </div>
            </div>
        </div>
    )
}

export default DetailsHistoryPreloader;