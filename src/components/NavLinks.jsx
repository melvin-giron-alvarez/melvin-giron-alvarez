import React from 'react'

const navlinks = [
    { id: '#ABOUT', text: 'ABOUT'},
    { id: '#WORKS', text: 'WORKS'},
    { id: '#CONTACT', text: 'CONTACT'},
    { id: 'https://docs.google.com/document/d/e/2PACX-1vTbYP8y3MuoAEkk5TUaKWlZmepRVWZRUA10r4VNaf2uNxrm8BR0hvZKVhNKzn_5zEs1frN3IoMHI9EH/pub', text: 'RESUME', target: '_blank', rel: 'noopener noreferrer'}
]


const NavLinks = () => {
return (
    <div className='absolute w-[200px] sm:w-[400px] flex flex-wrap items-center left-0 right-0 mx-auto mt-[15.5em] md:ml-[4.5em]'>
        {navlinks.map((links) => (
            <a key={links.id} target={links.target}
                href={links.id} rel={links.rel}
                className='w-[100px] sm:w-[200px] border-2 text-[.9em] sm:text-[1.2em] border-[#A9A9A9] bg-[#2b2b2b] hover:bg-[transparent] transition-all duration-300'><p className='roboto text-dimteal mix-blend-difference text-center hover:scale-105 transition-transform'>{links.text}</p></a>
        ))}
    </div>
)
}

export default NavLinks