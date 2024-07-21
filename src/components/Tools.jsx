import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";


const Tools = ({ tools, even }) => {
    const CYCLES_PER_LETTER = 4;
    const SHUFFLE_TIME = 150;
    const CHARS = "!@#$%^&*():{};|,.<>/?+=-/~";

    const scrambleWord = (word, intervalRef, setText) => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
        const scrambled = word.split("")
        .map((char, index) => {
            if (pos / CYCLES_PER_LETTER > index) {
            return char;
            }
            const randomCharIndex = Math.floor(Math.random() * CHARS.length);
            const randomChar = CHARS[randomCharIndex];
            return randomChar;
        })
        .join("");

        setText(scrambled);
        pos++;

      if (pos >= word.length * CYCLES_PER_LETTER) {
        clearInterval(intervalRef.current);
        setTimeout(() => scrambleWord(word, intervalRef, setText), SHUFFLE_TIME);
        }
    }, SHUFFLE_TIME);
    };

return (
    <div className={`flex flex-wrap w-[200px] sm:w-[400px] cursor-default mt-2 ${!even ? 'justify-start' : 'justify-end' }`}>
        {tools.map((tool, index) => {
        const [text, setText] = useState(tool);
        const intervalRef = useRef(null);

        useEffect(() => {
            scrambleWord(tool, intervalRef, setText);
            return () => clearInterval(intervalRef.current);
        }, [tool]);

        return (
            <motion.div
            key={index}
            className='border-2 w-[200px] lg:w-[190px] border-[#A9A9A9] text-center px-8 my-[-1px] mx-[-1px]'
            >
            <p className='roboto text-[.9em] text-dimteal mix-blend-difference'>{text}</p>
            </motion.div>
        );
        })}
    </div>
);
};

export default Tools;
