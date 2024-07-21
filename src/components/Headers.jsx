import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Headers = ({ title, number, even }) => {

    useEffect(() => {
        AOS.init({duration: 600, offset: 20, once: true})
    }, [])

return (
    <div data-aos="fade-up" className={`flex mb-3 items-baseline inter-bold text-dimteal mix-blend-difference space-x-5 ${even === true ? 'text-right sm:justify-end' : ''}`}>
        <h1 className={`text-[2.8em] sm:text-[4.4em] md:text-[6em] mix-blend-difference ${even === true ? 'ml-[.5em]' : 'ml-[.5em]'}`}>{number}</h1>
        <h1 className={`text-[1.8em] sm:text-[3.2em] md:text-[4em] leading-none ${even === true ? 'pr-[.5em]' : 'pr-[.5em]'}`}>{title}</h1>
    </div>
)
}

export default Headers