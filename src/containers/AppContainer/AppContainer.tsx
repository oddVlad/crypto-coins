import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type IAppContainerProps = {};

const AppContainer: React.FC<IAppContainerProps> = () => {
    return (
        <div className="w-full min-h-screen bg-accent-100 text-slate-950 dark:bg-bg-300 dark:text-text-100 p-4 lg:p-3 sm:p-2 overflow-hidden flex flex-col items-stretch justify-between">
            <Header />

            <div className="mx-auto my-8 w-full">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
};

export default AppContainer;