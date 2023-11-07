"use client";
import React, { useState } from 'react'
import styles from './about.module.css'
import {motion} from 'framer-motion'
import { textVariant, fadeIn } from '@/utils/motion';
import { FaDownload } from 'react-icons/fa';
import Link from 'next/link';
import { SectionWrapper } from '@/hoc/page';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabNumber)=>{
    setActiveTab(tabNumber)
  }

  const confirmdownload = (event)=>{
    const confirmed = window.confirm("You\'re about to download the resume/CV")

    if(!confirmed){
     event.preventDefault();
    }
  }

  return (
    <section  className={`${styles.container} pt-2 h-[100vh] snap-center `}>
        <div className=' md:flex md:pt-20 md:justify-between md:gap-10 items-start'>
            <motion.div
             variants={textVariant()}
             className='md:w-[100%]'>
                <p className='text-[#cfcfcf] '>INTRODUCTION</p>
                <h2 className='text-[10vw] font-extrabold md:text-[4vw]  '>ABOUT <span className='text-[#9033fa]'>ME</span></h2>
               

                <motion.p variants={fadeIn('','', 0.8, 0.8)}
                className='text-[#cfcfcf] md:text-[1.4vw] '>I'm a passionate UI/UX designer and Architect, 
                    dedicated to crafting interfaces that captivate 
                    and engage users. With a keen eye for design and 
                    a deep understanding of user behavior, I'm committed 
                    to creating intuitive and visually appealing interfaces 
                    that leave a lasting impression. My goal is to enhance 
                    digital interactions through seamless and delightful design.</motion.p>
            
             </motion.div>

    <motion.div variants={fadeIn('','', 0.8, 1)} className={`${styles.tabscontainer}`}>
      <div className={`${styles.tabs}`}>
        <div
          className={`${styles.tab} ${activeTab === 1 ? ' bg-[#fff] text-[#1d1836]' : 'bg-[#915eff]'}`}
          onClick={() => handleTabClick(1)}
        >
          Experience
        </div>
        <div
          className={`${styles.tab} ${activeTab === 2 ? 'bg-[#fff] text-[#1d1836]' : 'bg-[#915eff]'}`}
          onClick={() => handleTabClick(2)}
        >
          Skills
        </div>
        <div
          className={`${styles.tab} ${activeTab === 3 ? 'bg-[#fff] text-[#1d1836]' : 'bg-[#915eff]'}`}
          onClick={() => handleTabClick(3)}
        >
          Education
        </div>
      </div>
      <div id='work' className={`${styles.tabcontent}  bg-[#1d1836] `}>
        {activeTab === 1 && <ul className=' list-disc space-y-1 '><h2 className='font-bold'>UI/UX DESIGN</h2>
        <p className=' text-[#cfcfcf] text-[15px] '>Freelancer</p>
          <li className='ml-5 md:text-[18px] text-[15px] '> Created responsive designs that work seamlessly 
              on both desktop and mobile devices.</li>
          <li className='ml-5 md:text-[18px] text-[15px] '> Developed wireframes, mockups, and prototypes 
            to communicate design concepts and iterate on 
             ideas.</li>
          <li className='ml-5 md:text-[18px] text-[15px] '> Collaborated with various clients to create user-centered and visually appealing designs for 
                  websites and mobile apps.</li>
          <li className='ml-5 md:text-[18px] text-[15px] '>  Worked closely with developers to ensure design 
                implementation aligned with the intended user.</li>
                <p className=' text-[#cfcfcf] text-[15px] '>2022 - current</p>
          <p className='font-bold '>FOR OTHER EXPERIENCES</p>
          <Link className='flex gap-2 w-max p-2 rounded-md bg-[#9153ff] ' 
          href='/Toochukwu_Resume.pdf' onClick={confirmdownload} download> Download Resume/CV <FaDownload size={20}/> </Link>
          </ul> }
        {activeTab === 2 && <ul className='list list-disc ml-5 space-y-1'>
          <li className='text-[15px] '>• UI/UX Design</li>
          <li className='text-[15px]'>• Architectural Design</li>
          <li className='text-[15px]'>• 3D Modeling</li>
          <li className='text-[15px]'>• Prototyping</li>
          <li className='text-[15px]'>• App Development</li>
          <li className='text-[15px]'>• Web Development</li>
          <li className='text-[15px]'>• Project Management</li>
          <li className='text-[15px]'>• AI Automation</li>
          <li className='text-[15px]'>• Prompt Engineering</li>
          <li className='text-[15px]'>• Virtualization</li>
          <li className='text-[15px]'>• Problem Solving</li>
          <li className='text-[15px]'>• Blogging</li>
          </ul>}
        {activeTab === 3 && <ul className='list list-disc'><h2 className='text-[15px] font-extrabold '>Yaba College of Technology, Lagos, Nigeria</h2>
                              <li className=' text-[15px] ml-5'>Higher National Diploma (HND), Architecture</li>
                              <h2 className='text-[15px] font-extrabold pt-2 '>Federal Polytechnic, Oko, Nigeria</h2>
                              <li className=' text-[15px] ml-5'>National Diploma (ND), Architecture</li>
                              <h2 className='text-[15px] font-extrabold pt-2 '>CERTIFICATIONS</h2>
                              <p className='text-[#ccc] text-[15px]'>New Horizons system solutions Ltd, Surulere lagos, Nigeria</p>
                              <li className='text-[15px]  ml-5 pt-3 '>Phython Programming</li>
                              <li className=' text-[15px] ml-5'>Data Analysis</li>
                              <li className=' text-[15px] ml-5'>Java</li>
                              </ul>}
      </div>
    </motion.div>
    </div>


    </section>
  )
}

export default SectionWrapper(AboutPage)
