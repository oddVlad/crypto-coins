import React from 'react'
import { ROUTES } from '../../constans/values';
import NavbarLink from './NavbarLink';

interface INavbarProps { }

const Navbar: React.FC<INavbarProps> = () => {
    return (
        <nav className=" flex items-center justify-center text-lg flex-1 text-center">
            <NavbarLink pathTo={ROUTES.HOME}>
                Home
            </NavbarLink>
            <NavbarLink pathTo={ROUTES.ABOUT}>
                About
            </NavbarLink>
        </nav>
    )
}

export default Navbar