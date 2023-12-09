import React from "react";
import { Link } from "react-router-dom";
import CryptoIcon from "../../assets/crypto.png";
import Navbar from "../Navbar";
import NavMenu from "../NavMenu";

const Header: React.FC = () => {
    return (
        <header>
            <div className="container flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 p-2">
                    <img src={CryptoIcon} alt="Crypto world" className="w-[40px]" />
                    <h1 className="text-xl font-bold">Crypto Coins</h1>
                </Link>
                <Navbar />
                <NavMenu />
            </div>
        </header>
    );
};

export default Header;
