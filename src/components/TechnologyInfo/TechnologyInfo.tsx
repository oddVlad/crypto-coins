import React from 'react';
import { ITechnologyInfo } from '../../types/common';
import { BsBoxArrowUpRight } from 'react-icons/bs';

interface ITechnologyInfoProps {
    element: ITechnologyInfo,
};

const TechnologyInfo: React.FC<ITechnologyInfoProps> = ({ element: { image, title, describe, link = "#" } }) => {
    return (
        <div className="flex items-center justify-around odd:flex-row-reverse mb-20 sm:items-start sm:flex-col sm:odd:flex-col sm:mb-10">
            <div className='sm:flex sm:items-center sm:gap-4 sm:mb-3 sm:m-auto'>
                <img src={image} alt={title} className='w-24 h-auto sm:w-16' />
                <a href={link} target='blank' rel='nofollow' className=' items-center mb-3 hidden sm:flex'>
                    <p className="font-bold text-lg text-accent-300 mr-3">{title}</p>
                    <BsBoxArrowUpRight size={15} className=" transition-transform hover:scale-110" />
                </a>
            </div>
            <div className='glass border-solid border-white dark:border-bg-200 border-2 dark:text-white p-8 rounded-md w-2/3 sm:w-full'>
                <a href={link} target='blank' rel='nofollow' className='flex max-w-fit items-center mb-3 sm:hidden'>
                    <p className="font-bold text-lg text-accent-300 mr-3">{title}</p>
                    <BsBoxArrowUpRight size={15} className=" transition-transform hover:scale-110" />
                </a>
                <p className='text-lg md:text-base'>{describe}</p>
            </div>
        </div >
    )
};

export default TechnologyInfo;