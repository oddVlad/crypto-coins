import React from 'react';
import CryptoIcon from "../../assets/crypto.png";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="container flex items-center justify-between flex-wrap py-3 gap-3 ">
            <Link to="/" className="flex flex-1 items-center gap-3 p-2">
                <img src={CryptoIcon} alt="Crypto world" className="w-[40px]" />
                <h2 className="text-xl font-bold">Crypto Coins</h2>
            </Link>
            <div className='flex-1 text-center'>© 2023</div>
            <a href='https://github.com/badlyWay' target='blank' className='group flex-1 flex items-center justify-end transition-opacity '>
                <TbBrandGithubFilled size={30} className='mr-3 rounded-full bg-bg-100 text-white dark:bg-bg-100 p-1' />
                <span className='transition-colors group-hover:text-accent-300 dark:text-text-100'>github.com</span>
            </a>
        </footer>
    )
};

export default Footer;