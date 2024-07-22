import React, { useEffect } from 'react'
import { Skills } from '../components'
import AOS from 'aos'
import 'aos/dist/aos.css'


export const projects = [
    { id: '#kickmetrics', name: 'KICKMETRICS', num: 1 },
    { id: '#dolce', name: 'Dolce Espresso', num: 2 },
    { id: '#botanical', name: 'The Botanical Library', num: 3 },
]

const About = () => {

    useEffect(() => {
        AOS.init({duration: 600, offset: 10})
    }, [])

return (
    <div id='ABOUT' className='relative bg-dimblack noise cursor-default pb-16 glitch-container'>
        <h1 data-aos="fade-right" className='grady inter-bold text-dimteal mix-blend-difference text-[4em] md:text-[6em] ml-[.5em]'>ABOUT</h1>
        <div className='roboto text-dimteal text-[1em] sm:text-[1.4em] mix-blend-difference space-y-8 ml-[5em] md:ml-[10em] mb-[3em]'>
            <p data-aos="fade-up" className='leading-none w-[80%] md:w-[75%]'>Hello! I am a Frontend Web Developer passionate about building visually appealing web applications. I aim to showcase my problem-solving skills and design expertise while collaborating with talented developers to enhance my long-term proficiency.</p>
            <div>
            <p data-aos="fade-up" className='leading-none w-[75%]'>University of California, Irvine</p>
            <p data-aos="fade-up" className='w-[75%]'>[  Expected June 2025  |  B.A. Business Economics  ]</p>
            </div>
        </div>
        <Skills />
        <h1 data-aos="fade-left" id='WORKS' className='grady inter-bold text-dimteal mix-blend-difference text-[4em] sm:text-[6em] text-right mr-[.5em] mt-10'>INDEX</h1>
        <div className='w-[200px] sm:w-[300px] relative left-[10%] sm:left-[20%] md:left-[40%] lg:left-[50%]'>
            {projects.map((works) => (
                <a key={works.id} href={works.id} className='text-[1em] sm:text-[1.6em]'><p data-aos="fade-up"  className='roboto text-dimteal mix-blend-difference my-5'>0{works.num}.&nbsp;&nbsp;&nbsp;{works.name}</p></a>
            ))}
        </div>
    </div>
)
}

export default About