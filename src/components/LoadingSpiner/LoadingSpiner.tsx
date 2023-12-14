import React from 'react';
import { CgSpinner } from "react-icons/cg";


const LoadingSpiner: React.FC = () => {
    return (
        <CgSpinner size={40} className='animate-spin m-auto' />
    );
};

export default LoadingSpiner;