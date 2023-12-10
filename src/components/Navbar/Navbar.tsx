import React from 'react'
import { ROUTES } from '../../constans/values';
import NavbarLink from '../NavbarLink';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-end justify-center text-lg gap-3 text-center md:hidden">
            <NavbarLink pathTo={ROUTES.HOME}>
                Home
            </NavbarLink>
            <NavbarLink pathTo={ROUTES.EXCHANGES}>
                Exchange
            </NavbarLink>
            <NavbarLink pathTo={ROUTES.ABOUT}>
                About
            </NavbarLink>
        </nav>
    )
}

export default Navbar