import React from 'react'
import CryptoIcon from "../../assets/crypto.png";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="container flex items-center justify-around flex-wrap py-3 gap-3 ">
            <Link to="/" className="flex items-center gap-3 p-2">
                <img src={CryptoIcon} alt="Crypto world" className="w-[40px]" />
                <h2 className="text-xl font-bold">Crypto Coins</h2>
            </Link>
            <div>© 2023</div>
            <a href='https://github.com/badlyWay' target='blank' className='group flex items-center transition-opacity '>
                <TbBrandGithubFilled size={30} className='mr-3 rounded-full bg-bg-100 p-1' />
                <span className='transition-colors group-hover:text-accent-300 text-text-100'>github.com</span>
            </a>
        </footer>
    )
}

export default Footer;