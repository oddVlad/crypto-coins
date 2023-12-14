import React from 'react';
import { BiSolidError } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { ROUTES } from '../../constans/values';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();
    const goBackButtonClickHandler = () => {
        navigate(ROUTES.HOME);
    };

    return (
        <div className='container'>
            <div className='flex flex-col items-center justify-center'>
                <BiSolidError size={100} />
                <p className='text-4xl font-bold md:text-3xl'>404 Page Not found</p>
                <p className=' text-center my-4 w-1/2 md:w-full'>The link you followed probably broken or the page has been removed</p>
                <Button clickHandler={goBackButtonClickHandler}>
                    go home
                </Button>
            </div>
        </div>
    )
};

export default NotFoundPage;