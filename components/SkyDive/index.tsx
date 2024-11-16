'use client'

import { Bounded } from '@/components/Bounded'
import Scene from './Scene'
import { View } from '@react-three/drei'

const SkyDive = () => {
  return (
    <Bounded
      // data-slice-type={slice.slice_type}
      // data-slice-variation={slice.variation}
      className="skydive h-screen"
    >
      {/* <h2 className="sr-only">{slice.primary.sentence}</h2> */}
      <View className="h-screen w-screen">
        <Scene
          // flavor = "blackCherry"
          sentence={'blackCherry is good enough'}
        />
      </View>
    </Bounded>
  )
}

export default SkyDive
