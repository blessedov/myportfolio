"use client";
import { OrbitControls, RenderTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'
import { DodecahedronGeometry } from 'three';
import { Text } from '@react-three/drei';

const Workmotion = () => {
  return (
    <Canvas>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight/>
        <Suspense>
            <mesh>
                <boxGeometry  args={[3,3,3]} />
                <meshNormalMaterial>
                    <RenderTexture attach='map'>
                        <color attach='background' args={['red']}/>
                        <Text fontSize={3}>
                            HELLO
                        </Text>
                    </RenderTexture>
                </meshNormalMaterial>
            </mesh>
        </Suspense>
    </Canvas>
  )
}

export default Workmotion