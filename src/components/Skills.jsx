import React from 'react'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoFirebase } from "react-icons/io5"
import { FaReact, FaFigma, FaBootstrap, FaPython, FaGitAlt, FaWordpress } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiNetlify } from "react-icons/si";

const icons = [
  { id: 1, icon: IoLogoHtml5, name: "HTML5" },
  { id: 2, icon: IoLogoCss3, name: "CSS3" },
  { id: 3, icon: IoLogoJavascript, name: "JavaScript" },
  { id: 4, icon: FaReact, name: "React" },
  { id: 5, icon: RiTailwindCssFill, name: "Tailwind CSS" },
  { id: 6, icon: FaBootstrap, name: "Bootstrap" },
  { id: 7, icon: FaFigma, name: "Figma" },
  { id: 8, icon: FaPython, name: "Python" },
  { id: 9, icon: IoLogoFirebase, name: "Firebase" },
  { id: 10, icon: FaGitAlt, name: "Git" },
  { id: 11, icon: SiMongodb, name: "MongoDB" },
  { id: 12, icon: SiNetlify, name: "Netlify" },
  { id: 13, icon: FaWordpress, name: "WordPress" },
  { id: 14, icon: IoLogoHtml5, name: "HTML5" },
  { id: 15, icon: IoLogoCss3, name: "CSS3" },
  { id: 16, icon: IoLogoJavascript, name: "JavaScript" },
  { id: 17, icon: FaReact, name: "React" },
  { id: 18, icon: RiTailwindCssFill, name: "Tailwind CSS" },
  { id: 19, icon: FaBootstrap, name: "Bootstrap" },
  { id: 20, icon: FaFigma, name: "Figma" },
  { id: 21, icon: FaPython, name: "Python" },
  { id: 22, icon: IoLogoFirebase, name: "Firebase" },
  { id: 23, icon: FaGitAlt, name: "Git" },
  { id: 24, icon: SiMongodb, name: "MongoDB" },
  { id: 25, icon: SiNetlify, name: "Netlify" },
  { id: 26, icon: FaWordpress, name: "WordPress" },
];

const Skills = () => {
  return (
    <div className='w-full border-y-2 items-center border-dimteal mix-blend-difference overflow-hidden'>
      <div className='slide-small md:slide-container flex py-1 items-center'>
      {icons.map((item) => {
        const IconComponent = item.icon; 
        return (
          <div key={item.id} className='p-1 mx-5 text-dimteal mix-blend-difference hover:bg-dimgrey hover:scale-105 hover:text-[#000] transition-all ease-in duration-200'>
            <IconComponent className='text-[3.5em] mx-auto' />
            <p className='w-full roboto leading-none mt-2 text-[.9em] text-center'>{item.name}</p>
          </div>
        )})}
        </div>
    </div>
  )
}

export default Skills