import React, { useState } from 'react'
import { IPosition, ISpinElement } from '../../types/common'

interface ISpinElementProps {
    element: ISpinElement,
    position: IPosition,
}

const SpinElement: React.FC<ISpinElementProps> = ({ element: { image, title, describe }, position: { x, y } }) => {
    const [visible, setVisible] = useState<boolean>(false);

    const translateClass = { transform: `translate(${x}px,${y}px)` };

    return (
        <div className="cursor-pointer absolute" style={translateClass} onMouseEnter={() => { setVisible(true) }} onMouseLeave={() => { setVisible(false) }}>
            <img src={image} alt={title} className='w-24 h-auto z-30 relative' />
            {visible && <div className='bg-bg-100 text-white p-4 absolute right-0 top-[120%] rounded-md min-w-[500px] z-20'>
                <p className="font-bold mb-3">{title}</p>
                <p>{describe}</p>
            </div>}
        </div>
    )
}

export default SpinElement