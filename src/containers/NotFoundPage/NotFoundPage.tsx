import React from 'react'
import { BiSolidError } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();
    const goBackButtonClickHandler = () => {
        navigate(-1);
    }
    return (
        <div className='container'>
            <div className='flex flex-col items-center justify-center'>
                <BiSolidError size={100} />
                <p className='text-4xl font-bold'>404 Page Not found</p>
                <p className=' text-center my-4 w-1/2'>The link you followed probably broken or the page has been removed</p>
                <button className='mx-auto block px-6 capitalize py-4 my-5 text-center transition-colors rounded-full bg-bg-100 hover:bg-accent-200 sm:px-4 sm:py-3' onClick={goBackButtonClickHandler}>
                    go back
                </button>
            </div>
        </div>
    )
}

export default NotFoundPage