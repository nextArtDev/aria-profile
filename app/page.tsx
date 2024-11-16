import AlternatingText from '@/components/AlternatingText'
// import Carousel from '@/components/carouseel'

import Hero from '@/components/Hero'
import SkyDive from '@/components/SkyDive'

export default async function Home() {
  return (
    <div className=" min-h-screen ">
      <Hero />
      <SkyDive />
      <AlternatingText />
      {/* 
      <Carousel />
      <AlternatingText /> */}
    </div>
  )
}
