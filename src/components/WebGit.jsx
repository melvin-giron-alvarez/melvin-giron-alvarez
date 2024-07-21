import React from 'react'
import { motion } from "framer-motion";

const WebGit = ({ url, github, webgit, email, linkedin }) => {

    const DURATION = 0.25;
    const STAGGER = 0.025;


return (
    <div className='flex flex-wrap inter-bold text-[1em] space-x-5'>
        {webgit === true ? 
        <>
        <motion.a
            initial="initial"
            whileHover="hovered"
            className="cursor-pointer text-dimteal mix-blend-difference relative block overflow-hidden whitespace-nowrap"
            style={{ lineHeight: 0.92, }}
            href={url} target="_blank" rel="noopener noreferrer">
        <div>[&nbsp;&nbsp;
        {'Website'.split("").map((l, i) => (
            <motion.span
            variants={{ initial: { y: 0, }, hovered: { y: "-100%", }, }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i, }}
            className="inline-block"
            key={i}>
            {l}
            </motion.span>
            ))}&nbsp;&nbsp;]
        </div>
        <div className="absolute inset-0">[&nbsp;&nbsp;
        {'Website'.split("").map((l, i) => (
        <motion.span
            variants={{ initial: { y: "100%", }, hovered: { y: 0, }, }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i, }}
            className="inline-block"
            key={i}>
            {l}
            </motion.span>
            ))}&nbsp;&nbsp;]
        </div>
        </motion.a>


        <motion.a
            initial="initial"
            whileHover="hovered"
            className="cursor-pointer text-dimteal mix-blend-difference  relative block overflow-hidden whitespace-nowrap"
            style={{ lineHeight: 0.92, }}
            href={github} target="_blank" rel="noopener noreferrer">
        <div>[&nbsp;&nbsp;
        {'Code'.split("").map((l, i) => (
            <motion.span
            variants={{ initial: { y: 0, }, hovered: { y: "-100%", }, }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i, }}
            className="inline-block"
            key={i}>
            {l}
            </motion.span>
            ))}&nbsp;&nbsp;]
        </div>
        <div className="absolute inset-0">[&nbsp;&nbsp;
        {'Code'.split("").map((l, i) => (
        <motion.span
            variants={{ initial: { y: "100%", }, hovered: { y: 0, }, }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i, }}
            className="inline-block"
            key={i}>
            {l}
            </motion.span>
            ))}&nbsp;&nbsp;]
            </div>
        </motion.a>
        </> 
        : 
        <>
        <motion.a
            initial="initial"
            whileHover="hovered"
            className="mt-2 cursor-pointer text-dimteal mix-blend-difference relative block overflow-hidden whitespace-nowrap"
            style={{ lineHeight: 0.92, }}
            href={email}>
        <div>[&nbsp;&nbsp;
        {'Email'.split("").map((l, i) => (
            <motion.span
            variants={{ initial: { y: 0, }, hovered: { y: "-100%", }, }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i, }}
            className="inline-block"
            key={i}>
            {l}
            </motion.span>
            ))}&nbsp;&nbsp;]
        </div>
        <div className="absolute inset-0">[&nbsp;&nbsp;
        {'Email'.split("").map((l, i) => (
        <motion.span
            variants={{ initial: { y: "100%", }, hovered: { y: 0, }, }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i, }}
            className="inline-block"
            key={i}>
            {l}
            </motion.span>
            ))}&nbsp;&nbsp;]
        </div>
        </motion.a>

        <motion.a
            initial="initial"
            whileHover="hovered"
            className="mt-2 cursor-pointer text-dimteal mix-blend-difference  relative block overflow-hidden whitespace-nowrap"
            style={{ lineHeight: 0.92, }}
            href={linkedin} target="_blank" rel="noopener noreferrer">
        <div>[&nbsp;&nbsp;
        {'LinkedIn'.split("").map((l, i) => (
            <motion.span
            variants={{ initial: { y: 0, }, hovered: { y: "-100%", }, }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i, }}
            className="inline-block"
            key={i}>
            {l}
            </motion.span>
            ))}&nbsp;&nbsp;]
        </div>
        <div className="absolute inset-0">[&nbsp;&nbsp;
        {'LinkedIn'.split("").map((l, i) => (
        <motion.span
            variants={{ initial: { y: "100%", }, hovered: { y: 0, }, }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i, }}
            className="inline-block"
            key={i}>
            {l}
            </motion.span>
            ))}&nbsp;&nbsp;]
            </div>
        </motion.a>

        <motion.a
            initial="initial"
            whileHover="hovered"
            className="mt-2 cursor-pointer text-dimteal mix-blend-difference  relative block overflow-hidden whitespace-nowrap"
            style={{ lineHeight: 0.92, }}
            href={github} target="_blank" rel="noopener noreferrer">
        <div>[&nbsp;&nbsp;
        {'GitHub'.split("").map((l, i) => (
            <motion.span
            variants={{ initial: { y: 0, }, hovered: { y: "-100%", }, }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i, }}
            className="inline-block"
            key={i}>
            {l}
            </motion.span>
            ))}&nbsp;&nbsp;]
        </div>
        <div className="absolute inset-0">[&nbsp;&nbsp;
        {'GitHub'.split("").map((l, i) => (
        <motion.span
            variants={{ initial: { y: "100%", }, hovered: { y: 0, }, }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i, }}
            className="inline-block"
            key={i}>
            {l}
            </motion.span>
            ))}&nbsp;&nbsp;]
            </div>
        </motion.a>
        </> }
    </div>
)
}

export default WebGit