import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Apartment from '@/components/Apartment'
import CanvasLoader from '../Loader'


const Architecture = () => {
  return (
    <Canvas className=''>
      <Suspense fallback={(<CanvasLoader/>)}>
          <Stage environment={'city'} intensity={1}>
            <Apartment/>
          </Stage>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Architecture