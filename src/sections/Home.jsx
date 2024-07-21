import React, { useRef } from 'react'
import one from '../assets/one.jpg'
import { Name, JobTitle, NavLinks } from '../components'
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })
    const y = useTransform(scrollYProgress, [0,1], ['-30vh', '40vh']);

return (
    <>
        <Name />
        <JobTitle />
        <NavLinks />
        <motion.div ref={sectionRef} 
                className='relative h-[110vh] lg:h-[130vh] -z-[1000]'
                style={{ backgroundImage: `url(${one})`, top: y }}>
            <section className='-z-10 absolute bg-cover bg-no-repeat bg-right-top w-full h-full' style={{ backgroundImage: `url(${one})` }}></section>
        </motion.div>
    </>
)
}

export default Home