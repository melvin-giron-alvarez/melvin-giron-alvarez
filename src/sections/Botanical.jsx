import React, { useEffect } from 'react'
import { Headers, Tools, WebGit } from '../components';
import tbl1 from '../assets/tbl1.png';
import tbl2 from '../assets/tbl2.png';
import tbl3 from '../assets/tbl3.png';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'


const Botanical = () => {

    useEffect(() => {
        AOS.init({duration: 600, offset: 10})
    }, [])

return (
    <div id='botanical' className='relative' >
        <Headers title={'THE BOTANICAL LIBRARY'} number='03.' />
        <div className='sm:ml-[3em] flex justify-center sm:justify-start relative'>
            <Tools tools={['HTML', 'CSS', 'JavaScript', 'Firebase']} even={false} />
        </div>
        <div className='flex flex-wrap w-[90%] mx-auto my-[3em]'>
            <div className='flex flex-wrap-reverse w-full items-center'>
            <motion.img
                initial={{ y: 0 }}
                animate={{ y: -13, repeat: Infinity }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse" }}
                data-aos="fade-up" src={tbl3} className='w-full md:w-[50%] mx-auto saturate-0 mb-5'/>
            <motion.img
                initial={{ y: 0 }}
                animate={{ y: -9, repeat: Infinity }}
                transition={{ ease: "linear", duration: 1, repeat: Infinity, repeatType: "reverse" }}
                data-aos="fade-up" src={tbl1} className='w-[32%] md:w-[17%] mx-auto saturate-0 mb-5'/>
            <motion.img
                initial={{ y: 0 }}
                animate={{ y: -18, repeat: Infinity }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse" }}
                data-aos="fade-up" src={tbl2} className='w-[56%] md:w-[30%] mx-auto saturate-0 mb-5'/>
            </div>
            <div className='w-full sm:flex justify-evenly mt-[1em] mb-[4em] sm:mb-[8em]'>
                <p data-aos="fade-up" className='w-[90%] sm:w-[45%] mx-auto py-2 roboto leading-tight text-[1em] lg:text-[1.4em] text-dimteal mix-blend-difference'>For plant enthusiasts, The Botanical Library is a web application designed to explore data on a wide variety of plants. Users can sign up and gain access to a comprehensive search feature, allowing them to find detailed information on any plant using keywords.</p>
                <p data-aos="fade-up" className='w-[90%] text-right sm:text-left sm:w-[45%] mx-auto py-2 roboto leading-tight text-[1em] lg:text-[1.4em] text-dimteal mix-blend-difference'>Powered by the Perenual API, the database offers extensive information about each plant, including care, cultivation, origin, species, and characteristics. Additionally, detailed descriptions and explanations are provided to help plant lovers expand their knowledge of botany.</p>
            </div>
        </div>
        <div className='absolute pl-[3em] bottom-[2.5em] sm:bottom-[4em]'>
            <WebGit url={'https://melvin-giron-alvarez.github.io/thebotanicallibrary/index.html'} github={'https://github.com/melvin-giron-alvarez/thebotanicallibrary'} webgit={true} />
        </div>
    </div>
)
}

export default Botanical