import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";


const JobTitle = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `[ ${hours}:${minutes}:${seconds} ]`;
    };

return (
    <div className='absolute left-0 right-0 mx-auto flex w-auto sm:w-[95%] flex-wrap-reverse px-3 items-center justify-between pt-[5em] sm:pt-[4.5em] md:pt-[5.5em] lg:pt-[8.7em] text-dimteal mix-blend-difference cursor-default'>
        <div className='inter-bold text-[.8em] sm:text-[1.2em]'>{formatTime(time)}</div>
        <div className='roboto leading-none items-center sm:flex space-x-4'>
            <h2 className='text-[1.6em] sm:text-[1.3em] md:text-[2em] text-right'>FRONTEND WEB DEVELOPER</h2>
            <div className='flex space-x-2 justify-end'>
                <a href='https://www.linkedin.com/in/melvin-giron-alvarez-85348a27a' target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-[2em] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300' /> </a> 
                <a href='https://github.com/melvin-giron-alvarez' target="_blank" rel="noopener noreferrer"><FaGithub className='text-[2em] cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'/> </a>
            </div>
        </div>
    </div>
)
}

export default JobTitle