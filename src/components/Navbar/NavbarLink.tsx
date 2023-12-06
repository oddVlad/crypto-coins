import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constans/values'

interface INavbarLinkProps {
    pathTo: ROUTES,
    children: string | JSX.Element
}

const NavbarLink: React.FC<INavbarLinkProps> = ({ pathTo, children }) => {
    return (
        <NavLink
            to={pathTo}
            className={({ isActive, isPending }) =>
                isPending
                    ? ""
                    : isActive
                        ? "text-primary-300 hover:bg-bg-100 p-4 block rounded-lg"
                        : "transition hover:bg-bg-100 p-4 block rounded-lg"
            }
        >
            {children}
        </NavLink>
    )
}

export default NavbarLink