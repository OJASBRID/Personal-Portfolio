import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p>I am a passionate Junior year Under Graduate at Indian Institute of Technology Kanpur, specializing in Mechanical Engineering.</p>
        <br></br>
        <p>I have excelled in my studies and beyond receiving best Technical project award as a intern at  Smart Materials, Structures and Systems (SMSS) Lab for development of back end for Social robot</p>
        <br></br>
        <p>Currently, I am coordinator for Game Development Club of IIT Kanpur, Leading a 3-tier team of 30 plus members to organize club events and workshops for campus students as well as develop games and participate in Competitions. I also have experience in development of framework for robot using ROS2 in python.</p>
        <br></br>
        <p>Along with these , I have also been a part of Udghosh'22 Events Team and Esports society IIT Kanpur. I have been part of organizing and management of multiple events with participation over 500 students. </p>
        <br></br>
        <p>With a strong foundation in programming languages like C, C++, Python, and C#, as well as leadership and problem-solving skills, I am open to new opportunities and collaborations in Mechanical Engineering and beyond. Let's connect and explore how we can make a positive impact together.</p>


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
