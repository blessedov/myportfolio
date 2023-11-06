"use client";
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Earth2 from '@/components/Earth2'
import CanvasLoader from '../Loader'

const Contactglobe = () => {
  return (
    
    <Canvas className=''>
      <OrbitControls enableZoom={false} autoRotateSpeed={7} autoRotate />
      <Suspense fallback={(<CanvasLoader/>)}>
        <Stage environment='city' intensity={1}>
          <Earth2/>
        </Stage>
      </Suspense>
    </Canvas>
  )
}

export default Contactglobe