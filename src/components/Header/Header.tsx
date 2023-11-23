import React from "react";
import { Link } from "react-router-dom";
import { IoIosSettings } from 'react-icons/io';
import CryptoIcon from "../../assets/crypto.png";
import Navbar from "../Navbar";

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="bg-bg-200 rounded-lg flex items-center justify-between px-3">
            <Link to="/" className="flex items-center gap-3 flex-1">
                <img src={CryptoIcon} alt="Crypto world" className="w-[40px]" />
                <h1 className="text-xl font-bold">Crypto Coins</h1>
            </Link>

            <Navbar />

            <div className="flex-1 text-right">
                <button className="group p-2">
                    <IoIosSettings size={30} className="transition group-hover:fill-primary-300 " />
                </button>
            </div>
        </div>
    );
};

export default Header;
