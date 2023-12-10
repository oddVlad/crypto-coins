import React from 'react'

interface IButtonProps {
    children: JSX.Element | string | JSX.Element[],
    clickHandler: () => void,
}

const Button: React.FC<IButtonProps> = ({ children, clickHandler }) => {
    return (
        <button
            onClick={clickHandler}
            className='p-4 capitalize text-center dark:shadow-none transition-all rounded-full shadow-lg shadow-primary-300 hover:shadow-accent-300 dark:bg-bg-100 hover:dark:bg-accent-200 active:scale-95 active:shadow-primary-300  sm:p-3'>
            {children}
        </button>
    )
}

export default Button