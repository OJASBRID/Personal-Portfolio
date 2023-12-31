import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SlideRight } from './Animations/slide-right'
import { motion } from 'framer-motion'
import { navLinks } from '../constants'

const SideBar = () => {
  
  return (
    <motion.div 
      className='cursor-auto pointer-events-auto text-white text-lg font-extralight xs:block hidden'
      variants={{
        hidden: { translateX: "-70px" },
        visible: { translateX: "0px" }
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        ease: "easeIn"
      }}
    >
      <div className='h-screen sticky left-0 top-0 bg-[#080808] z-[100] flex flex-col items-center overflow-y-hidden'>
        <span className='flex flex-shrink-0 h-[45px] w-[45px] items-center justify-center my-[12.5px]'>
          <Link to={'/Personal-Portfolio/'}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <span className='text-[2.2rem] font-black text-3xl flex flex-shrink-0 w-[45px] h-[45px] items-center justify-center bg-[#111111] rounded-[4px]'>
              O
              <span className='text-[#0aff9d]'>.</span>
            </span>
          </Link>
        </span>
        {navLinks.map((link) => (
          <SlideRight 
            delay={link.delay}
            key={link.id}>
            <a
              href={`#${link.id}`} 
              className='w-full'>
              <div className='sidebar-ul'>
                {link.title}
              </div>
            </a>
          </SlideRight>
        ))}
      </div>
    </motion.div>
  )
}

export default SideBar
