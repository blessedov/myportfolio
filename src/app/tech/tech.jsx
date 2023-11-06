"use client";
import React from "react";

import BallCanvas from "@/components/Workmotion/Ball";
import { technologies } from "@/components/Constants/Constants";

const Tech = () => {
  return (
    <>
    <div className='md:flex hidden flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div  className='md:w-28 md:h-28 w-15 h-15' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      
    </div>
    <div id='gallery' className="w-2 h-2"></div>
    </>
  );
};

export default Tech;
