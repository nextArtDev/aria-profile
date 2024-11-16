'use client'
import React from 'react'
import { Float, OrbitControls, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model } from './Model'

type Props = {}

function Scene({}: Props) {
  return (
    <Canvas
      className=" w-screen h-screen min-h-screen"
      shadows
      camera={{ position: [0, 0, 5], fov: 30 }}
    >
      <ambientLight intensity={3} />
      <Float floatIntensity={2} speed={2}>
        <directionalLight intensity={4} />
        <OrbitControls />
        <color attach="background" args={['#c96e5e']} />
        <ScrollControls pages={4}>
          <Model />
          {/* <Experience /> */}
        </ScrollControls>
      </Float>
    </Canvas>
  )
}

export default Scene
