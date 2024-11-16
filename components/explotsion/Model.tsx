'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useExplode } from '@/hooks/useExplode'

export function Model(props) {
  const { nodes, materials } = useGLTF('models/teeth.glb')
  const group = useRef()
  useExplode(group, {
    distance: 0.1,
  })
  return (
    <group {...props} dispose={null} ref={group}>
      <group name="origin" rotation={[1.304, 0.916, 0.964]} scale={0.436}>
        <mesh
          name="Object_2"
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['defaultMat.004']}
          position={[0.196, -0.096, -0.223]}
          rotation={[-0.695, -0.849, -0.011]}
        />
      </group>
      <mesh
        name="Object_2_cell"
        castShadow
        receiveShadow
        geometry={nodes.Object_2_cell.geometry}
        material={materials['defaultMat.004']}
        position={[0.147, 0.254, 0.023]}
        rotation={[0.314, -0.112, -0.332]}
      />
      <mesh
        name="Object_2_cell001"
        castShadow
        receiveShadow
        geometry={nodes.Object_2_cell001.geometry}
        material={materials['defaultMat.004']}
        position={[-0.001, 0.325, -0.086]}
        rotation={[0.314, -0.112, -0.332]}
      />
      <mesh
        name="Object_2_cell002"
        castShadow
        receiveShadow
        geometry={nodes.Object_2_cell002.geometry}
        material={materials['defaultMat.004']}
        position={[0.047, 0.338, 0.063]}
        rotation={[0.314, -0.112, -0.332]}
      />
      <mesh
        name="Object_2_cell003"
        castShadow
        receiveShadow
        geometry={nodes.Object_2_cell003.geometry}
        material={materials['defaultMat.004']}
        position={[0.053, 0.255, 0.14]}
        rotation={[0.314, -0.112, -0.332]}
      />
      <mesh
        name="Object_2_cell004"
        castShadow
        receiveShadow
        geometry={nodes.Object_2_cell004.geometry}
        material={materials['defaultMat.004']}
        position={[-0.075, 0.23, 0.115]}
        rotation={[0.314, -0.112, -0.332]}
      />
      <mesh
        name="Object_2_cell005"
        castShadow
        receiveShadow
        geometry={nodes.Object_2_cell005.geometry}
        material={materials['defaultMat.004']}
        position={[0.004, 0.185, -0.085]}
        rotation={[0.314, -0.112, -0.332]}
      />
      <mesh
        name="Object_2_cell006"
        castShadow
        receiveShadow
        geometry={nodes.Object_2_cell006.geometry}
        material={materials['defaultMat.004']}
        position={[-0.09, -0.056, -0.092]}
        rotation={[0.314, -0.112, -0.332]}
      />
      <mesh
        name="Object_2_cell007"
        castShadow
        receiveShadow
        geometry={nodes.Object_2_cell007.geometry}
        material={materials['defaultMat.004']}
        position={[-0.152, 0.231, -0.044]}
        rotation={[0.314, -0.112, -0.332]}
      />
      <mesh
        name="Object_2_cell008"
        castShadow
        receiveShadow
        geometry={nodes.Object_2_cell008.geometry}
        material={materials['defaultMat.004']}
        position={[0.103, -0.061, 0.004]}
        rotation={[0.314, -0.112, -0.332]}
      />
      <mesh
        name="Object_2_cell009"
        castShadow
        receiveShadow
        geometry={nodes.Object_2_cell009.geometry}
        material={materials['defaultMat.004']}
        position={[-0.08, -0.032, 0.06]}
        rotation={[0.314, -0.112, -0.332]}
      />
      <mesh
        name="Object_2_cell010"
        castShadow
        receiveShadow
        geometry={nodes.Object_2_cell010.geometry}
        material={materials['defaultMat.004']}
        position={[0.014, -0.241, 0.141]}
        rotation={[0.314, -0.112, -0.332]}
      />
    </group>
  )
}

useGLTF.preload('models/teeth.glb')
