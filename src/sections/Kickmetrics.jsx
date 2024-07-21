import React, { useEffect } from 'react'
import { Headers, Tools, WebGit } from '../components';
import km1 from '../assets/km1.png';
import km2 from '../assets/km2.png';
import km3 from '../assets/km3.png'; 
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'


const Kickmetrics = () => {

    useEffect(() => {
        AOS.init({duration: 600, offset: 10})
    }, [])

return (
    <div id='kickmetrics' className='relative' >
        <Headers title={'KICK\nMETRICS'} number='01.' />
        <div className='sm:ml-[3em] flex justify-center sm:justify-start relative'>
            <Tools tools={['React', 'Tailwind CSS', 'Firebase', 'Framer Motion']} />
        </div>
        <div className='flex flex-wrap w-[90%] justify-between mx-auto my-[3em]'>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: -9, repeat: Infinity }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className='w-full md:w-[48%]'>
                <img data-aos="fade-up" src={km1} className='w-full mx-auto saturate-0'/>
            </motion.div>
            <div className='w-[90%] mx-auto sm:w-[48%] my-4 md:my-auto'>
                <p data-aos="fade-up" className='roboto leading-tight text-[1em] lg:text-[1.4em] text-dimteal mix-blend-difference'>KICKMETRICS is a soccer statistics and game application that allows users to search for various players and teams, providing insights on their backgrounds and sports stats across multiple seasons. Those who engage watching the sport can also view current standings from the top five soccer leagues in the world.</p>
            </div>
            <div className='w-[90%] mx-auto sm:w-[48%] my-4 md:my-auto'>
                <p data-aos="fade-up" className='roboto leading-tight text-[1em] lg:text-[1.4em] text-right text-dimteal mix-blend-difference'>By creating an account, users can easily access the stats of their favorite players and teams. Additionally, a soccer-themed game called ‘Footble’ offers fun interactivity, making the web application even more engaging.</p>
            </div>
            <div className='w-full md:w-[48%] mx-auto flex justify-between items-center pb-10'>
                <motion.img
                    initial={{ y: 0 }}
                    animate={{ y: -20, repeat: Infinity }}
                    transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    data-aos="fade-up" src={km2} className='w-[48%] mx-auto sm:w-[50%] saturate-0'/>
                <motion.img
                    initial={{ y: 0 }}
                    animate={{ y: -12, repeat: Infinity }}
                    transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    data-aos="fade-up" src={km3} className='w-[48%] mx-auto sm:w-[50%] saturate-0 mt-2 sm:mt-0 sm:pl-2'/>
            </div>
        </div>
        <div className='absolute pl-[3em] bottom-[.5em] sm:bottom-[2em]'>
            <WebGit url={'https://kickmetrics.netlify.app'} github={'https://github.com/melvin-giron-alvarez/kickmetrics'} webgit={true} />
        </div>
    </div>
)
}

export default Kickmetrics