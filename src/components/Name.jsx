import React, { useEffect, useState, useRef } from 'react'


const Name = () => {

    const [slide, setSlide] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [smallW, setSmallW] = useState(false);

    const smallWidth = () => {
        var viewportWidth = window.innerWidth;
        if (viewportWidth < 480) {
            setSmallW(true);
        } else {
            setSmallW(false);
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setSlide(true);
            } else {
                setSlide(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        smallWidth();
        window.addEventListener('resize', smallWidth);
        return () => {
            window.removeEventListener('resize', smallWidth);
        };
    }, []);

    const containerRef = useRef(null);
    const textRef = useRef(null);

    const resizeText = () => {
        const container = containerRef.current;
        const text = textRef.current;
        if (!container || !text) {
        return;
    }

        const containerWidth = container.offsetWidth;
        let min = 1;
        let max = 2500;

        while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = mid + "px";

        if (text.offsetWidth <= containerWidth) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
        text.style.fontSize = max + "px";
    };

    useEffect(() => {
        if (slide !== null) {
            setAnimating(true);
            setTimeout(() => setAnimating(false), 500);
        }
    }, [slide]);

    useEffect(() => {
        resizeText();
        window.addEventListener("resize", resizeText);
        return () => {
        window.removeEventListener("resize", resizeText);
        };
    }, []);

    useEffect(() => {
        resizeText();
    }, [slide]);

return (
    <>
    {smallW === true ? 
        <>
            <div className="w-auto flex justify-end z-[100]">
                <div className={`cursor-default z-[100] fixed pt-2 pr-2 tracking-tighter leading-none inter-bold text-center uppercase mix-blend-difference text-dimteal`} >
                    {"MELVIN".split("").map((child, idx) => (
                        <span className='hoverText cursor-pointer w-full text-[2.3em] sm:text-[4em]' key={idx}>
                            {child}
                        </span>
                    ))}
                    <h1 className='w-full text-[1.2em] sm:text-[2.4em]'>GIRON ALVAREZ</h1>
                </div>
            </div>
        </> 
        : slide === true ? 
        <>
            <div className="w-auto flex justify-end z-[100]">
            <div className={`${animating ? 'slide-right' : ''} cursor-default z-[100] fixed pt-1 pr-2 tracking-tighter leading-none inter-bold text-center uppercase mix-blend-difference text-dimteal`} >
                    {"MELVIN".split("").map((child, idx) => (
                        <span className='hoverText cursor-pointer w-full text-[2.5em] md:text-[3.4em]' key={idx}>
                            {child}
                        </span>
                    ))}
                    <h1 className='w-full text-[1.2em] md:text-[1.7em]'>GIRON ALVAREZ</h1>
                </div>
            </div>
        </> 
    : 
        <>
            <div className="flex justify-center z-[100]" ref={containerRef}>
            <span
            className={`fixed z-[100] px-3 pt-1 whitespace-nowrap tracking-tighter leading-none inter-bold text-center uppercase mix-blend-difference text-dimteal`}
            ref={textRef}>
                {"MELVIN  GIRON  ALVAREZ".split("").map((child, idx) => (
                    <span className='hoverText cursor-pointer' key={idx}>
                        {child}
                    </span>
                ))}
            </span>
            </div>
        </> 
        }
    </>
)
}

export default Name