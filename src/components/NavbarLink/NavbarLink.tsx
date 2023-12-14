import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constans/values';

interface INavbarLinkProps {
    pathTo: ROUTES,
    children: string | JSX.Element
};

const NavbarLink: React.FC<INavbarLinkProps> = ({ pathTo, children }) => {
    return (
        <NavLink
            to={pathTo}
            className={({ isActive, isPending }) =>
                isPending
                    ? ""
                    : isActive
                        ? "bg-accent-100 dark:bg-transparent dark:text-accent-300 hover:dark:text-white hover:dark:bg-accent-200 p-4 block shadow-lg dark:shadow-transparent  rounded-lg"
                        : "bg-white dark:bg-transparent hover:bg-accent-100 dark:text-white hover:dark:bg-accent-200 transition p-4 shadow-lg dark:shadow-transparent rounded-lg"
            }
        >
            {children}
        </NavLink>
    )
};

export default NavbarLink;