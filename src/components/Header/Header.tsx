import React, { useState } from "react";
import { Link } from "react-router-dom";
import CryptoIcon from "../../assets/crypto.png";
import Navbar from "../Navbar";
import NavMenu from "../NavMenu";

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {

    return (
        <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 p-2">
                <img src={CryptoIcon} alt="Crypto world" className="w-[40px]" />
                <h1 className="text-xl font-bold">Crypto Coins</h1>
            </Link>
            <Navbar />
            <NavMenu />
        </div>
    );
};

export default Header;
