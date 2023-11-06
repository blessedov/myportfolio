"use client";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '@/hoc/page';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/utils/motion';

const Gallery = () => {
  return (
    <section>
        <motion.div variants={textVariant()} className='flex items-center flex-col gap-4'>
          <h2 className='text-[10vw] md:text-[4vw] text-center text-[#9033fa] font-extrabold '>MY <span className='text-white'>GALLERY</span></h2>
            <motion.div variants={fadeIn('right','spring', 0.8, 0.8)} className='md:flex items-center md:flex-row gap-3 md:flex-nowrap flex-wrap flex flex-col z-0 justify-between'>
              <Tilt>
                <Image
                src='/assets/gallery/img01.jpg'
                width={413}
                height={416}
                alt='uiux design'
                className='rounded-md'
                />
                </Tilt>
                <div>
                <Tilt>
                <Image
                src='/assets/gallery/img077.jpg'
                width={600}
                height={300}
                alt='uiux design'
                className='. rounded-md object-contain'
                />
                </Tilt>
                <div className='. pt-1 z-10 m-1 text-center text-[13px] w-[auto] h-[40px] bg-[#000]' target='_blank' > <p>
                A responsive design that work seamlessly 
               on both desktop and mobile devices.</p> </div>
                </div>
                <Tilt>
                <Image
                src='/assets/gallery/img.jpg'
                width={413}
                height={416}
                alt='uiux design'
                className='rounded-md'
                />
                </Tilt>
            </motion.div>

            <motion.div variants={fadeIn('left','spring', 0.8, 0.8)} className='md:flex items-center md:flex-row flex flex-col gap-3 z-0 justify-between'>
            <Tilt>
                <Image
                src='/assets/gallery/img02.jpg'
                width={413}
                height={416}
                alt='uiux design'
                className='rounded-md'
                />
                </Tilt>
                <div className=' flex flex-col justify-evenly w-[auto] '>
                <Tilt>
                <Image
                src='/assets/gallery/img010.jpg'
                width={600}
                height={300}
                alt='uiux design'
                className='. rounded-md object-contain'
                />
                </Tilt>
                <Link className='. cursor-pointer pt-1 z-10 m-1 text-center rounded-md text-[20px] font-bold w-[auto] h-[40px] bg-[#9153ff]' href='https://www.figma.com/proto/DvZuByz8902hyQiwTsIzYu/arbitrage?type=design&node-id=7-48&t=fi9UTk7yDGAlUCE0-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2' target='_blank' > 
                Prototyping </Link>
                </div>
                <Tilt>
                <Image
                src='/assets/gallery/img04.jpg'
                width={413}
                height={416}
                alt='uiux design'
                id='contact'
                className='rounded-md'
                />
                </Tilt>
            </motion.div>
            <div className=''></div>
        </motion.div>
    </section>
  )
}

export default SectionWrapper(Gallery)