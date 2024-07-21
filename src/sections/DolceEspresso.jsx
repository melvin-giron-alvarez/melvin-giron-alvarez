import React, { useEffect } from 'react'
import { Headers, Tools, WebGit } from '../components';
import de1 from '../assets/de1.png';
import de2 from '../assets/de2.png';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'


const DolceEspresso = () => {

    useEffect(() => {
        AOS.init({duration: 600, offset: 10})
    }, [])

return (
    <div id='dolce' className='relative bg-dimblack noise' >
        <Headers title='DOLCE ESPRESSO' number='02.' even={true}/>
        <div className='sm:pr-[3em] relative justify-center sm:justify-end flex'>
            <Tools tools={['React', 'Tailwind CSS', 'Firebase']} even={true} />
        </div>
        <div className='flex flex-wrap w-[90%] mx-auto mt-[3em]'>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: -8, repeat: Infinity }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className='w-full md:w-[48%] md:mr-5 lg:mr-8 pb-2'>
                <img data-aos="fade-up" src={de1} className='w-full mx-auto saturate-0'/>
            </motion.div>
            <div className='w-[75%] md:w-[48%] mx-auto my-auto py-4'>
                <p data-aos="fade-up" className='roboto leading-tight text-[1em] lg:text-[1.4em] text-dimteal mix-blend-difference'>Taking on the approach of creating a web landing page, Dolce Espresso is a fictional website for a cafe restaurant based in Rome, Italy. Browsing the site offers a variety of sections for an informative and warm welcome.</p>
            </div>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: -13, repeat: Infinity }}
                transition={{ ease: "linear", duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className='w-full md:w-[38%] md:mr-5 lg:mr-10 py-4 md:pb-32'>
                <img data-aos="fade-up" src={de2} className='w-full saturate-0'/>
            </motion.div>
            <div className='w-[75%] md:w-[48%] mx-auto my-auto pt-4 pb-24'>
                <p data-aos="fade-up" className='roboto leading-tight text-[1em] lg:text-[1.4em] text-dimteal mix-blend-difference'>Built with React, it encompasses all the elements a typical cafe webpage would include. Visitors can navigate through sections like About, Events, Reservations, and browse a selection of coffee and pastries using a smooth swiper feature.</p>
            </div>
        </div>
        <div className='absolute right-[3em] bottom-[4em]'>
            <WebGit url={'https://dolceespresso.netlify.app'} github={'https://github.com/melvin-giron-alvarez/dolceespresso'} webgit={true} />
        </div>
    </div>
)
}

export default DolceEspresso