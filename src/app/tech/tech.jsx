"use client";
import React from "react";

import BallCanvas from "@/components/Workmotion/Ball";
import { technologies } from "@/components/Constants/Constants";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { SectionWrapper } from "@/hoc/page";


const Tech = () => {
  return (
    <>
    <div  className='md:flex hidden flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <motion.div variants={fadeIn('left','spring', 0.8, 1)}  className='md:w-28 md:h-28 w-15 h-15' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
      
    </div>
    <div id='gallery' className="w-2 h-2"></div>
    </>
  );
};

export default SectionWrapper(Tech);
