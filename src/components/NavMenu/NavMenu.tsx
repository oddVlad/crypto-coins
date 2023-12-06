import React, { useEffect, useRef, useState } from 'react'
import NavbarLink from '../Navbar/NavbarLink';
import { ROUTES } from '../../constans/values';
import { CgMenu } from 'react-icons/cg';
import { IoClose } from "react-icons/io5";
import { SiBitcoinsv } from "react-icons/si";
import { RiExchangeDollarLine } from "react-icons/ri";
import { AiFillQuestionCircle } from "react-icons/ai";


interface INavMenuProps {
}

const NavMenu: React.FC<INavMenuProps> = () => {
    const [isMenuActive, setMenuActive] = useState<boolean>(false);
    const menuRef = useRef<HTMLElement>(null);

    const clickOutsideHandler = (e: MouseEvent) => {
        if (menuRef.current && !isMenuActive && !menuRef.current.contains(e.target as Node)) {
            handleCloseMenu();
        }
    }

    const handleCloseMenu = () => {
        setMenuActive(false);
    }

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setMenuActive(!isMenuActive);
    }

    useEffect(() => {
        document.addEventListener("click", clickOutsideHandler);
        document.addEventListener("scroll", handleCloseMenu);

        return () => {
            document.removeEventListener("click", clickOutsideHandler);
            document.removeEventListener("click", handleCloseMenu);
        }
    }, [])

    return (
        <div className="hidden md:block relative">
            <button onClick={handleButtonClick} className="h-full w-full">
                {isMenuActive ? <IoClose size={30} /> : <CgMenu size={30} />}
            </button>
            <nav ref={menuRef} className={`absolute bg-bg-100 rounded-lg flex flex-col items-stretch justify-center text-lg text-left w-64 top-full right-0  duration-300 ${isMenuActive ? "opacity-1 z-50 translate-y-0" : "opacity-0 -z-50 -translate-y-5"}`}>
                <NavbarLink pathTo={ROUTES.HOME}>
                    <div className='flex items-center gap-3'>
                        <SiBitcoinsv size={20} />
                        <span>Home</span>
                    </div>
                </NavbarLink>
                <NavbarLink pathTo={ROUTES.EXCHANGES}>
                    <div className='flex items-center gap-3'>
                        <RiExchangeDollarLine size={20} />
                        Exchange
                    </div>
                </NavbarLink>
                <NavbarLink pathTo={ROUTES.ABOUT}>
                    <div className='flex items-center gap-3'>
                        <AiFillQuestionCircle size={20} />
                        About
                    </div>
                </NavbarLink>
            </nav>
        </div>
    )
}

export default NavMenu