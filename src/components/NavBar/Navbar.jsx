"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import {FaTimes, FaBars} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setnav] = useState(false)
    const Menus = [
        {
            name:'ABOUT',
            url:'#about',
            id:1,
        },
        {
            name:'WORKS',
            url:'#work',
            id:2,
        },
        {
            name:'GALLERY',
            url:'#gallery',
            id:4,
        },
        {
            name:'CONTACT',
            url:'#contact',
            id:3,
        },
    ];
  return (
    <div className='md:w-[90%] w-full bg-[#130e1e] left-0 top-0 right-0 fixed z-30 border-b-[#9033fa] border-b-1 pb-1 border-l-0 border-r-0 border-t-0 bor border mx-auto'>
        <nav className='flex justify-between md:w-[100%] mt-[20px] w-[90%] mx-auto items-center'>
            <Link href='/'> <h2 className='font-bold cursor-pointer text-[20px] md:text-[30px]'>BlesseD-<span className='text-[#9153ff]'>WorlD</span></h2></Link>
            <ul className=' hidden md:flex gap-5'>
           {Menus.map((menu, index)=>(
            <Link className='font-semibold text-[14px] rounded-sm  bg-[#9033fa]  hover:bg-[#1111] p-1' key={index} href={menu.url}>{menu.name}</Link>
           ))}
           </ul>

           <div 
           className='md:hidden z-20 relative'
           onClick={()=>setnav(!nav)}>
             {nav ? <FaTimes size={30} color='red'/> : <FaBars size={30}/>}
           </div>

           {nav &&(
            <ul className='absolute border border-b-[#9033fa] pt-[100px] md:hidden bg-black left-0 flex justify-evenly gap-3 p-[10px] w-[100%] '>
                {Menus.map((menu,index)=>(
                    <Link onClick={()=>setnav(!nav)} className='font-semibold text-[14px] rounded-sm  bg-[#9153ff] p-1 ' key={index} href={menu.url}>{menu.name}</Link>
                ))}
            </ul>
           )}
        </nav>
    </div>
  )
}

export default Navbar