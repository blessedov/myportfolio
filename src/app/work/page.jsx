"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import styles from './work.module.css'
import Uiuxdesign from '@/components/uiuxdesign/Uiuxdesign';
import Architecture from '@/components/Architecture/Architecture';
import Software from '@/components/Software/Software';
import { SectionWrapper } from '@/hoc/page';

const WorkPage = () => {
  const [job , setjob] = useState('UI/UX DESIGN')

  const works = [
    
     'UI/UX DESIGN',
       
    'ARCHITECTURE',
       
    'SOFTWARE',
       
  ];

  return (
    <section  className='h-[80vh] mt-[30px] mb-10'>
      <h2 className='text-[#9033fa] text-[10vw] md:text-[4vw] font-extrabold '>MY <span className='text-[#fff] '>WORKS</span></h2>
      <div className='md:flex h-[auto] md:justify-between md:items-center '>
        <div className='w-[100%]  h-[25vh] md:h-[40vh] flex md:mb-0 mb-5 flex-1'>
          {job === 'UI/UX DESIGN' ? (<Uiuxdesign/>): job === 'ARCHITECTURE' ? (<Architecture/>) :  (<Software/>)  }
        </div>

        <div className='flex-1 h-[50vh]  flex w-[100%] items-center'>
          <ul className=' flex flex-col flex-1 items-center  gap-4'>
            {works.map((item)=>(
              <li  onClick={()=> setjob(item)} className={`${styles.transparency} md:text-[4vw] text-[10vw] `} key={item} text={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(WorkPage)