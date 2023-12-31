/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 globe.gltf --transform 
Files: globe.gltf [14.51MB] > globe-transformed.glb [1.1MB] (92%)
Author: Ghozali.Ghozalu (https://sketchfab.com/Ghozali.Ghozalu)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/globe-earth-9258dbc4ea4d4ba889a2cc24694aafcc
Title: Globe Earth
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/globe-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Extrude_2_Dirty_White_Glass_3_87.geometry} material={materials.Dirty_White_Glass_3} scale={[1, 1, 193.635]} />
      <mesh geometry={nodes.Extrude_2_Steel_87.geometry} material={materials.Steel} scale={[1, 1, 193.635]} />
      <mesh geometry={nodes.Extrude_2_Metal_Snappy_85.geometry} material={materials.Metal_Snappy} scale={[1, 1, 193.635]} />
      <mesh geometry={nodes.Extrude_2_Water_86.geometry} material={materials.Water} scale={[1, 1, 193.635]} />
      <mesh geometry={nodes.Extrude_2_Lime_44.geometry} material={materials.Lime} scale={[1, 1, 193.635]} />
    </group>
  )
}

useGLTF.preload('/globe-transformed.glb')
