"use client";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '@/hoc/page';

const Gallery = () => {
  return (
    <section>
        <div className='flex items-center flex-col gap-4'>
          <h2 className='text-[10vw] md:text-[4vw] text-center text-[#9033fa] font-extrabold '>MY <span className='text-white'>GALLERY</span></h2>
            <div className='md:flex items-center md:flex-row gap-3 md:flex-nowrap flex-wrap flex flex-col z-0 justify-between'>
              <Tilt>
                <Image
                src='/assets/gallery/img01.jpg'
                width={413}
                height={416}
                className='rounded-md'
                />
                </Tilt>
                
                <Tilt>
                <Image
                src='/assets/gallery/img077.jpg'
                width={600}
                height={300}
                className='. rounded-md object-contain'
                />
                </Tilt>
                
                <Tilt>
                <Image
                src='/assets/gallery/img.jpg'
                width={413}
                height={416}
                className='rounded-md'
                />
                </Tilt>
            </div>
            <div className='md:flex items-center md:flex-row flex flex-col gap-3 z-0 justify-between'>
            <Tilt>
                <Image
                src='/assets/gallery/img02.jpg'
                width={413}
                height={416}
                className='rounded-md'
                />
                </Tilt>
                <div className=' flex flex-col justify-evenly w-[auto] '>
                <Tilt>
                <Image
                src='/assets/gallery/img010.jpg'
                width={600}
                height={300}
                className='. rounded-md object-contain'
                />
                </Tilt>
                <Link className='. cursor-pointer pt-1 z-10 m-1 text-center rounded-md text-[20px] w-[auto] h-[40px] bg-[#9153ff]' href='https://www.figma.com/proto/DvZuByz8902hyQiwTsIzYu/arbitrage?type=design&node-id=7-48&t=fi9UTk7yDGAlUCE0-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2' target='_blank' > 
                Prototyping </Link>
                </div>
                <Tilt>
                <Image
                src='/assets/gallery/img04.jpg'
                width={413}
                height={416}
                id='contact'
                className='rounded-md'
                />
                </Tilt>
            </div>
            <div className=''></div>
        </div>
    </section>
  )
}

export default SectionWrapper(Gallery)