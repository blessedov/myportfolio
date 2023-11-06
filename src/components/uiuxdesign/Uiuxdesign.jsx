import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Laptop from '@/components/Laptop'
import CanvasLoader from '../Loader'

const Uiuxdesign = () => {
  return (
    
    <Canvas className=''>
      <OrbitControls enableZoom={false} />
      <Suspense fallback={(<CanvasLoader/>)}>
        <Stage environment='city' intensity={1}>
          <Laptop/>
        </Stage>
      </Suspense>
    </Canvas>
  )
}

export default Uiuxdesign