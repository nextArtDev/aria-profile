'use client'

import { useRef } from 'react'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import { Group, Object3DEventMap } from 'three'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import FloatingCan from '@/components/FloatingCan'
import { useStore } from '@/hooks/useStore'
import AriModel from '../AriModel'
import RoomModel from '../RoomModel'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type Props = {}

export default function Scene({}: Props) {
  const isReady = useStore((state) => state.isReady)

  const ariaRef = useRef<Group>(null)
  const roomRef = useRef<Group>(null)
  // const can3Ref = useRef<Group>(null)
  // const can4Ref = useRef<Group>(null)
  // const can5Ref = useRef<Group>(null)

  const AriaGroupRef = useRef<Group<Object3DEventMap>>(null)
  const roomGroupRef = useRef<Group<Object3DEventMap>>(null)

  const groupRef = useRef<Group<Object3DEventMap>>(null)

  // const FLOAT_SPEED = 1.5

  useGSAP(() => {
    if (
      !ariaRef.current ||
      !roomRef.current ||
      !AriaGroupRef.current ||
      !roomGroupRef.current ||
      !groupRef.current
      // ||
      // !can3Ref.current ||
      // !can4Ref.current ||
      // !can5Ref.current ||
    )
      return

    isReady()

    // Set can starting location
    // gsap.set(ariaRef.current.position, { x: 1.3, y: -0.42, z: -2.9 })
    // gsap.set(ariaRef.current.rotation, {
    //   x: -Math.PI / 2,
    //   y: 0,
    //   z: Math.PI / 2,
    // })

    gsap.set(roomRef.current.position, { x: 0.5, y: -0.5, z: -2 })
    // gsap.set(roomRef.current.rotation, { z: 0.5 })

    // gsap.set(can3Ref.current.position, { y: 5, z: 2 })
    // gsap.set(can4Ref.current.position, { x: 2, y: 4, z: 2 })
    // gsap.set(can5Ref.current.position, { y: -5 })

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: 'back.out(1.4)',
      },
    })
    // we animate timeline if we have'nt scroll yet, it means we don't set an animation when we scrolled
    if (window.scrollY < 20) {
      // rotation and position at first glance and before scrolling
      introTl
        .from(AriaGroupRef.current.position, { y: -5, x: 1 }, 0)
        .from(AriaGroupRef.current.rotation, { z: 3 }, 0)
        .from(roomGroupRef.current.position, { y: 5, x: 1 }, 0)
        .from(roomGroupRef.current.rotation, { z: 3 }, 0)
    }

    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    })

    scrollTl
      // Rotate can group
      // .to(groupRef.current.rotation, { y: Math.PI * 2 })
      .to(groupRef.current.rotation, { y: Math.PI * 2 })

      // // Can 1 - black cherry
      // .to(ariaRef.current.position, { x: -0.2, y: -0.7, z: -2 }, 0)
      // .to(ariaRef.current.rotation, { z: 0.3 }, 0)

      // // Can 2 - Lemon Lime
      // .to(roomRef.current.position, { x: 1, y: -0.2, z: -1 }, 0)
      // .to(roomRef.current.rotation, { z: 0 }, 0)

      // Can 3 - Grape
      // .to(can3Ref.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
      // .to(can3Ref.current.rotation, { z: -0.1 }, 0)

      // // Can 4 - Strawberry Lemonade
      // .to(can4Ref.current.position, { x: 0, y: -0.3, z: 1 }, 1)
      // .to(can4Ref.current.rotation, { z: 0.3 }, 0)

      // // Can 5 -Watermelon
      // .to(can5Ref.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
      // .to(can5Ref.current.rotation, { z: -0.25 }, 0)
      .to(
        groupRef.current.position,
        { x: 1, duration: 3, ease: 'sine.inOut' },
        1.3
      )
  })

  return (
    <group ref={groupRef}>
      <group ref={AriaGroupRef}>
        <AriModel
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position={[1.5, -0.37, -2.4]}
          scale={0.64}
          ref={ariaRef}
          animation="Gaming"
          key="gaming-scene"
        />
      </group>
      <group ref={roomGroupRef}>
        <RoomModel
          position={[0.5, -0.5, -2]}
          rotation={[0.1, -Math.PI / 1.8, 0]}
          scale={0.8}
          ref={roomRef}
        />
      </group>

      {/* <group ref={AriaGroupRef}>
        <FloatingCan
          ref={ariaRef}
          flavor="blackCherry"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <group ref={roomGroupRef}>
        <FloatingCan
          ref={roomRef}
          flavor="lemonLime"
          floatSpeed={FLOAT_SPEED}
        />
      </group>

      <FloatingCan ref={can3Ref} flavor="grape" floatSpeed={FLOAT_SPEED} />

      <FloatingCan
        ref={can4Ref}
        flavor="strawberryLemonade"
        floatSpeed={FLOAT_SPEED}
      />

      <FloatingCan ref={can5Ref} flavor="watermelon" floatSpeed={FLOAT_SPEED} /> */}

      <OrbitControls />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  )
}
