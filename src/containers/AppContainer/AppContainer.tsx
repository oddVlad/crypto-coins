import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

type IAppContainerProps = {};

const AppContainer: React.FC<IAppContainerProps> = () => {
    return (
        <div className="w-full min-h-screen bg-accent-100 text-slate-950 dark:bg-bg-300 dark:text-text-100 p-3 lg:p-4">
            <div className="container">
                <Header />

                <div className="mx-auto my-8">
                    <Outlet />
                </div>

            </div>
        </div>
    )
};

export default AppContainer;