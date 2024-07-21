import React, { useState, useEffect } from 'react'


const Modal = ({ ifsubmit, setSubmit }) => {

    if (!ifsubmit) return null;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (ifsubmit) {
            setVisible(true);
            setTimeout(() => {
            setVisible(false);
            setSubmit(false);
            }, 4000); 
        }
    }, [ifsubmit, setSubmit]);

return (
    <div
        onClick={() => setVisible(false)}
        className={`fixed h-screen leading-none place-content-center bg-dimblack z-[1000] inset-0 overflow-x-hidden transition-opacity duration-300 cursor-pointer ${
        visible ? 'opacity-75' : 'opacity-0'
        }`}
    >
        <div className='block w-[80%] lg:w-[50%] mx-auto inter-bold text-dimteal mix-blend-difference'>
            <h1 className='text-[3.3em] sm:text-[5em] md:text-[10em]'>Message</h1>
            <h1 className='text-[3.3em] sm:text-[5em] md:text-[10em] text-right'>Sent</h1>
        </div>
    </div>
)
}

export default Modal