import React, { useEffect, useRef } from 'react'
import { Images, Barcode, WebGit, FormBox } from '../components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion, useScroll, useTransform } from 'framer-motion';


const Contact = () => {

    useEffect(() => {
        AOS.init({duration: 600, offset: 10})
    }, [])

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })
    const y = useTransform(scrollYProgress, [0,1], ['-10vh', '10vh']);

return (
    <motion.div
    ref={sectionRef}
    style={{ top: y }}
    className='h-screen bg-dimblack noise relative' >
        <Images />
        <h1 data-aos="fade-up" className='grady inter-bold text-dimteal mix-blend-difference text-[3.2em] sm:text-[4em] md:text-[6em] ml-[.5em] sm:ml-[2em] mr-[.5em]'>CONTACT</h1>
        <h1 className='grady absolute inter-bold text-dimteal mix-blend-difference text-[3.2em] sm:text-[4em] md:text-[6em] right-[1em] bottom-[.6em] rotate-180 hidden sm:flex'>CONTACT</h1>
        <FormBox />
        <div id='CONTACT' className='absolute left-[3em] md:left-[5.5em] bottom-[10.5em] md:bottom-[15em]'>
            <WebGit email={'mailto:melgironalvarez@gmail.com?subject=Reaching Out!'} 
                    linkedin={'https://www.linkedin.com/in/melvin-giron-alvarez-85348a27a'} 
                    github={'https://github.com/melvin-giron-alvarez'} webgit={false} />
        </div>
        <div className='absolute bottom-[2em] ml-[2em] border-l-2 border-[#A9A9A9]'>
            <Barcode />
            <p className='ml-3 roboto mt-[-15px] text-dimteal mix-blend-difference text-[.9em]'>Thank you for your time!</p>
            <p className='ml-3 inter-bold text-dimteal mix-blend-difference text-[.9em] sm:text-[1em]'>© 2024 | ALL RIGHTS RESERVED</p>
        </div>
    </motion.div>
)
}

export default Contact