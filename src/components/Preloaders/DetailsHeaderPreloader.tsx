import React from 'react';

const DetailsHeaderPreloader: React.FC = () => {
    return (
        <div className="animate-pulse flex justify-between flex-wrap gap-3 items-center mb-8">
            <div className=" flex gap-3 items-stretch sm:w-full">
                <div className="h-20 w-14 bg-accent-100 dark:bg-bg-200 rounded-lg md:p-2">
                </div>
                <div className="flex flex-col justify-evenly">
                    <div className="h-8 w-44 mr-4 bg-accent-100 dark:bg-bg-200 " />
                    <div className="h-7 w-44 bg-accent-100 dark:bg-bg-200 " />
                </div>
            </div>
            <div className="flex gap-3 items-stretch sm:justify-between sm:w-full">
                <div className="w-28 h-20 bg-accent-100 dark:bg-bg-200 p-3 rounded-lg md:p-2">
                </div>
                <div className="w-28 h-20 bg-accent-100 dark:bg-bg-200 p-3 rounded-lg md:p-2">
                </div>
                <div className="w-28 h-20 bg-accent-100 dark:bg-bg-200 p-3 rounded-lg md:p-2">
                </div>
            </div>
        </div>
    )
}

export default DetailsHeaderPreloader;