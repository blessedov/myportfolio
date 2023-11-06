"use client";
import React, { Suspense } from 'react'
import Image from 'next/image'
import styles from './Headimg.module.css'
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';



const Headerimg = () => {
  return (
    
    <div className=' md:w-[40%] flex flex-col items-center  h-[50vh] relative  '>
      <Canvas className='p-0 h-[auto] md:h-[auto] ' >
        <OrbitControls enableZoom={false}/>
        <ambientLight/>
        <Suspense>
          <Sphere args={[2.9,6,50]} >
          <MeshDistortMaterial 
          color={'#9033ff'}
          attach='material' 
          distort={0.2}
          speed={2}
          />
        </Sphere>
        </Suspense>
      </Canvas>
    
    <Image
    src='/img01.png'
    fill={true}
    id='about'
    className={`${styles.img} bg-[#9033ff]  object-contain z-0 rounded-full shadow-xl
     `}
    />
    
  </div>
  
  )
}

export default Headerimg