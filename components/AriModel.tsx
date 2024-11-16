/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
'use client'
import React, { forwardRef, useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
// import { useControls } from 'leva'
import * as THREE from 'three'
interface AriModelProps {
  animation: string
  wireframe?: boolean
  headFollow?: boolean
  cursorFollow?: boolean
  [key: string]: unknown
}

interface GLTFResult {
  nodes: {
    Hips: THREE.Bone
    EyeLeft: THREE.SkinnedMesh
    EyeRight: THREE.SkinnedMesh
    Wolf3D_Head: THREE.SkinnedMesh
    Wolf3D_Teeth: THREE.SkinnedMesh
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
    Wolf3D_Outfit_Top: THREE.SkinnedMesh
    Wolf3D_Hair: THREE.SkinnedMesh
  }
  materials: {
    [key: string]: THREE.Material
    Wolf3D_Eye: THREE.Material
    Wolf3D_Skin: THREE.Material
    Wolf3D_Teeth: THREE.Material
    Wolf3D_Outfit_Bottom: THREE.Material
    Wolf3D_Outfit_Footwear: THREE.Material
    Wolf3D_Outfit_Top: THREE.Material
    Wolf3D_Hair: THREE.Material
  }
}

const AriaModel = forwardRef<THREE.Group, AriModelProps>(
  (
    {
      animation,
      wireframe = false,
      headFollow = false,
      cursorFollow = false,
      ...props
    },
    ref
  ) => {
    // const { animation } = props

    // const { headFollow, cursorFollow, wireframe } = useControls({
    //   headFollow: false,
    //   cursorFollow: false,
    //   wireframe: false,
    // })
    const group = useRef<THREE.Group>(null)
    const { nodes, materials } = useGLTF(
      '/assets/3dModels/ari.glb'
    ) as unknown as GLTFResult

    const { animations: gamingAnimation } = useFBX('/animation/Gaming.fbx')
    const { animations: standingAnimation } = useFBX('/animation/Standing.fbx')
    const { animations: fallingAnimation } = useFBX('/animation/Falling.fbx')

    gamingAnimation[0].name = 'Gaming'
    standingAnimation[0].name = 'Standing'
    fallingAnimation[0].name = 'Falling'

    const { actions } = useAnimations(
      [gamingAnimation[0], standingAnimation[0], fallingAnimation[0]],
      group
    )

    useEffect(() => {
      actions[animation]?.reset().fadeIn(0.5).play()
      return () => {
        actions[animation]?.reset().fadeOut(0.5)
      }
    }, [actions, animation])

    useEffect(() => {
      // Object.values(materials).forEach((material) => {
      //   material.wireframe = wireframe
      // })
      // Object.values(materials).forEach((material) => {
      //   if ('wireframe' in material) {
      //     ;(material as THREE.MeshStandardMaterial).wireframe = wireframe
      //   }
      // })
      // Object.values(materials).forEach((material) => {
      //   ;(
      //     material as THREE.MeshStandardMaterial | THREE.MeshBasicMaterial
      //   ).wireframe = wireframe
      // })
    }, [wireframe, materials])

    useFrame((state) => {
      if (headFollow && group.current) {
        // group.current.getObjectByName('Wolf3D_Head').lookAt(state.camera.position)
        const head = group.current.getObjectByName('Wolf3D_Head')
        if (head) head.lookAt(state.camera.position)
      }
      if (cursorFollow && group.current) {
        // const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1)
        // group.current.getObjectByName('Spine1').lookAt(target)
        const spine = group.current.getObjectByName('Spine1')
        const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1)
        if (spine) spine.lookAt(target)
      }
    })

    return (
      <group {...props} ref={group} dispose={null}>
        <axesHelper args={[5]} />
        <group
          ref={ref}
          // position={[-2.22, 2.73, 6]}
          position={[0, 0, 0]}
          // rotation={[-Math.PI / 2, 0.1, -Math.PI]}
        >
          <primitive object={nodes.Hips} />
          <skinnedMesh
            frustumCulled={false}
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            frustumCulled={false}
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            frustumCulled={false}
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            frustumCulled={false}
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <skinnedMesh
            frustumCulled={false}
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          {/* <skinnedMesh
        geometry={nodes.Wolf3D_Facewear.geometry}
        material={materials.Wolf3D_Facewear}
        skeleton={nodes.Wolf3D_Facewear.skeleton}
      /> */}
        </group>
      </group>
    )
  }
)

useGLTF.preload('/assets/3dModels/ari.glb')

AriaModel.displayName = 'AriaModel'

export default AriaModel
