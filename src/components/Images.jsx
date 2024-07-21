import React, { useState, useEffect } from 'react'
import one from '../assets/contact1.jpg';
import two from '../assets/contact2.jpg';
import three from '../assets/contact3.jpg';
import four from '../assets/contact4.jpg';
import five from '../assets/contact5.jpg';
import six from '../assets/contact6.jpg';
import seven from '../assets/contact7.jpg';
import eight from '../assets/contact8.jpg';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion';


const images = [
    { id: 1, img: one },
    { id: 2, img: two },
    { id: 3, img: three },
    { id: 4, img: four },
    { id: 5, img: five },
    { id: 6, img: six },
    { id: 7, img: seven },
    { id: 8, img: eight }
]

const Images = () => {

    const [next, setNext] = useState(0);

    useEffect (() => {
        AOS.init({duration: 600, offset: 10})
        const interval = setInterval(() => {
            setNext((prevIndex) => (prevIndex + 1 ) % images.length);
        }, 100);

        return () => clearInterval(interval);
    }, []);

return (
    <motion.div
    initial={{ y: 0 }}
    animate={{ y: -25, repeat: Infinity }}
    transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse" }}
    data-aos="fade-up" className='relative pl-[3em] pt-[2.5em] md:pt-[3em] saturate-0 hover:saturate-[.20]'>
        {images.map((pic, idx) => (
            <img key={pic.id} src={pic.img} className={`${idx === next ? 'opacity-100' : 'opacity-0'} transition-opacity absolute bg-cover bg-center w-[225px] h-[225px] sm:w-[250px] md:w-[350px] sm:h-[250px] md:h-[350px]`} />
        ))}
    </motion.div>
)
}

export default Images