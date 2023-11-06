import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
        <div className='h-[auto] pt-3 pb-4 w-full mx-auto my-0 border border-t-1 border-[#9033ff] border-r-0 border-l-0 bg-[#130ele]'>
            <div className='flex mx-auto flex-wrap justify-evenly items-center'>
                
                <div>
                    <div className=' w-full flex gap-5'>
                        <Link href='https://www.linkedin.com/in/toochukwu-onyemalu/' target='_blank'>
                        <Image
                        src='/assetss/linkedin.png'
                        width={50}
                        height={50}
                        alt='linkedin'
                        className='w-[30px] h-[30px]'
                        />
                        </Link>
                        <Link href="mailto:Toochukwuonyemalu@gmail.com" >
                        <Image
                        src='/assetss/email.png'
                        width={50}
                        height={50}
                        alt='email'
                        className='w-[30px] h-[30px]'
                        />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='mx-auto flex flex-col items-center w-full p-3'>
                <p className='item-center text-[#ccc] mx-auto text-[14px]'>Copyright@2023 Toochukwu Vincent Onyemalu </p>
                    <p className='text-center text-[#ccc] mx-auto text-[14px]'> All right reserved. Powered by Blessed-OV</p>
            </div>
            <p className='mx-auto text-[#ccc] p-3 text-center text-[15px] '>Terms and Conditions  |   <span>Privacy Policy</span></p>
        </div>
    </footer>
  )
}

export default Footer