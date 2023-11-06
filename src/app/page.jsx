import React from 'react'
import Link from 'next/link'
import AboutPage from './about/page'
import WorkPage from './work/page'
import ContactPage from './contact/page'
import styles from './home.module.css'
import Image from 'next/image'
import Headerimg from '@/components/Headerimg/Headerimg'
import Gallery from './gallery/page'
import Tech from './tech/tech'
import linkedin from '@/components/assetss/linkedin.png'



const HomePage = () => {
  

  return (
    <div className={`${styles.container} w-[90%] mx-auto `}>
      <section className='mt-10  md:flex-row pt-9 h-[80vh] md:flex md:justify-between md:items-center flex flex-col items-center  w-full'>
        <div className='mx-auto md:w-[80%] flex-1 flex md:left-0 items-start  justify-between relative'>
          <div className='flex  flex-col items-center'>
            <div className='bg-[#9153ff] rounded-full w-5 h-5'></div>
            <div className=' w-1 h-[250px] md:h-[200px] bg-gradient-to-t from-[#915eff00] to-[#915eff]  '></div>
          </div>
          <div className='right-10  flex flex-1'>
            <div>
              <p className='text-[#ccc] text-[12px] md:text-[15px] pl-1 '>UI/UX DESIGNER | ARCHITECT | DEVELOPER </p>
            <h1 className='text-[10vw] font-extrabold md:text-[5vw] '>Hi, I'm
            <span className='text-[#9033fa] '> Toochukwu</span></h1>
            <p className=' md:text-[1.5vw] text-[5vw] '>I'm Toochukwu Vincent Onyemalu, a passionate UI/UX designer dedicated to crafting interfaces that captivate and engage users.</p>
            <Link className='flex items-center py-2 w-max' href='https://www.linkedin.com/in/toochukwu-onyemalu/' target='_blank'>
            <Image
            src={linkedin}
            height={40}
            width={40}
            alt='linkedin'
            className=''
            />
            </Link>
            </div>
          </div>
        </div>
       <Headerimg/>
      </section>
      <AboutPage/>
      
      <WorkPage/>
      <Tech/>
      <Gallery/>
      <ContactPage/>
    </div>
  )
}

export default HomePage