import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Desktop from '@/components/Desktop'
import CanvasLoader from '../Loader'


const Software = () => {
  return (
    <Canvas>
      <Suspense fallback={(<CanvasLoader/>)}>
      <Stage environment={'city'} intensity={0.5}>
        <Desktop/>
      </Stage>
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Software