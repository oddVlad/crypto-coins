import React from "react";
import { Link } from "react-router-dom";
import CryptoIcon from "../../assets/crypto.png";
import Navbar from "../Navbar";
import NavMenu from "../NavMenu";
import { THEME } from "../../constans/values";
import Button from "../Button";
import { MdNightlight } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";

interface IHeaderProps {
    themeToggle: () => void;
    theme: THEME
};

const Header: React.FC<IHeaderProps> = ({ themeToggle, theme }) => {

    return (
        <header>
            <div className="container flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 p-2">
                    <img src={CryptoIcon} alt="Crypto world" className="w-[40px]" />
                    <h1 className="text-xl font-bold">Crypto Coins</h1>
                </Link>
                <div className="flex items-center gap-5 md:flex-row-reverse">
                    <Navbar />
                    <NavMenu />

                    <div className="h-10 w-[1px] dark:bg-bg-100 bg-primary-300 ">
                    </div>
                    <Button clickHandler={themeToggle}>
                        {theme === THEME.DARK ? <MdNightlight size={20} /> : <IoIosSunny size={20} />}
                    </Button>

                </div>
            </div>
        </header>
    );
};

export default Header;
