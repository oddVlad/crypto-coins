import React, { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { THEME } from '../../constans/values';
import LoadingSpiner from '../../components/LoadingSpiner';
import Button from '../../components/Button';
import { IoIosArrowUp } from "react-icons/io";

const AppContainer: React.FC = () => {
    const [theme, setTheme] = useState<THEME>(
        localStorage.theme === THEME.DARK || window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT
    );
    const [isUpButtonVisible, setUpButtonVisible] = useState<boolean>(false);

    useEffect(() => {
        if (theme === THEME.DARK) {
            document.documentElement.classList.add(THEME.DARK)
        } else {
            document.documentElement.classList.remove(THEME.DARK)
        }
    }, [theme]);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);

        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    const checkScrollPosition = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        if (scrollY > 600) {
            setUpButtonVisible(true);
        }
        else {
            setUpButtonVisible(false);
        }
    }

    const handleThemeSwitch = (): void => {
        const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
        localStorage.theme = newTheme;
        setTheme(newTheme);
    };

    const moveButtonClickHandler = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="w-full min-h-screen bg-white text-slate-950 dark:bg-bg-300 dark:text-text-100 p-4 lg:p-3 sm:p-2 overflow-hidden flex flex-col items-stretch justify-between">
            <Header themeToggle={handleThemeSwitch} theme={theme} />

            <div className="mx-auto my-8 w-full">
                <Suspense fallback={<LoadingSpiner />}>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
            <div className={`fixed bottom-5 right-5  duration-200 z ${isUpButtonVisible ? 'opacity-1' : 'opacity-0'}`}>
                <Button clickHandler={moveButtonClickHandler}>
                    <IoIosArrowUp size={40} />
                </Button>
            </div>
        </div>
    )
};

export default AppContainer;