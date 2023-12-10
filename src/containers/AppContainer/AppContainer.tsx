import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { THEME } from '../../constans/values';

type IAppContainerProps = {};

const AppContainer: React.FC<IAppContainerProps> = () => {
    const [theme, setTheme] = useState<THEME>(
        localStorage.theme === THEME.DARK || window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT
    );

    useEffect(() => {
        if (theme === THEME.DARK) {
            document.documentElement.classList.add(THEME.DARK)
        } else {
            document.documentElement.classList.remove(THEME.DARK)
        }
    }, [theme]);

    const handleThemeSwitch = (): void => {
        const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
        localStorage.theme = newTheme;
        setTheme(newTheme);
    }

    return (
        <div className="w-full min-h-screen bg-white text-slate-950 dark:bg-bg-300 dark:text-text-100 p-4 lg:p-3 sm:p-2 overflow-hidden flex flex-col items-stretch justify-between">
            <Header themeToggle={handleThemeSwitch} theme={theme} />

            <div className="mx-auto my-8 w-full">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
};

export default AppContainer;